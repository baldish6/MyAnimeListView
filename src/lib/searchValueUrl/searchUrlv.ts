let baseUrlvalue = 'https://api.jikan.moe/v4/anime?order_by=score&sort=desc&page=1';

export function getCount() {
	return baseUrlvalue;
}

export function setCount(value: string) {
	baseUrlvalue = value;
}
