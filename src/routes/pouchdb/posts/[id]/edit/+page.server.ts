import { readPost, updatePost } from '$lib/PouchDB';
import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const getPost = async () => {
		const post = await readPost(params.id);
		if (!post) {
			throw error(404, 'Post not found.');
		}
		return post;
	};
	return {
		post: getPost()
	};
};

export const actions: Actions = {
	updatePost: async ({ request, params }) => {
		const { post } = readPost(params.id);
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};
		try {
			const doc = await readPost(params.id);
			doc.title = title;
			doc.content = content;
			const updatedItem = { ...doc, ...post };
			await updatePost(updatedItem);
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not update this post' });
		}
		return {
			status: 200
		};
	}
};
