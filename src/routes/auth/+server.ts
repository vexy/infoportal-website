import type { RequestHandler } from './$types';
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals: { supabase }, url }) => {
    // try to get the code parameter
    const code = url.searchParams.get('code');
    if(code) {
        // exchange code for session id
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        // check for errors
        if(!error) {
            console.info("GET /Auth route; Exchanged code for session object.");
            redirect(302, "/list");
        } else {
            //TODO: Redirect to an error page
        }
    }
};
