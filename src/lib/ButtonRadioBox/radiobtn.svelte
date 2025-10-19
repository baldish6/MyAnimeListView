<script>
	let { names } = $props();
</script>

<div class="btn-list">
	{#each names as name}
		<button class="single-btn">{name}</button>
	{/each}
</div>

<style>
	.btn-list {
		display: flex;
		flex-direction: row;
		gap: 12px;
		font-size: large;
	}
	.single-btn {
		min-height: fit-content;
		height: 56px;
		width: 120px;
		background-color: dodgerblue;
		border-radius: 4px;
	}
</style>
