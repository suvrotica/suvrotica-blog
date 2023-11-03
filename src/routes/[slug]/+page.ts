import { error } from '@sveltejs/kit';

interface Params {
	slug: string;
}

export async function load({ params }: { params: Params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);

		// Note: Be careful with direct import paths like this, as they can lead to security issues.
		// It's better to validate the `slug` or use a predefined list of allowed paths.

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
