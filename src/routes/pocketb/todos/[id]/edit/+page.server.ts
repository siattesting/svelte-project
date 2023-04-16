import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from '../$types';
import { pb } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ params }) => {
	const getTodo = async () => {
		const todo = await pb.collection('todos').getOne(params.id);
		if (!todo) {
			throw error(404, 'Todo not found.');
		}
		return structuredClone(todo);
	};
	return {
		todo: getTodo()
	};
};

export const actions: Actions = {
	updateTodo: async ({ request, params }) => {
		const { todo } = await pb.collection('todos').getOne(params.id);
		const { title, content, completed } = Object.fromEntries(
			await request.formData()
		) as unknown as {
			title: string;
			content: string;
			completed: boolean;
		};
		try {
			const doc = await pb.collection('todos').getOne(params.id);
			doc.title = title;
			doc.content = content;
			doc.completed = completed ? true : false;
			const updatedItem = { ...doc, ...todo };
			await pb.collection('todos').update(params.id, updatedItem);
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not update this post' });
		}
		return {
			status: 200
		};
	}
};
