import type { PageServerLoad } from './$types';

export const load = (async ( { parent,  }) => {
    const { all_questions } = await parent();
    console.info("...loading data all_questions from parent data");
    return { all_questions };
}) satisfies PageServerLoad;