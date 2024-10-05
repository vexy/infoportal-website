import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    // check if we have code param
    const code = url.searchParams.get('code');
    if(code) {
        // just fw to auth route
        console.debug("Redirecting to auth...");
        redirect(301, '/auth');
    }
    
    console.debug("Main route (/) GET URL", url);

    return new Response(); // just pass through
};