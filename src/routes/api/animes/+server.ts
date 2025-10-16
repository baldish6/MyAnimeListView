import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://api.jikan.moe/v4/anime?order_by=score&sort=desc&genres=9&page=2';
	//const baseUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
	const response = await fetch(baseUrl);
	return response;
};
