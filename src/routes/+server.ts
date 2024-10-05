import type { RequestHandler } from './$types';
import { redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals: { supabase }, url }) => {
    // check if we received any credentials
    const authCredentials = url.searchParams.get('auth');
    if(authCredentials) {
        // perform signup via google
        const authResponse = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: authCredentials,
        })
        //TODO: add NONCE

        // check for errors
        if(authResponse.error) {
            //TODO: Redirect to static page /auth-error
            console.error("Signup error. Will redirect to /auth-error")
            // throw redirect(301, '/auth-error');
        }
        
        console.debug("User successfully registered.")
        throw redirect(301, '/list');
    } else {
        return new Response();  //pass through
    }
};
