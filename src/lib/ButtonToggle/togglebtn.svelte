<script lang="ts">
	let { item, goToGenre } = $props();
	let activev = $state(false);
</script>

<button
	onclick={() => {
		activev = !activev;
		goToGenre(item);
	}}
	class={activev ? 'genre-btn-active' : 'genre-btn-not-active'}
>
	{item}
</button>

<style>
	.genre-btn-not-active {
		background-color: rgb(63, 63, 63);
		border-radius: 4px;
		width: 160px;
		padding: 6px;
		text-align: center;
	}

	.genre-btn-active {
		background-color: rgb(34, 152, 255);
		border-radius: 4px;
		width: 160px;
		padding: 6px;
		text-align: center;
	}

	.genre-btn-not-active:hover {
		background-color: rgb(232, 23, 180);
	}

	.genre-btn-active:hover {
		background-color: rgb(90, 26, 199);
	}
</style>
