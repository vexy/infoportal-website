import type { PageServerLoad } from './$types';
import { QuestionService } from '$lib/QuestionsService';
import type { Stats } from '$models/Models';

export const load = (async ({ locals: { supabase }, parent }) => {
    await parent();

    // initialize starting object
    let returnObject: Stats = {
        id: 0,
        users_count: 0,
        questions_count: 0,
        country1: '',
        country2: '',
        country3: '',
        country4: '',
        country5: ''
    };
    try {
        // get the stats
        const statsResolver = new QuestionService(supabase);
        returnObject = await statsResolver.getWebsiteStats();
    } catch (error) {
        console.error("Unable to get all questions !")
        console.error("Reason :", error)
    }

    return {
        statsObject: returnObject[0]
    };
}) satisfies PageServerLoad;