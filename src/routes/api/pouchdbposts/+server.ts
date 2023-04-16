import { listPosts } from '$lib/PouchDB';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// api/pouchdbposts GET
export const GET: RequestHandler = async (event) => {
	const posts = await listPosts();

	return json(posts);
};
