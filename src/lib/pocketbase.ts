import { PUBLIC_POCKETBASE_LOCAL_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase(PUBLIC_POCKETBASE_LOCAL_URL);

export const currentUser = writable(pb.authStore.model);

export interface Todo {
	// type the collection fields you want to use...
	id: string;
	title: string;
	content: string;
	completed: boolean;
}
