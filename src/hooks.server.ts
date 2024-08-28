import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'
import { createServerClient } from '@supabase/ssr'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  console.log("Creating supabase client...")

  // create supabase server client
  const supabaseClient = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
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

  // check for user object
  const { data: { user }, error, } = await supabaseClient.auth.getUser()
  if (error) {
    // JWT validation has failed
    console.log("Unable to get active user, should redirect to login...")
    // return { session: null, user: null }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    },
  })
}