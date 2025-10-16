<script lang="ts">
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';

	let { data }: PageProps = $props();
	let items = data.item.data;
	let nm2: number = 100;
	let wvl: string = nm2.toString() + 'px';

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
				<p class="item-name">{item['title']}</p>
			</div>
		</a>
	{/each}
</div>

<style>
	.item-link {
		width: auto;
		height: auto;
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
		justify-content: center;
		align-items: center;
		gap: 12px;
		border-radius: 10px;
		background: rgb(43, 43, 96);
		text-wrap: wrap;
		width: 278px;
		height: auto;
	}

	.item-name {
		align-self: stretch;
		color: #fff;
		text-align: center;
		font-family: Inter;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.item-name:hover {
		color: dodgerblue;
	}
</style>
