<script>
	let { Btn_types, BtnChange } = $props();
	let current = $state('');
</script>

<div class="frmt-div">
	{#each Btn_types as item}
		<button
			onclick={() => {
				current == item ? (current = '') : (current = item);
				BtnChange(current);
			}}
			class={current == item ? 'frmt-btn frmt-act' : 'frmt-btn'}>{item}</button
		>
	{/each}
</div>

<style>
	.frmt-div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
	}

	.frmt-btn {
		width: 120px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: aliceblue;
		color: black;
		border-radius: 11px;
	}

	.frmt-act {
		background-color: red;
		color: white;
	}
</style>
