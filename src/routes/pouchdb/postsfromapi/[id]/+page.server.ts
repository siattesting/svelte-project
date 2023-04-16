import { error } from '@sveltejs/kit';
// import type { PageServerLoad } from '../../posts/$types';

// export const load: PageServerLoad = async ({ params }) => {
// 	console.log('Params:', params);
// 	try {
// 		const response = await fetch(`http://localhost:5173/pouchdb/api/pouchdbposts/${params.id}`);
// 		const post = await response.json();
// 		if (!response.ok) {
// 			throw new Error('Network response was not OK');
// 		}
// 		if (!post) {
// 			throw error(404, 'Item not found.');
// 		}
// 		return { post };
// 	} catch (error) {
// 		console.error('There has been a problem with your fetch operation:', error);
// 	}
// };

import { readPost } from '$lib/PouchDB';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		post: await readPost(params.id)
	};
}) satisfies PageServerLoad;
