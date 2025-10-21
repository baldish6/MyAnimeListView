<script lang="ts">
	let { item } = $props();
</script>

<a class="item-link" href={'/item/' + item['mal_id']}>
	<div class="single-list-item-card card-hover">
		<img
			class="item-img-card"
			src={item['images']['webp']['large_image_url']}
			alt={item['title']}
		/>

		<div class="text-part-card">
			<p class="item-name-card">{item['title']}</p>
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

	/* Image */
	.item-img-card {
		border-radius: 10px 10px 0px 0px;
		width: 278px;
		height: 363px;
	}

	/* name */

	.text-part-card {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 4px;
		padding-right: 4px;
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
</style>
