import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, depends }) => {
    console.debug("Layout.server");
    depends('supabase:auth');

    return {
        cookies: cookies.getAll(),
    }
}