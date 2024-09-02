import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, fetch }) => {
  console.debug("Main.Layout.ts - creating supabase auth object...");

  // initialize best supabase client
  const supabase = isBrowser()
    ? createBrowserClient(data.url, data.anon_key, {
        global: {
          fetch,
        },
      })
    : createServerClient(data.url, data.anon_key, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies;
          },
        },
      })
  
  const supaAuth = supabase.auth;
  const redirectURL = 'http://localhost:5173/auth' //TODO: Read from .env

  return { 
    supaAuth: supaAuth,
    redirectURL: redirectURL
  }
};