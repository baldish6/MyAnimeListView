<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Togglebtn from '$lib/ButtonToggle/togglebtn.svelte';
	import { getCount, setCount } from '$lib/searchValueUrl/searchUrlv';

	let { updateSearch } = $props();

	let search = $state('nothing');

	let activev = $state(false);

	let end_search: string = 'order_by=score&sort=desc&page=1';
	let start_search: string = 'https://api.jikan.moe/v4/anime?';

	let genres_list = new Map();
	let genres: string = 'genres=9';
	let wanted_genres: number[] = [];
	let middle_search = $state('');
	let sort = 'desc';
	//let current_genre = 'order_by=score&sort=desc&page=1';

	let url_strng = $derived(start_search + middle_search + end_search);

	let genrezs = $state([]);

	/*TODO: 
	[ ] genres
	[ ] year
	[ ]  season
	[ ]   format type
	[ ]	name
	[ ]	status
	[ ]	min-max score
	[ ]	pg13 rating
	[ ]	sfw
	[ ]	order by
	[x]	producers
	[ ]	start - end date
	*/

	const searchFn = () => {
		console.log('you searched for ' + search);
	};

	function showbox() {
		activev = !activev;
	}

	const goToGenre = (item: string) => {
		let vls = genres_list.get(item);
		var index = wanted_genres.indexOf(vls);
		if (index >= 0) {
			wanted_genres.splice(index, 1);
		} else {
			wanted_genres.push(vls);
		}

		let current_genre_url = '&genres=';
		wanted_genres.forEach((itm) => {
			current_genre_url = current_genre_url + itm.toString() + ',';
		});
		if (current_genre_url == '&genres=') {
			middle_search = '';
		} else {
			middle_search = current_genre_url.slice(0, -1) + '&';
		}
		updateSearch(middle_search);

		//console.log(url_strng + current_genre_url.slice(0, -1));

		//wanted_genres.add(genres_list.get(item))
	};

	async function loadGenres() {
		const genres_url = 'https://api.jikan.moe/v4/genres/anime';
		const res = await fetch(genres_url);
		const item = await res.json();
		if (res.ok) {
			item.data.sort((a, b) => b['name'] - a['name']);
			/*item.data.forEach((element) => {
				console.log(element['name'] + ' ' + element['count']);
			});*/

			item.data.forEach((element) => {
				genres_list.set(element['name'], element['mal_id']);
				genrezs.push(element['name']);
			});
		}
	}

	onMount(() => {
		loadGenres();
	});
</script>

<div>
	<button
		onclick={(e) => {
			e.preventDefault();
			showbox();
		}}
		class="rounded-md bg-blue-600 p-4">X</button
	>
	<div class={activev ? 'big-boxz-visible' : 'big-boxz-hidden'}>
		<div>
			<p>{url_strng}</p>
		</div>
		<div class="search-div">
			Searching in {search}
			<div class="search-group">
				<input class="input-pram" type="search" placeholder="search" value={search} />
				<button onclick={searchFn} class="search-btn">
					<svg
						class="scale-70 fill-amber-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
						><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
							d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
						/></svg
					>
				</button>
			</div>
			<button
				onclick={() => {
					//console.log('clicked');
					setCount(url_strng);
					//console.log(getCount());
					goto('/list');
				}}
				class="rounded-md bg-blue-500 p-4">next page</button
			>
		</div>

		<div class="genre-txt">
			{#each genrezs as item}
				<Togglebtn {updateSearch} {item} {goToGenre} />
			{/each}
		</div>
	</div>
</div>

<style>
	.big-boxz-visible {
		display: flex;
		flex-direction: column;
		background-color: rgb(52, 7, 124);
		padding: 4px 8px 4px 8px;
		color: var(--color-amber-50);
	}

	.big-boxz-hidden {
		display: none;
	}

	.genre-txt {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px 16px 10px 16px;
	}

	.search-div {
		color: azure;
		width: 100%;
		height: fit-content;
		padding: 20px 50px 20px 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		background-color: rgb(63, 63, 63);
	}
	.search-group {
		display: flex;
		flex-direction: row;
		height: 42px;
		gap: 0;
	}

	.input-pram {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		color: black;
		height: 100%;
		border: 0px;
	}

	.search-btn {
		background-color: dodgerblue;
		height: 100%;
		width: 42px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
</style>
