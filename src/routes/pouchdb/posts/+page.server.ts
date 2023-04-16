import * as db from '$lib/PouchDB.js';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export async function load() {
	const posts = await db.listPosts();
	return {
		summaries: posts.map((post) => ({
			id: post._id,
			title: post.title,
			content: post.content,
			type: post.type,
			created_at: post.created_at,
			updated_at: post.updated_at
		}))
	};
}

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		try {
			db.createPost({
				title: data.get('title'),
				content: data.get('content')
			});
			throw redirect(307, '../posts');
		} catch (error) {
			return fail(422, {
				title: data.get('title'),
				content: data.get('content'),
				error: error.message
			});
		}
	}
};
