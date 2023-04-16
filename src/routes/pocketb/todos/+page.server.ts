import { pb, type Todo } from '$lib/pocketbase';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const serializeNonPOJOs = (value: object | null) => {
		return structuredClone(value);
	};
	try {
		const records = await pb.collection('todos').getFullList<Todo>({ sort: '-created' });
		// console.log(records);
		return {
			todos: serializeNonPOJOs(records)
		};
	} catch (error) {
		console.log(error);
	}
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
