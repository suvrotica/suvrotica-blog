<script lang="ts">
	import '@picocss/pico';
	import Header from '../component/Header.svelte';
	import Footer from '../component/Footer.svelte';
</script>

<main class="container">
	<Header />
	<slot />
	<Footer />
</main>
