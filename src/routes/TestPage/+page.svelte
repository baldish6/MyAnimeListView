<script lang="ts">
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';

	let { data }: PageProps = $props();
</script>

<p>Paginaaa</p>
<button
	onclick={() => {
		console.log('clicked');
		goto('/searchParam');
	}}
	class="rounded-md bg-blue-500 p-4">next page</button
>
