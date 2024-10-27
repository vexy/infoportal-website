import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals : { supabase }, parent}) => {
    //just await all the parent laoding
    await parent();
    console.info("[protected_routes] Checking for user object")

    // check if we have active user object:
    const { data, error } = await supabase.auth.getUser();

    if(error || !data) {
        // just return to login page
        console.error("Unable to get user object. Redirecting to root...");
        redirect(301, '/');
    }

    return { };
}) satisfies LayoutServerLoad;