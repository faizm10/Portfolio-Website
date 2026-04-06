-- Run in Supabase SQL Editor (or via CLI) once per project.

-- Public append: anyone with the link can add items.
create or replace function public.append_contract_checklist_item(
  target_slug text,
  item_text text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  cleaned_slug text;
  cleaned_text text;
  updated jsonb;
  new_item jsonb;
begin
  cleaned_slug := lower(regexp_replace(btrim(target_slug), '[^a-z0-9]+', '', 'g'));
  cleaned_text := btrim(item_text);

  if cleaned_slug is null or length(cleaned_slug) < 1 or length(cleaned_slug) > 80 then
    raise exception 'invalid slug';
  end if;

  if cleaned_text is null or length(cleaned_text) < 1 or length(cleaned_text) > 140 then
    raise exception 'invalid item';
  end if;

  new_item := jsonb_build_object(
    'id', replace(gen_random_uuid()::text, '-', ''),
    'text', cleaned_text,
    'done', false
  );

  update public.contract_signatures
  set
    checklist = coalesce(checklist, '[]'::jsonb) || jsonb_build_array(new_item),
    checklist_updated_at = now()
  where first_name_slug = cleaned_slug
  returning checklist into updated;

  if updated is null then
    raise exception 'not found';
  end if;

  return updated;
end;
$$;

revoke all on function public.append_contract_checklist_item(text, text) from public;
grant execute on function public.append_contract_checklist_item(text, text) to anon;
grant execute on function public.append_contract_checklist_item(text, text) to authenticated;

