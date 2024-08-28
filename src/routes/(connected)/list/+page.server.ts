import type { PageServerLoad } from './$types';
import { QuestionService } from '$lib/QuestionsService'

export const load = (async () => {
    const qs = new QuestionService();
    const allQuestions = await qs.loadAllQuestions();

    return { allQuestions };
}) satisfies PageServerLoad;