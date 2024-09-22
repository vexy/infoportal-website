import { QuestionService } from '$lib/QuestionsService';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: {supabase}, params }) => {
    // TODO: guard from errors and bad slugs
    // extract slug
    const questionID = Number(params.slug);
    console.debug("QuestionID to load: ", questionID);

    // Setup question service
    const q_service = new QuestionService(supabase);
    const slugQuestion = await q_service.loadQuestion(questionID)

    return { 
        slugQuestion,
        hasAnswered: false
     };
}) satisfies PageServerLoad;