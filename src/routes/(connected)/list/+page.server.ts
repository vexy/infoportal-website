import type { PageServerLoad } from './$types';
import { QuestionService } from '$lib/QuestionsService'

export const load = (async ( { parent,  }) => {
    // const qs = new QuestionService();
    // const allQuestions = await qs.loadAllQuestions();
    const { all_questions } = await parent();
    console.debug("After awaiting parent, data is: ")
    console.debug(all_questions);

    // //TODO: try catch later
    // const allQuestions = await parentData.qService.fetchAllQuestions();

    return { all_questions };
}) satisfies PageServerLoad;