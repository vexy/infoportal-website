import { QuestionService } from '$lib/QuestionsService';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: {supabase}, params }) => {
    // TODO: guard from errors and bad slugs
    // extract slug
    const questionID = Number(params.slug);
    console.debug("QuestionID to load: ", questionID);

    // initialize question service
    // and setup return values
    const q_service = new QuestionService(supabase);
    const hasAnsweredQuestion = await q_service.hasAnsweredQuestion(questionID)
    let questionMeta = null
    let questionScores = null

    // check if user has answered this question
    // and load appropriate dataset
    if(hasAnsweredQuestion) {
        questionScores = await q_service.loadQuestionScores(questionID)
    } else {
        questionMeta = await q_service.loadQuestionMeta(questionID)
    }

    // console.debug("data loading complete...");
    // console.debug("Has answered: ", hasAnsweredQuestion)
    // console.debug("Meta :", questionMeta)
    console.debug("Scores: ", questionScores)

    return {
        meta: questionMeta,
        scores: questionScores,
        hasAnswered: hasAnsweredQuestion
    };
}) satisfies PageServerLoad;