import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { readPost } from '$lib/PouchDB';

// api/pouchdbposts GET
export const GET: RequestHandler = async ({ params }) => {
	const post = await readPost(params.slug);

	return json(post);
};
