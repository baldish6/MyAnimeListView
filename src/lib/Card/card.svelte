<script lang="ts">
	let { item, statusView, scaleValue } = $props();
	const start_card = 'card-hover  single-list-item-';
</script>

<a class="item-link" href={item['url']}>
	<div class={start_card + statusView} style="--scaleValue:{scaleValue}">
		<img
			class={'item-img-' + statusView}
			src={item['images']['webp']['large_image_url']}
			alt={item['title']}
		/>

		<div class={'text-part-' + statusView}>
			<p class={'item-name-' + statusView}>{item['title']}</p>
			{#if statusView == 'desc'}
				<div class="scroll-desc">
					<p>{item['synopsis']}</p>
				</div>

				<div class="genre-div">
					{#each item['genres'] as genre}
						<p class="single-genre-p">{genre['name']}</p>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</a>

<style>
	.item-link {
		width: auto;
		height: auto;
	}
	.card-hover:hover {
		scale: 1.1;
	}
	/* Card */

	.single-list-item-card {
		--scaleV: calc(var(--scaleValue) * 0.1);
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

	.item-img-card {
		border-radius: 10px 10px 0px 0px;
		width: 278px;
		height: 363px;
	}

	.item-name-card {
		color: #fff;
		text-align: center;

		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.item-name-card:hover {
		color: dodgerblue;
	}

	.text-part-card {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 4px;
		padding-right: 4px;
	}

	/* Desc */

	.single-list-item-desc {
		--scaleV: calc(var(--scaleValue) * 0.1);
		display: flex;
		flex-direction: row;
		border-radius: 8px;
		width: calc(878px / var(--scaleV));
		height: calc(462px / var(--scaleV));
		align-items: center;
		justify-content: center;
		gap: 6px;
		flex-shrink: 0;
		background: rgb(196, 11, 11);
	}

	.item-img-desc {
		--scaleV: calc(var(--scaleValue) * 0.1);
		width: calc(278px / var(--scaleV));
		height: auto;
	}

	.text-part-desc {
		height: 100%;
		border-radius: 0px 8px 8px 0px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: calc(16px);
		align-items: center;
		padding-left: 4px;
		padding-right: 4px;
		background: rgb(196, 107, 11);
	}

	.item-name-desc {
		background-color: #29ac15;
		width: 100%;
		text-align: center;
	}

	.scroll-desc {
		overflow: hidden;
		text-overflow: ellipsis;
		height: 100%;
	}

	.genre-div {
		display: flex;
		flex-direction: row;
		align-items: center;

		gap: 4px;
		background-color: aqua;
		--scaleV: calc(var(--scaleValue) * 0.1);
		width: calc(552px / var(--scaleV));
		height: 100px;
		overflow: hidden;
	}

	.single-genre-p {
		background-color: black;
		height: 40px;
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		white-space: nowrap;
	}

	/* Row */

	.single-list-item-row {
		display: flex;
		padding-bottom: 12px;
		flex-direction: column;
		gap: 12px;
		border-radius: 10px;
		background: rgb(205, 24, 151);
		text-wrap: wrap;
		width: 278px;
		height: 462px;
		box-shadow: 12px 12px 16px;
		transition: scale 0.1s;
	}
</style>
