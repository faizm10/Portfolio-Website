-- Run in Supabase SQL Editor (or via CLI) once per project.

-- New signers: single default checklist item.
create or replace function public.create_contract_signature(
  full_name text,
  email text,
  signature_text text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
  cleaned_full_name text;
  cleaned_email text;
  cleaned_signature text;
  cleaned_slug text;
  default_checklist jsonb;
begin
  cleaned_full_name := btrim(full_name);
  cleaned_email := btrim(email);
  cleaned_signature := btrim(signature_text);

  if cleaned_full_name is null or length(cleaned_full_name) < 2 or length(cleaned_full_name) > 200 then
    raise exception 'invalid full name';
  end if;

  if cleaned_email is null or length(cleaned_email) < 3 or length(cleaned_email) > 320 then
    raise exception 'invalid email';
  end if;

  if position('@' in cleaned_email) = 0 then
    raise exception 'invalid email';
  end if;
  if position('.' in split_part(cleaned_email, '@', 2)) = 0 then
    raise exception 'invalid email';
  end if;

  if cleaned_signature is null or length(cleaned_signature) < 1 or length(cleaned_signature) > 80 then
    raise exception 'invalid signature';
  end if;

  cleaned_slug := regexp_replace(lower(cleaned_signature), '[^a-z0-9]+', '', 'g');
  if cleaned_slug is null or length(cleaned_slug) < 1 or length(cleaned_slug) > 80 then
    raise exception 'invalid slug';
  end if;

  default_checklist := jsonb_build_array(
    jsonb_build_object(
      'id', 'mentor_checkin',
      'text', 'check in with your mentor to get started',
      'done', false
    )
  );

  insert into public.contract_signatures (full_name, email, signature_text, first_name_slug, checklist)
  values (cleaned_full_name, cleaned_email, cleaned_signature, cleaned_slug, default_checklist)
  returning id into new_id;

  return new_id;
exception
  when unique_violation then
    if sqlerrm ilike '%contract_signatures_email_normalized_uq%' then
      raise exception 'already signed';
    elsif sqlerrm ilike '%contract_signatures_first_name_slug_uq%' then
      raise exception 'slug already taken';
    else
      raise;
    end if;
end;
$$;

revoke all on function public.create_contract_signature(text, text, text) from public;
grant execute on function public.create_contract_signature(text, text, text) to anon;
grant execute on function public.create_contract_signature(text, text, text) to authenticated;

-- Toggle done flag on a checklist item (public, same as append).
create or replace function public.toggle_contract_checklist_item(
  target_slug text,
  item_id text,
  done boolean
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  cleaned_slug text;
  cleaned_id text;
  updated jsonb;
begin
  cleaned_slug := lower(regexp_replace(btrim(target_slug), '[^a-z0-9]+', '', 'g'));
  cleaned_id := btrim(item_id);

  if cleaned_slug is null or length(cleaned_slug) < 1 or length(cleaned_slug) > 80 then
    raise exception 'invalid slug';
  end if;

  if cleaned_id is null or length(cleaned_id) < 1 or length(cleaned_id) > 120 then
    raise exception 'invalid item id';
  end if;

  update public.contract_signatures cs
  set
    checklist = (
      select coalesce(
        jsonb_agg(
          case
            when elem->>'id' = cleaned_id then jsonb_set(elem, '{done}', to_jsonb(done))
            else elem
          end
        ),
        '[]'::jsonb
      )
      from jsonb_array_elements(coalesce(cs.checklist, '[]'::jsonb)) as elem
    ),
    checklist_updated_at = now()
  where cs.first_name_slug = cleaned_slug
  returning checklist into updated;

  if updated is null then
    raise exception 'not found';
  end if;

  return updated;
end;
$$;

revoke all on function public.toggle_contract_checklist_item(text, text, boolean) from public;
grant execute on function public.toggle_contract_checklist_item(text, text, boolean) to anon;
grant execute on function public.toggle_contract_checklist_item(text, text, boolean) to authenticated;
