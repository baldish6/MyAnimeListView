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

			<div class="genre-div">
				{#each item['genres'] as genre}
					<p class="single-genre-p">{genre['name']}</p>
				{/each}
			</div>
		</div>
		<div class="theme-div">
			{#each item['themes'] as theme}
				<p>{theme.name}</p>
			{/each}
		</div>
		<div class="score-div">
			<p>{item['score']}</p>
		</div>
		<div class="airing-div">
			<p>{item['aired']['string']}</p>
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

	/*
    rating, 
     */

	/* Desc */

	/* all */
	.single-list-item-desc {
		display: flex;
		flex-direction: row;
		border-radius: 8px;
		width: 878px;
		height: 175px;
		align-items: center;
		justify-content: center;
		gap: 6px;
		flex-shrink: 0;
		background: rgb(196, 11, 11);
	}

	/* img */
	.item-img-desc {
		height: 100%;
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
		align-items: left;
		padding-left: 4px;
		padding-right: 4px;
		background: rgb(196, 107, 11);
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

	/* theme */
	.theme-div {
		width: 120px;
		display: flex;
		flex-direction: column;
		background-color: blueviolet;
	}

	/* score */
	.score-div {
		background-color: cornflowerblue;
	}

	/* airing */
	.airing-div {
		background-color: hotpink;
	}
</style>
