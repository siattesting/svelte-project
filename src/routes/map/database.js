const mapDB = new Map();

export function getTodos(userId) {
	if (!mapDB.get(userId)) {
		mapDB.set(userId, [
			{
				id: crypto.randomUUID(),
				decription: 'Lear SvelteKit',
				done: false
			}
		]);
	}
	return mapDB.get(userId);
}

export function createTodo(userId, description) {
	const todos = mapDB.get(userId);

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userId, todoId) {
	const todos = mapDB.get(userId);
	const index = todos.findIndex((todo) => todo.id === todoId);
	if (index !== -1) {
		todos.splice(index, 1);
	}
}
