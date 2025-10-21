export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { itemId } = params;
	const baseUrl = 'https://api.jikan.moe/v4/anime/' + itemId + '/full';
	console.log(baseUrl);
	const res = await fetch(baseUrl);
	const item = await res.json();
	return { item };
};
