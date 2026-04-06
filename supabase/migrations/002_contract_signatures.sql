-- Run in Supabase SQL Editor (or via CLI) once per project.

create table if not exists public.contract_signatures (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  email_normalized text generated always as (lower(email)) stored,
  signature_text text not null,
  created_at timestamptz not null default now(),
  constraint contract_signatures_full_name_len check (length(full_name) between 2 and 200),
  constraint contract_signatures_email_len check (length(email) between 3 and 320),
  constraint contract_signatures_signature_len check (length(signature_text) between 1 and 80)
);

create unique index if not exists contract_signatures_email_normalized_uq
  on public.contract_signatures (email_normalized);

grant usage on schema public to anon, authenticated;

alter table public.contract_signatures enable row level security;

-- No direct reads/writes for anon users.
revoke all on table public.contract_signatures from anon, authenticated;

drop policy if exists "contract_signatures_no_select" on public.contract_signatures;
create policy "contract_signatures_no_select"
  on public.contract_signatures
  for select
  to anon, authenticated
  using (false);

drop policy if exists "contract_signatures_no_insert" on public.contract_signatures;
create policy "contract_signatures_no_insert"
  on public.contract_signatures
  for insert
  to anon, authenticated
  with check (false);

-- Writes only through SECURITY DEFINER RPC (no direct insert/update for anon).

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

  -- Very light validation: contains one '@' and at least one '.' after it.
  if position('@' in cleaned_email) = 0 then
    raise exception 'invalid email';
  end if;
  if position('.' in split_part(cleaned_email, '@', 2)) = 0 then
    raise exception 'invalid email';
  end if;

  if cleaned_signature is null or length(cleaned_signature) < 1 or length(cleaned_signature) > 80 then
    raise exception 'invalid signature';
  end if;

  insert into public.contract_signatures (full_name, email, signature_text)
  values (cleaned_full_name, cleaned_email, cleaned_signature)
  returning id into new_id;

  return new_id;
exception
  when unique_violation then
    raise exception 'already signed';
end;
$$;

revoke all on function public.create_contract_signature(text, text, text) from public;
grant execute on function public.create_contract_signature(text, text, text) to anon;
grant execute on function public.create_contract_signature(text, text, text) to authenticated;

