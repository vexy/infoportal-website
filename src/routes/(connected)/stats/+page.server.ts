import type { PageServerLoad } from './$types';
import { PUBLIC_USERS_COUNT, PUBLIC_USERS_COUNTRY } from '$env/static/public';

export const load = (async ({ locals: { supabase } }) => {
    const { error, data } = await supabase.from('questions').select('*');
    //
    // check for errors
    if(error) {
        console.error("Unable to get all questions")
        console.error("Reason :", error.message)
    }

    // get the actual users count
    const qCount = data?.length;

    // parse users countries and pass them as array of strings
    const uCountries = PUBLIC_USERS_COUNTRY.split(",")

    return {
        questionCount: qCount,
        usersCount: PUBLIC_USERS_COUNT,
        userCountries: uCountries
    };
}) satisfies PageServerLoad;