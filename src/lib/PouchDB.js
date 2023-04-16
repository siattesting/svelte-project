import PouchDB from 'pouchdb';

const db = new PouchDB('my-db3');

/**
 * @param {string} text
 */
export function slugify(text) {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9]/g, '-')
		.toLowerCase();
}

export async function createPost(post) {
	if (post.title === '') {
		throw new Error('You must provide a title');
	}
	if (post.content === '') {
		throw new Error('You must provide a content');
	}
	post.created_at = new Date().toISOString();
	post.updated_at = new Date().toISOString();
	post.type = 'posts';
	post._id = 'post:' + new Date().toISOString();
	post.slug = slugify(post.title);

	const result = await db.post(post);
	return result;
}

export async function readPost(id) {
	const post = await db.get(id);
	return post;
}
export async function updatePost(post) {
	await db.put(post);
}
export async function deletePost(post) {
	const result = await db.remove(post);
	return result;
}

export async function listPosts() {
	const result = await db.allDocs({ include_docs: true });
	const posts = result.rows.map((row) => row.doc);
	return posts;
}
