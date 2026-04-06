import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(url && anonKey);
}

let browserClient: SupabaseClient | null = null;

/** Browser-only client for static export (likes, realtime). */
export function getSupabaseBrowserClient(): SupabaseClient | null {
  if (typeof window === "undefined") return null;
  if (!isSupabaseConfigured()) return null;
  if (!browserClient) {
    browserClient = createClient(url!, anonKey!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return browserClient;
}
