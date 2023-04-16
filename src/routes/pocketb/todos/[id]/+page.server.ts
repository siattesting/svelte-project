import { pb } from '$lib/pocketbase';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const record = await pb.collection('todos').getOne(params.id, {});
	return {
		todo: structuredClone(record)
	};
};
