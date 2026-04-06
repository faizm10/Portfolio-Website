-- Run in Supabase SQL Editor (or via CLI) once per project.
-- Then: Database → Replication → ensure `photo_likes` is enabled for supabase_realtime.

create table if not exists public.photo_likes (
  photo_id text primary key,
  count bigint not null default 0 check (count >= 0)
);

grant usage on schema public to anon, authenticated;
grant select on table public.photo_likes to anon, authenticated;

alter table public.photo_likes enable row level security;

drop policy if exists "photo_likes_select_public" on public.photo_likes;
create policy "photo_likes_select_public"
  on public.photo_likes for select
  to anon, authenticated
  using (true);

-- Writes only through SECURITY DEFINER RPC (no direct insert/update for anon).

create or replace function public.increment_photo_like(target_id text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count bigint;
begin
  if target_id is null or length(target_id) = 0 or length(target_id) > 2048 then
    raise exception 'invalid photo id';
  end if;

  insert into public.photo_likes (photo_id, count)
  values (target_id, 1)
  on conflict (photo_id)
  do update set count = public.photo_likes.count + 1
  returning count into new_count;

  return new_count;
end;
$$;

revoke all on function public.increment_photo_like(text) from public;
grant execute on function public.increment_photo_like(text) to anon;
grant execute on function public.increment_photo_like(text) to authenticated;

-- Enable realtime (pick one):
-- • Dashboard → Database → Publications → supabase_realtime → add `photo_likes`, or
-- • SQL: alter publication supabase_realtime add table public.photo_likes;
