import { QuestionService } from '$lib/QuestionsService';
import type { QuestionOverview } from '$models/Models';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase }, parent }) => {
    await parent();

    // get all the questions of the system as standalone function
    // so that the results can be streamed (and to show loading indicator meanwhile)
    const questionsFetchPromise = async (): Promise<QuestionOverview[]> => {
        const qService = new QuestionService(supabase);

        //check for errors
        try {
            const results = await qService.fetchAllQuestions();
            return Promise.resolve(results);
        } catch (err) {
            console.error("Error during data fetch. Reason: ")
            console.error(err)
            return Promise.resolve([]);
        }
    }
    
    return {
        allQuestions: questionsFetchPromise()
    };
}) satisfies LayoutServerLoad;