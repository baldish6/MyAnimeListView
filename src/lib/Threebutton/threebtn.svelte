<div class=" alllbl h-fit w-fit">
	<input type="radio" id="inclrad" name="ign" value="incl " />
	<input type="radio" id="excllrad" name="ign" value="excl " />
	<input type="radio" id="nonelrad" name="ign" value="none " />

	<label id="inclradlb" for="inclrad">None</label><br />
	<label id="exclradlb" for="excllrad">Include</label><br />
	<label id="noneradlb" for="nonelrad">Exclude</label><br />
</div>

<style>
	.alllbl {
		position: relative;
	}
	/* Boxes */
	#inclrad {
		display: none;
	}

	#excllrad {
		display: none;
	}

	#nonelrad {
		display: none;
	}

	/* Label */
	/* Start */
	#exclradlb {
		display: none;
	}
	#noneradlb {
		display: none;
	}

	#inclradlb {
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: white;
		color: black;
		padding: 4px 8px 4px 8px;
		width: 140px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 11px;
	}

	/* Checked remove */

	#inclrad:checked ~ #inclradlb {
		display: none;
	}

	#excllrad:checked ~ #inclradlb {
		display: none;
	}

	/* Checked */

	/* Include checked */
	#inclrad:checked ~ #exclradlb {
		display: inline-block;
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: rgb(0, 201, 3);
		color: white;
		padding: 4px 8px 4px 8px;
		width: 140px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 11px;
	}

	/* Exclude checked */

	#excllrad:checked ~ #noneradlb {
		display: inline-block;
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: rgb(255, 0, 0);
		color: white;
		padding: 4px 8px 4px 8px;
		width: 140px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 11px;
	}
</style>
