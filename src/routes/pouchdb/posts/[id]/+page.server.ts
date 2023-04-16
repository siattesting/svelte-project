import { readPost } from '$lib/PouchDB';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		post: await readPost(params.id)
	};
}) satisfies PageServerLoad;
