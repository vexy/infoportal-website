// import { SOME_SECRET, SUPABASE_URL } from "$env/static/private";
import { QuestionService } from '$lib/QuestionsService';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    //TODO: Load specific question
    const qs = new QuestionService();
    const slugQuestion = await qs.loadQuestion(2);

    return { 
        slugQuestion,
        // secret: SOME_SECRET,
        // url: SUPABASE_URL
     };
}) satisfies PageServerLoad;