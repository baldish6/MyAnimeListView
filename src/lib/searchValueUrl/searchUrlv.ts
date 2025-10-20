let baseUrlvalue = 'https://api.jikan.moe/v4/anime';

export function getCount() {
	return baseUrlvalue;
}

export function setCount(value: string) {
	baseUrlvalue = value;
}
