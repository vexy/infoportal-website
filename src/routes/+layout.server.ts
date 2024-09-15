import { SUPABASE_ANON_KEY, SUPABASE_URL, REDIRECT_URL } from '$env/static/private'
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    console.debug("Main.Layout.server - passing cookies and supabase config options...");

    return {
        cookies: cookies.getAll(),
        anon_key: SUPABASE_ANON_KEY,
        url: SUPABASE_URL,
        redirect_url: REDIRECT_URL
    }
}