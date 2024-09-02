import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals : { supabase }}) => {
    console.log("/(connected)layout.server: checking user object...")

    // check if we have active user object:
    const { data, error } = await supabase.auth.getUser();

    if(error || !data) {
        // just return to login page
        console.debug("User object: ", data.user);
        console.error("Error object: ", error);
        console.error("Error during getting user. Redirecting to root.");
        redirect(301, '/');
    }

    return { };
}) satisfies LayoutServerLoad;