<script lang="ts">
	import TW_CLASS from "../constants/tailwind_class";
	import progress from "../modules/progress";

	let percent: number = 0

	setInterval(() => {
		percent = progress().percent
	}, 1000)
</script>

<svelte:head>
	<title>Year Progression</title>
	<meta name="description" content="just a year progressing" />
</svelte:head>

<section>
	<div class="w-[80%] h-screen mx-auto flex flex-col items-center text-center justify-center">
		<h1 class={TW_CLASS.heading.xxxl}>
			This Year Progression
		</h1>

		<!-- Progress Box -->
		<div class="w-[80%] md:w-[90%] flex border border-whitesmoke rounded ">
			<div class="m-2 py-6 bg-living-coral duration-1000 rounded " style={`width: ${Math.floor(percent)}%;`}></div>
		</div>

		{#if percent === 0}
			<h1 class={TW_CLASS.heading.xl}>
				Loading Data..
			</h1>
		{:else}
			<p class={TW_CLASS.heading.xxl}>
				{percent}%
			</p>
			<p>
				{progress().date}
			</p>
		{/if}
	</div>
</section>

<style>

</style>
