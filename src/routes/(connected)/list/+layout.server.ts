import { QuestionService } from '$lib/QuestionsService';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, parent }) => {
    await parent();
    console.debug("/List: Layout started...")

    // get all the questions of the system as standalone function
    // so that the results can be streamed (and to show loading indicator meanwhile)
    const questionsFetchPromise = async () => {
        const qService = new QuestionService(supabase);
        return await qService.fetchAllQuestions();
    }
    
    return {
        allQuestions: questionsFetchPromise()
    };
}) satisfies LayoutServerLoad;