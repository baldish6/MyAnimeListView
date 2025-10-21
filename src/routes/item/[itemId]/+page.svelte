<script lang="ts">
	import type { PageProps } from './$types';

	// naruto : 20
	// characters casting
	// episodes lists
	let need = [
		//'trailer',

		'studio',

		'opening',
		'endings',
		'where streaming',
		'related entry'
	];
	let { data }: PageProps = $props();

	const item = data.item.data;
	//console.log(item);
</script>

<div class="single-div">
	<div id="left-div">
		<img
			src={item['images']['webp']['large_image_url']}
			alt={item['titles'][0]['title']}
			id="img"
		/>
		<div id="btm-img-info">
			<div id="btm-img-bx">
				<div id="num-ep-div">
					<div id="ep-p">episodes</div>

					<div id="num-ep">
						{item['episodes']}
					</div>
				</div>
				<div id="score-div">
					<div id="score-p">score</div>
					<div id="num-score">
						{item['score']}
					</div>
				</div>
			</div>

			<p>rating : &nbsp; {item['rating']}</p>
			<p>status : &nbsp; {item['status']}</p>
			<p>aired from {item['aired']['string']}</p>
		</div>
	</div>

	<div id="right-div">
		<div class="top-div">
			<p id="name-p">{item['titles'][0]['title']}</p>
			<div id="desc-div">
				<p id="desc-p">Description</p>
				<p>{item['synopsis']}</p>
			</div>

			<div class="h-[25px]"></div>
			<div id="back-div">
				<p id="back-p">background info</p>
				<p>{item['background']}</p>
			</div>
		</div>

		<hr />
		<div class="genre-div">
			genres : &nbsp;
			{#each item['genres'] as genre, i}
				<p class="genre-p">{genre['name']}</p>
			{/each}
		</div>

		<div class="theme-div">
			themes : &nbsp;
			{#each item['themes'] as theme, i}
				<p class="theme-p">{theme['name']}</p>
			{/each}
		</div>
		<hr />
		<div class="prod-div">
			producers: &nbsp;
			{#each item['producers'] as prod, i}
				{#if i == item['producers'].length - 1}
					<p>{prod['name']}</p>
				{:else}<p>{prod['name']}, &nbsp;</p>{/if}
			{/each}
		</div>

		<div class="lic-div">
			licensors: &nbsp;
			{#each item['licensors'] as lic, i}
				{#if i == item['licensors'].length - 1}
					<p>{lic['name']}</p>
				{:else}<p>{lic['name']}, &nbsp;</p>{/if}
			{/each}
		</div>

		<div class="studio-div">
			studios: &nbsp;
			{#each item['studios'] as stud, i}
				{#if i == item['studios'].length - 1}
					<p>{stud['name']}</p>
				{:else}<p>{stud['name']}, &nbsp;</p>{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.single-div {
		display: flex;
		flex-direction: row;
	}

	#left-div {
		width: 32vw;
		height: fit-content;
		display: flex;
		flex-direction: column;
		margin: 12px;
	}

	#right-div {
		display: flex;
		flex-direction: column;
		max-width: 54vw;
		gap: 12px;
		padding: 12px;
	}

	#img {
		--sclv: 1.4;
		width: calc(317px * var(--sclv));
		height: calc(436px * var(--sclv));
		padding: 8px 12px 8px 12px;
		border-radius: 23px;
	}

	#btm-img-info {
		width: 100%;
		padding-left: 12px;
	}

	#btm-img-bx {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 12px;
		--box-sz: 78px;
	}

	#num-ep-div {
		width: var(--box-sz);
		height: fit-content;
	}

	#score-div {
		width: fit-content;
		height: fit-content;
	}

	#score-p {
		background-color: cadetblue;
		width: var(--box-sz);
		border-radius: 8px 8px 0px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#num-score {
		background-color: gray;
		width: var(--box-sz);
		height: fit-content;
		border-radius: 0px 0px 8px 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28px;
	}

	#ep-p {
		height: fit-content;
		background-color: cornflowerblue;
		border-radius: 8px 8px 0px 0px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#num-ep {
		background-color: gray;
		height: fit-content;
		border-radius: 0px 0px 8px 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28px;
	}

	#name-p {
		font-size: 44px;
	}

	#desc-p {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: grey;
		border-radius: 8px 8px 0px 0px;
	}

	#back-p {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: grey;
		border-radius: 8px 8px 0px 0px;
	}

	#same-info {
		display: flex;
		flex-direction: row;
		gap: 120px;
	}

	.genre-div {
		display: flex;
		flex-direction: row;
		gap: 12px;
		align-items: center;
	}

	.genre-p {
		background-color: rgb(124, 119, 117);
		border-radius: 8px;
		padding: 4px;
	}

	.theme-p {
		background-color: rgb(124, 119, 117);
		border-radius: 8px;
		padding: 4px;
	}

	.theme-div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	#num-box {
		display: flex;
		flex-direction: row;
	}

	.prod-div {
		display: flex;
		flex-direction: row;
	}

	.lic-div {
		display: flex;
		flex-direction: row;
	}

	.studio-div {
		display: flex;
		flex-direction: row;
	}
</style>
