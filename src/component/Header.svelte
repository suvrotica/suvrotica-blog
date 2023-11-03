<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav>
	<!-- Title -->
	<ul>
		<li><a href="/"><strong>{config.title}</strong></a></li>
	</ul>

	<!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
		<li>
			<button>Toggle</button>
		</li>
	</ul>
</nav>
