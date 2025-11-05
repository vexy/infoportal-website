import { QuestionService } from '$lib/QuestionsService';
import { VOTE_OPTIONS } from '$models/Models';
import type { PageServerLoad } from './$types';

export const actions = {
    commitOption: async ({ locals: { supabase }, params, request }) => {
        try {
            // get selected vote option from formData
            const formData = await request.formData();
            const selectedOption: VOTE_OPTIONS = formData.get('vote_options');

            // get question ID from the page slug
            // and setup QuestionService
            const questionID = Number(params.slug);
            const q_service = new QuestionService(supabase);

            await q_service.commitQuestionVote(questionID, selectedOption);
            console.debug("Commitment success !!")

            return { success: true }
        } catch(err) {
            console.error("Quesiton vote failed. Reason: ")
            console.error(err)
            return { success: false }
        }
    }
}

export const load = (async ({ locals: {supabase}, params, parent }) => {
    await parent();

    // TODO: guard from errors and bad slugs
    // extract question slug
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

    return {
        meta: questionMeta,
        scores: questionScores
    };
}) satisfies PageServerLoad;