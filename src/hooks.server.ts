import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'
import { createServerClient } from '@supabase/ssr'
import { type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  console.debug("Initializing supabase client in locals...");

  // create supabase server client
  event.locals.supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
          return event.cookies.getAll()
      },
      setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => 
            event.cookies.set(name, value, { ...options, path: '/' })
          )
      },
    },
    cookieEncoding: 'base64url'
  })

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    },
  })
}