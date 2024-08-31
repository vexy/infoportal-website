import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { session }, cookies, depends }) => {
    console.debug("Layout.server");
    depends('supabase:auth');

    return {
        session,
        cookies: cookies.getAll(),
    }
}