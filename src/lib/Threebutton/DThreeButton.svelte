<script>
	let { name, GreenBtn, RedBtn, WhiteBtn } = $props();
	let status = {
		White: 'whtbtn',
		Green: 'greenbtn',
		Red: 'redbtn'
	};
	let currentsatatus = $state(status.White);
	let class_stat = $derived('threebtn ' + currentsatatus);

	const changeStatus = () => {
		if (currentsatatus == status.White) {
			currentsatatus = status.Green;
			GreenBtn(name);
		} else if (currentsatatus == status.Green) {
			currentsatatus = status.Red;
			RedBtn(name);
		} else if ((currentsatatus = status.Red)) {
			currentsatatus = status.White;
			WhiteBtn(name);
		}
	};
</script>

<button onclick={changeStatus} class={class_stat}>{name}</button>

<style>
	.threebtn {
		height: 40px;
		width: 160px;
		padding: 4px 8px 4px 8px;
		border-radius: 17px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.whtbtn {
		background-color: aliceblue;
		color: black;
	}

	.greenbtn {
		background-color: green;
		color: aliceblue;
	}

	.redbtn {
		background-color: red;
		color: white;
	}
</style>
