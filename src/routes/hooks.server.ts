import type { Handle } from '@sveltejs/kit';
import { _ChangeBaseUrl } from './api/animes/+server';

let bsrl2 = 'https://api.jikan.moe/v4/anime';

export const _ChangeBaseUrl2 = (name: string) => {
	bsrl2 = name;
};

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/list')) {
		_ChangeBaseUrl(bsrl2);
	}
	return resolve(event);
};
