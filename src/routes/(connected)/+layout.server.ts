import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private'
import type { LayoutServerLoad } from './$types'
import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'

export const load: LayoutServerLoad = async ({ fetch, depends, event }) => {
  console.log("Layout for (connected) routes...");
}