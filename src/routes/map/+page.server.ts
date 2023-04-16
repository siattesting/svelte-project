import * as mapDB from '$lib/mapDB';
import { fail } from '@sveltejs/kit';

export const load: PageLoad = async ({ cookies }) => {
	const id = cookies.get('userId');
	if (!id) {
		cookies.set('userId', crypto.randomUUID(), { path: '/' });
	}
	return {
		todos: mapDB.getTodos(id) ?? []
	};
};

export const actions: Actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		try {
			mapDB.createTodo(cookies.get('userId'), data.get('description'));
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		mapDB.deleteTodo(cookies.get('userId'), data.get('id'));
	}
};
