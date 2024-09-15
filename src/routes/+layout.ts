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
  
  // extracting and passing only supabase auth instance
  const supaAuth = supabase.auth;

  return { 
    supaAuth: supaAuth,
    redirectURL: data.redirect_url
  }
};