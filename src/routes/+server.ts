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
            console.error("Signup error. Will redirect to /auth-error")
            
            const reason = authResponse.error.message
            const code = authResponse.error.code
            const errorURL = `/auth-error?reason=${reason}&code=${code}`

            throw redirect(302, errorURL);
        }
        
        console.debug("User successfully registered.")
        throw redirect(303, '/list');
    } else {
        return new Response();  //pass through
    }
};
