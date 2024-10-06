import { QuestionService } from '$lib/QuestionsService';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, parent }) => {
    await parent();
    console.debug("/List: Layout started...")

    // get all the questions of the system
    const qService = new QuestionService(supabase);
    // const allQuestions = await qService.fetchAllQuestions();

    const qFetcher = async () => {
        return await qService.fetchAllQuestions();
    }
    
    return {
        allQuestions: qFetcher()
    };
}) satisfies LayoutServerLoad;