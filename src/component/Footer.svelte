<script lang="ts">
	import * as config from '$lib/config';
</script>

<!-- Footer -->
<footer>
	<p>
		{config.description} &copy; {config.title}
		{new Date().getFullYear()}
		{new Date().toLocaleString('default', { month: 'long' })}
	</p>
</footer>
