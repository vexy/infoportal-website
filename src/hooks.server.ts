import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'
import { createServerClient } from '@supabase/ssr'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    console.log("Hooks executing...")

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
    })

  /**
   * Unlike `supabase.auth.getSession()`, which returns the session _without_
   * validating the JWT, this function also calls `getUser()` to validate the
   * JWT before returning the session.
   */
  event.locals.safeGetSession = async () => {
    const { data: { session }, } = await event.locals.supabase.auth.getSession()
    if (!session) {
      return { session: null, user: null }
    }

    const { data: { user }, error, } = await event.locals.supabase.auth.getUser()
    if (error) {
      // JWT validation has failed
      console.log("Unable to get active user, returning null objects.")
      return { session: null, user: null }
    }

    return { session, user }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    },
  })
}