import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://api.jikan.moe/v4/anime';
	const response = await fetch(baseUrl);
	return response;
};
