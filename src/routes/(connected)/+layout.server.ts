import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { QuestionService } from '$lib/QuestionsService';

export const load = (async ({ locals : { supabase }}) => {
    console.log("/(connected)layout.server: checking user object...")

    // check if we have active user object:
    const { data, error } = await supabase.auth.getUser();

    if(error || !data) {
        // just return to login page
        console.error("Error during getting user. Redirecting to root.");
        redirect(301, '/');
    }

    const qService = new QuestionService(supabase);
    const allQuestions = await qService.fetchAllQuestions();

    return { all_questions: allQuestions };
}) satisfies LayoutServerLoad;