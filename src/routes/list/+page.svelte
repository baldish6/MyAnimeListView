<script lang="ts">
	import type { PageProps } from './$types';
	import { onMount } from 'svelte';
	import { tick } from 'svelte';

	let Pagenum: number = $state(1);
	const baseUrl = 'https://api.jikan.moe/v4/anime?';
	let sparam: string = 'order_by=score&sort=desc&genres=9&page=';
	let sfprm = $derived(baseUrl + sparam + Pagenum.toString());

	let { data }: PageProps = $props();

	let items = $state(data.item.data);
	let loading = false;
	let hasMore = true;

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

	function checkInfiniteScroll() {
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

		if (itemz != null) {
			//console.log(itemz);
			observer.observe(itemz);
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
</script>

<div class="full-view">
	{#each items as item}
		<a class="item-link" href={item['url']}>
			<div class="single-list-item">
				<img class="item-img" src={item['images']['webp']['large_image_url']} alt={item['title']} />
				<div class="text-part">
					<p class="item-name">{item['title']}</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.item-link {
		width: auto;
		height: auto;
	}

	.text-part {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 4px;
		padding-right: 4px;
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

	.item-img {
		border-radius: 10px 10px 0px 0px;
		width: 278px;
		height: 363px;
	}
	.single-list-item {
		display: flex;
		padding-bottom: 12px;
		flex-direction: column;
		gap: 12px;
		border-radius: 10px;
		background: rgb(43, 43, 96);
		text-wrap: wrap;
		width: 278px;
		height: 462px;
		box-shadow: 12px 12px 16px;
		transition: scale 0.1s;
	}

	.single-list-item:hover {
		scale: 1.1;
	}

	.item-name {
		color: #fff;
		text-align: center;

		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.item-name:hover {
		color: dodgerblue;
	}
</style>
