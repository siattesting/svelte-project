import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { pb } from '$lib/pocketbase';

export const load: PageServerLoad = async () => {
	const result = await pb.collection('todos').getFullList();
	return {
		todos: structuredClone(result)
	};
};

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');
		const completed = data.get('completed');

		if (!title) {
			return fail(400, { title, missing: true });
		}
		if (!content) {
			return fail(400, { content, missing: true });
		}

		try {
			if (!title || !content) return;
			await pb.collection('todos').create({
				title,
				content,
				completed: completed ? true : false
			});
			throw redirect(307, '/pocketb/todos');
			return { success: true };
		} catch (error) {
			return fail(422, {
				title: data.get('title'),
				content: data.get('content'),
				completed: data.get('completed'),
				error: error.message
			});
		}
	}
};
