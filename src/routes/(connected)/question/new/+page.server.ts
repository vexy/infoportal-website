import { QuestionService } from '$lib/QuestionsService.js';
import { fail } from '@sveltejs/kit';

export const actions = {
    postQuestion: async ({ request, locals: { supabase } }) => {
        //parse and check for data
        const formData = await request.formData();
        
        // check for title
        const title = formData.get('title');
        if(!title) {
            return fail(400, { missingTitle: true })
        }

        // check for at least 2 non empty options
        const option_0 = formData.get('option_0');
        const option_1 = formData.get('option_1');
        //
        if(!option_0 || !option_1) {
            return fail(400, { missingOption: true })
        }

        // cycle through all options and see what is available
        for(let i = 0; i < 5; i++) {
            const anyOption = formData.get(`option_${i}`);
            console.debug(`Option ${i}: ${anyOption}`)
        }

        console.debug("Creating question service....")
        const q_service = new QuestionService(supabase);
    }
}