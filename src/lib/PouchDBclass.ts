import PouchDB from 'pouchdb';

const db = new PouchDB('my-db3');

class Post {
	async create(post) {
		const { id, ...rest } = post;
		await db.put({
			_id: 'post:' + new Date().toISOString(),
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
			type: 'posts',
			...rest
		});
	}

	async updatePost(post) {
		await db.put(post);
	}

	async getPost(id) {
		return await db.get(id);
	}

	async getAllPosts() {
		const { rows } = await db.allDocs({ include_docs: true });
		return rows.map(({ doc }) => doc);
	}
}
export default new Post();
