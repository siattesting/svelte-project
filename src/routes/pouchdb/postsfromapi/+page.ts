import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('../../api/pouchdbposts');
	const posts = await response.json();
	return { posts };
};
