const db = new Map();

export function getTodos(userId) {
	if (!db.get(userId)) {
		db.set(userId, [
			{
				id: crypto.randomUUID(),
				decription: 'Lear SvelteKit',
				done: false
			}
		]);
	}
	return db.get(userId);
}

export function createTodo(userId, description) {
	if (description == '') {
		throw new Error('A todo must have a description');
	}
	const todos = db.get(userId);

	if (todos.find((todo) => todo.description == description)) {
		throw new Error('Todos must be unique');
	}

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userId, todoId) {
	const todos = db.get(userId);
	const index = todos.findIndex((todo) => todo.id === todoId);
	if (index !== -1) {
		todos.splice(index, 1);
	}
}
