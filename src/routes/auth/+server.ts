import type { RequestHandler } from './$types';
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals: { supabase }, url }) => {
    // try to get the code parameter
    const code = url.searchParams.get('code');
    if(code) {
        // exchange code for session id
        console.debug("(route:/auth) Exchanging auth code for for session object...");
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        // check for errors
        if(!error) {
            // redirect to main list
            redirect(302, '/list');
        } else {
            //TODO: Redirect to an error page
            console.error("<Error during auth>");
            console.error(error);
            return new Response(`Authentication wasn't successfull; ${error}`);
        }
    }

    return new Response();  //pass through
};
