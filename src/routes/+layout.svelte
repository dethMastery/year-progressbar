<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>
			&copy; 2023 <a href="https://suphakit.net" target="_blank">Suphakit P.</a>
		</p>
	</footer>
</div>

<style>
	.app {
		width: 100%;
		height: 100dvh;
	}
</style>