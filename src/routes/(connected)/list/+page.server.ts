import { QuestionService } from '$lib/QuestionsService';
import type { PageServerLoad } from './$types';

export const load = (async ( { locals: { supabase }, parent }) => {
    await parent();

    // get all the questions of the system
    const qService = new QuestionService(supabase);
    const allQuestions = await qService.fetchAllQuestions();
    
    return { allQuestions };
}) satisfies PageServerLoad;