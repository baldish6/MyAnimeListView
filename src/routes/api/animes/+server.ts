import type { RequestHandler } from './$types';
import { getCount } from '$lib/searchValueUrl/searchUrlv';

export const GET: RequestHandler = async () => {
	//const baseUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
	//const { request } = requestEvent;
	//console.log(await request.json());
	//const baseUrl = await request.json();

	//console.log(getCount());
	const response = await fetch(getCount());
	return response;
};
