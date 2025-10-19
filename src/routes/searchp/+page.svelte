<script lang="ts">
	import { genresMap, genresList } from './genres';

	let search = $state('');

	//let end_search: string = 'order_by=score&sort=desc&page=1';
	let start_search: string = 'https://api.jikan.moe/v4/anime?';
	let middle_search = '';

	let goingTostr = $state(start_search + middle_search);

	//all query symbols
	let nameS: string;
	const format_type: string[] = [
		'tv',
		'movie',
		'ova',
		'special',
		'ona',
		'music',
		'cm',
		'pv',
		'tv_special'
	];
	let scoreS: number;
	let min_scoreS: number;
	let max_scoreS: number;
	let statusS: string[] = ['airing', 'complete', 'upcoming'];
	let ratingS: string[] = ['g', 'pg', 'pg13', 'r17', 'r', 'rx'];
	let sfwS: boolean = false;
	let genres_includeS: string[] = $state([]);
	let genres_excludeS: string[] = $state([]);
	let order_byS: string[] = [
		'mal_id',
		'title',
		'start_date',
		'end_date',
		'episodes',
		'score',
		'scored_by',
		'rank',
		'popularity',
		'members',
		'favorites'
	];
	let sortdescS: boolean = true;
	let start_dateS: string = '';
	let end_dateS: string = '';

	//let url_strng = $derived(start_search + middle_search + end_search);

	/*TODO: 
	[x] genres
	[ ] year
	[ ]  season
	[ ]   format type
	[ ]	name
	[ ]	status
	[ ]	min-max score
	[ ]	pg13 rating
	[ ]	sfw
	[ ]	order by
	[x]	producers
	[ ]	start - end date
	*/
</script>

<form>
	<details class="p-6" open>
		<summary>Search options : </summary>
		<div class="big-boxz-visible">
			<p>{goingTostr}</p>
		</div>

		<div class=" alllbl pt-5">
			<input type="radio" class="shwb" id="incl" name="ign" value="incl" />
			<label id="incllb" for="incl">Include</label><br />

			<input type="radio" id="excl" name="ign" value="excl" />
			<label id="excllb" for="excl">Exclude</label><br />

			<input type="radio" id="none" name="ign" value="none" />
			<label id="nonelb" for="ign">None</label>
		</div>
	</details>
</form>

<style>
	.alllbl {
		position: relative;
	}
	/* Boxes */
	#none {
		display: none;
	}

	#excl {
		display: none;
	}

	#incl {
		width: 140px;
		height: 40px;
		border-radius: 9px;
		position: absolute;
		top: 0px;
		left: 0px;
	}

	/* Label */

	#incllb {
		display: none;
	}

	#excllb {
		display: none;
	}

	#nonelb {
	}

	/* Checked */

	#incl:checked {
		display: none;
	}

	#excl:checked {
		display: none;
	}

	#none:checked {
		display: none;
	}

	/* Checked Next One */

	#incl:checked ~ #incllb {
		color: rgb(0, 201, 3);
		display: inline-block;
		transform: translateX(200px);
	}

	#incl:checked ~ #nonelb {
		display: none;
	}

	#excl:checked ~ #nonelb {
		display: none;
	}

	#excl:checked ~ #excllb {
		color: rgb(255, 0, 0);
		display: inline-block;
		transform: translateX(200px);
	}

	#none:checked ~ #nonelb {
		color: rgb(17, 0, 255);
		display: inline-block;
		transform: translateX(200px);
	}

	#incl:checked ~ #excl {
		display: inline-block;
		position: absolute;
		color: rgb(0, 201, 3);
		top: 0px;
		left: 0px;

		width: 140px;
		height: 40px;
		border-radius: 9px;
	}

	#excl:checked ~ #none {
		display: inline-block;
		position: absolute;
		top: 0px;
		left: 0px;

		z-index: 5;
		width: 140px;
		height: 40px;
		border-radius: 9px;
	}
</style>
