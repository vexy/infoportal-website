import { QuestionService } from '$lib/QuestionsService';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: {supabase}, params }) => {
    // TODO: guard from errors and bad slugs
    // extract slug
    const questionID = Number(params.slug);
    console.debug("QuestionID to load: ", questionID);

    // setup return values
    let questionMeta = null
    let questionScores = null

    // initialize question service
    const q_service = new QuestionService(supabase);

    // get question meta
    questionMeta = await q_service.loadQuestionMeta(questionID)
    
    // check if user has answered this question
    const hasAnsweredQuestion = await q_service.hasAnsweredQuestion(questionID)
    if(hasAnsweredQuestion) {
        questionScores = await q_service.loadQuestionScores(questionID)
    }

    return { 
        meta: questionMeta,
        scores: questionScores,
        hasAnswered: hasAnsweredQuestion
    };
}) satisfies PageServerLoad;