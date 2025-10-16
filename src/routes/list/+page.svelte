<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let items = data.item.data;

	// search by
	// genre
	// date
	//
</script>

<div class="flex flex-col gap-2">
	{#each items as item}
		<p>{item['title']}</p>
		<img src={item['images']['webp']['image_url']} width="100" height="100" />
	{/each}
</div>
