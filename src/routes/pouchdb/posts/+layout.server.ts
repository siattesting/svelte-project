import { listPosts } from '$lib/PouchDB';
import type { LayoutServerLoad } from './$types';

import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	return {
		summaries: await listPosts()
	};
}) satisfies LayoutServerLoad;
