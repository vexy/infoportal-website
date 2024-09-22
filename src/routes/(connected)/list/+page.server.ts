import type { PageServerLoad } from './$types';

export const load = (async ( { parent,  }) => {
    const { all_questions } = await parent();
    return { all_questions };
}) satisfies PageServerLoad;