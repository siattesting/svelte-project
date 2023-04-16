import { pb } from '$lib/pocketbase';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const records = await pb.collection('todos').getFullList({
		sort: '-created'
	});
	return json(records);
};
