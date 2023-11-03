// page.ts
import type { Load } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export const load: Load = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	return { posts };
};
