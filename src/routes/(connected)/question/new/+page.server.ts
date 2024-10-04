import { QuestionService } from '$lib/QuestionsService.js';
import { fail } from '@sveltejs/kit';

export const actions = {
    postQuestion: async ({ request, locals: { supabase } }) => {
        //parse and check for data
        const formData = await request.formData();
        
        // check for title
        const title = formData.get('title')
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
        const questionOptions: string[] = [];
        for(let i = 0; i < 5; i++) {
            const anOption = formData.get(`option_${i}`);
            if(anOption) {
                // add title options
                questionOptions.push(anOption.toString());
            }
        }

        console.info("Creating question through question service....")
        const q_service = new QuestionService(supabase);
        //
        try {
            await q_service.addQuestion(title.toString(), questionOptions);
            // return success
            return { success: true }
        } catch (err) {
            console.error("Error during adding new question: ")
            console.error(err)

            //TODO: add more details
            return fail(403, {
                success: false,
                missingTitle: false, 
                missingOption: false
            })
        }
    }
}