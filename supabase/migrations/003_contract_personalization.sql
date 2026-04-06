-- Run in Supabase SQL Editor (or via CLI) once per project.

alter table public.contract_signatures
  add column if not exists first_name_slug text,
  add column if not exists checklist jsonb not null default '[]'::jsonb,
  add column if not exists checklist_updated_at timestamptz not null default now();

-- Backfill existing rows (best-effort).
update public.contract_signatures
set first_name_slug = regexp_replace(lower(signature_text), '[^a-z0-9]+', '', 'g')
where first_name_slug is null;

alter table public.contract_signatures
  alter column first_name_slug set not null;

create unique index if not exists contract_signatures_first_name_slug_uq
  on public.contract_signatures (first_name_slug);

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
    jsonb_build_object('id', 'show_up', 'text', 'show up', 'done', false),
    jsonb_build_object('id', 'keep_updated', 'text', 'keep me updated', 'done', false),
    jsonb_build_object('id', 'ship_weekly', 'text', 'ship something every week', 'done', false),
    jsonb_build_object('id', 'bring_real_problems', 'text', 'bring real problems', 'done', false),
    jsonb_build_object('id', 'ask_early', 'text', 'ask for feedback early', 'done', false)
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

create or replace function public.get_contract_by_slug(target_slug text)
returns table (
  full_name text,
  signature_text text,
  created_at timestamptz,
  checklist jsonb
)
language sql
security definer
set search_path = public
as $$
  select
    cs.full_name,
    cs.signature_text,
    cs.created_at,
    cs.checklist
  from public.contract_signatures cs
  where cs.first_name_slug = lower(regexp_replace(btrim(target_slug), '[^a-z0-9]+', '', 'g'))
  limit 1;
$$;

revoke all on function public.get_contract_by_slug(text) from public;
grant execute on function public.get_contract_by_slug(text) to anon;
grant execute on function public.get_contract_by_slug(text) to authenticated;

