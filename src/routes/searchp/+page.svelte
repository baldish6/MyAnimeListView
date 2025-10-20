<script lang="ts">
	import Radiobtn from '$lib/ButtonRadioBox/radiobtn.svelte';
	import DThreeButton from '$lib/Threebutton/DThreeButton.svelte';
	import RadioBtn from '$lib/Threebutton/RadioBtn.svelte';
	import FormatBtn from '$lib/Threebutton/RadioBtn.svelte';
	import Threebtn from '$lib/Threebutton/threebtn.svelte';
	import { genresMap, genresList } from './genres';

	//all query symbols
	let nameS: string;
	let genres_includeS: number[] = $state([]);
	let genres_excludeS: number[] = $state([]);
	const Format_types: string[] = [
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
	let format_typesS = $state('');
	let scoreS: number;
	let min_scoreS: number;
	let max_scoreS: number;
	let statusS: string[] = ['airing', 'complete', 'upcoming'];
	let statussnglS = $state('');

	let ratingS: string[] = ['g', 'pg', 'pg13', 'r17', 'r', 'rx'];
	let ratingssnglS = $state('');

	let sfwS: boolean = $state(false);

	const order_byS: string[] = [
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

	let orderbyVS = $state('');

	let sortS = ['desc', 'asc'];
	let sortdescVS = $state('desc');

	let start_dateS: string = $state('');
	let end_dateS: string = $state('');

	let search = $state('');

	const tto = () => {
		let middle_search = '';
		if (genres_includeS.length != 0) {
			middle_search += '&genres=' + genres_includeS.toString();
		}
		if (genres_excludeS.length != 0) {
			middle_search += '&genres_exclude=' + genres_excludeS.toString();
		}
		if (format_typesS != '') {
			middle_search += '&type=' + format_typesS;
		}
		if (statussnglS != '') {
			middle_search += '&status=' + statussnglS;
		}
		if (ratingssnglS != '') {
			middle_search += '&rating=' + ratingssnglS;
		}
		if (sfwS) {
			middle_search += '&sfw';
		}
		if (orderbyVS != '') {
			middle_search += '&order_by=' + orderbyVS;
		}
		if (sortdescVS != '') {
			middle_search += '&sort=' + sortdescVS;
		}
		if (start_dateS != '') {
			middle_search += '&start_date=' + start_dateS;
		}
		if (end_dateS != '') {
			middle_search += '&end_date=' + end_dateS;
		}

		return middle_search;
	};

	//let end_search: string = 'order_by=score&sort=desc&page=1';
	let start_search: string = 'https://api.jikan.moe/v4/anime?';
	let middle_search = $derived.by(tto);

	let goingTostr = $derived(start_search + middle_search);

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

	function GreenGenre(name: string) {
		const gnm: number = genresMap.get(name);
		genres_includeS.push(gnm);
	}

	function RedGenre(name: string) {
		const gnm: number = genresMap.get(name);
		genres_includeS.splice(genres_includeS.indexOf(gnm), 1);
		genres_excludeS.push(gnm);
	}

	function WhiteGenre(name: string) {
		const gnm: number = genresMap.get(name);
		genres_excludeS.splice(genres_excludeS.indexOf(gnm), 1);
	}

	function FormatChange(name: string) {
		format_typesS = name;
	}

	function StatusChange(name: string) {
		statussnglS = name;
	}

	function RatingChange(name: string) {
		ratingssnglS = name;
	}

	function OrderChange(name: string) {
		orderbyVS = name;
	}

	function SortChange(name: string) {
		sortdescVS = name;
	}

	const sfwSChange = () => {
		sfwS = !sfwS;
	};

	const startDate = (e) => {
		e.preventDefault();
		start_dateS = e.target.value;
		//console.log(typeof e.target.value);
	};

	const endDate = (e) => {
		e.preventDefault();
		end_dateS = e.target.value;
		//console.log(typeof e.target.value);
	};
</script>

<div>
	<details class="p-6" open>
		<summary>Search options : </summary>
		<div class="big-boxz-visible">
			<p>{goingTostr}</p>
		</div>
		<div class="genrediv">
			{#each genresList as item}
				<DThreeButton name={item} GreenBtn={GreenGenre} RedBtn={RedGenre} WhiteBtn={WhiteGenre} />
			{/each}
		</div>
		<RadioBtn BtnChange={FormatChange} Btn_types={Format_types} />
		<div class="flex flex-row items-center gap-7">
			<input class="score-num" type="number" step="0.01" min="0.00" max="10.00" id="score" />
			<label for="score">score</label><br />
			<input class="score-num" type="number" step="0.01" min="0.00" max="10.00" id="minscore" />
			<label for="minscore">minimum score</label><br />
			<input class="score-num" type="number" step="0.01" min="0.00" max="10.00" id="maxscore" />
			<label for="maxscore">max score</label><br />
		</div>
		<RadioBtn BtnChange={StatusChange} Btn_types={statusS} />
		<RadioBtn BtnChange={RatingChange} Btn_types={ratingS} />
		<input onclick={sfwSChange} type="checkbox" id="sfw" name="vehicle1" value="sfw" />
		<label for="sfw"> Filter out Adult entries </label><br />
		<RadioBtn BtnChange={OrderChange} Btn_types={order_byS} />
		<RadioBtn BtnChange={SortChange} Btn_types={sortS} />
		<label for="start_date">Start date:</label>
		<input
			max={end_dateS}
			onchange={startDate}
			class="dte"
			type="date"
			id="start_date"
			name="start_date"
		/>

		<label for="end_date">End date:</label>
		<input
			min={start_dateS}
			onchange={endDate}
			class="dte"
			type="date"
			id="end_date"
			name="end_date"
		/>
	</details>
</div>

<style>
	.genrediv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 20px;
		row-gap: 5px;
		padding: 4px 8px 4px 8px;
	}

	.score-num {
		color: #000;
		border-radius: 11px;
	}

	.dte {
		color: #000;
	}
</style>
