<script lang="ts">
	let { item } = $props();
</script>

<a class="item-link" href={item['url']}>
	<div class="single-list-item-desc card-hover">
		<img
			class="item-img-desc"
			src={item['images']['webp']['large_image_url']}
			alt={item['title']}
		/>

		<div class="text-part-desc">
			<p class="item-name-desc">{item['title']}</p>

			<div class="scroll-desc">
				<p>{item['synopsis']}</p>
			</div>

			<div class="genre-div">
				{#each item['genres'] as genre}
					<p class="single-genre-p">{genre['name']}</p>
				{/each}
			</div>
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

	/* Desc */

	/* all */
	.single-list-item-desc {
		display: flex;
		flex-direction: row;
		border-radius: 8px;
		width: 878px;
		height: 462px;
		align-items: center;
		justify-content: center;
		gap: 6px;
		flex-shrink: 0;
		background: rgb(196, 11, 11);
	}

	/* img */
	.item-img-desc {
		width: 287px;
		height: auto;
	}

	/* name */
	.item-name-desc {
		background-color: #29ac15;
		text-align: center;
	}

	/* description */
	.text-part-desc {
		height: 100%;
		width: 100%;
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

	.scroll-desc {
		overflow: hidden;
		text-overflow: ellipsis;
		height: 100%;
	}

	/* genre */

	.genre-div {
		display: flex;
		flex-direction: row;
		align-items: center;

		gap: 4px;
		background-color: aqua;
		width: calc(552px);
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
</style>
