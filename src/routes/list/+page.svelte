<script lang="ts">
	import Card from '$lib/Card/card.svelte';
	import type { PageProps } from './$types';
	import { onMount } from 'svelte';

	let Pagenum: number = $state(1);
	const baseUrl = 'https://api.jikan.moe/v4/anime?';
	let sparam: string = 'order_by=score&sort=desc&page=';
	let genres: string = $state('');
	let sfprm = $derived(baseUrl + genres + sparam + Pagenum.toString());

	let pageView: 'card' | '';

	let { data }: PageProps = $props();

	let items = $state(data.item.data);
	let loading = false;
	let hasMore = true;

	let statusView: 'card' | 'desc' | 'row' = $state('desc');
	let scaleValue = $state(11);

	/* TODO: 
		[ ] three ways visualize
		[ ] single items
		[ ] add loading
	*/

	async function updateSearch(newg: string) {
		Pagenum = 1;
		genres = newg;
		checkInfiniteScroll(true);
		console.log(sfprm);
		const res = await fetch(sfprm);
		const newArticles = await res.json();
		console.log(newArticles);
		if (!res.ok || newArticles.length === 0) {
			//items = [];
		} else {
			//items = [];

			items = [...newArticles.data];
			checkInfiniteScroll();
		}
	}

	async function loadArticles() {
		if (loading || !hasMore) return;
		loading = true;

		try {
			Pagenum++;
			//console.log('url searching : ' + sfprm);
			const res = await fetch(sfprm);
			const newArticles = await res.json();
			if (!res.ok || newArticles.length === 0) {
				hasMore = false;
			} else {
				items = [...items, ...newArticles.data];
			}
		} catch (error) {
			console.error('Loading error :', error);
			hasMore = false;
		} finally {
			loading = false;
		}
	}

	function checkInfiniteScroll(rm?: boolean) {
		//console.log(itemz);

		let itemz = document.querySelector('.item-link:nth-last-child(6');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);
					loadArticles();

					let itemz = document.querySelector('.item-link:nth-last-child(6');
					if (itemz != null) {
						//console.log(itemz);
						observer.observe(itemz);
					}
				}
			});
		}, {});
		if (rm) {
			observer.disconnect();
		} else {
			if (itemz != null) {
				//console.log(itemz);
				observer.observe(itemz);
			}
		}
	}

	onMount(() => {
		//loadArticles();
		checkInfiniteScroll();
	});

	// search by
	// genre
	// date
	//

	//'card' | 'desc' | 'row'
</script>

<div class="full-view-full">
	<div>
		<input
			onclick={() => {
				statusView = 'card';
			}}
			type="radio"
			id="card"
			name="view"
			value="card"
		/>
		<label id="cardlbl" for="card">card</label><br />
		<input
			onclick={() => {
				statusView = 'desc';
			}}
			type="radio"
			id="desc"
			name="view"
			value="desc"
		/>
		<label id="desclbl" for="desc">desc</label><br />
		<input
			onclick={() => {
				statusView = 'row';
			}}
			type="radio"
			id="row"
			name="view"
			value="row"
		/>
		<label id="rowlbl" for="row">row</label>
	</div>

	<div>
		<p>{scaleValue}</p>
		<input
			type="range"
			min="10"
			max="30"
			step="0.01"
			bind:value={scaleValue}
			class="slider"
			id="myRange"
		/>
	</div>
	<div class="full-view">
		{#each items as item}
			<Card {scaleValue} {statusView} {item} />
		{/each}
	</div>
</div>

<style>
	.full-view-full {
		background-color: rgb(30, 30, 45);
	}

	.full-view {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 48px 80px;
		justify-content: center;
		align-items: flex-start;
		column-gap: 48px;
		row-gap: 100px;
		background-color: rgb(30, 30, 45);
	}
</style>
