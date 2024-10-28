import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
    const { error, data } = await supabase.from('questions').select('*');
    //
    // check for errors
    if(error) {
        console.debug("Unable to get all questions")
        console.debug("Reason :", error.message)
    }

    const qCount = data?.length;

    return {
        questionCount: qCount
    };
}) satisfies PageServerLoad;