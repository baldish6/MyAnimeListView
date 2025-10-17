<script>
	import { goto } from '$app/navigation';
</script>

<h1>Welcome to SvelteKit</h1>
<button
	class="rounded-lg bg-blue-600 p-10 text-4xl text-amber-50 hover:bg-orange-700"
	onclick={() => {
		goto('/list');
	}}>List anime</button
>
