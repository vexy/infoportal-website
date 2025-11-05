import type { RequestHandler } from './$types';
import { redirect } from "@sveltejs/kit";
    
export const POST: RequestHandler = async ({ locals: { supabase }, url }) => {
    console.debug("AUTH POST FUNCTION !");
    // check if we received any credentials
    const authCredentials = url.searchParams.get('auth');
    if(authCredentials) {
        // perform signup via google
        const { data, error } = await supabase.auth.signInWithIdToken({
            provider: 'google',
            token: authCredentials,
        })
        //TODO: add NONCE

        // check for errors
        if(error) {
            console.error("Signup error. Will redirect to /auth-error")
            
            const reason = error.message
            const code = error.code
            const errorURL = `/auth-error?reason=${reason}&code=${code}`

            throw redirect(303, errorURL);
        }

        console.debug('User successfully registered, constructing redirect response.')
        throw redirect(308, '/list');
    } else {
        console.debug("NO AUTH parameter, passing through");
        return new Response();  //pass through
    }
}

export const GET: RequestHandler = async () => {
    // just pass through
    console.debug("Auth GET route... just passing through.")
    return new Response();
}
