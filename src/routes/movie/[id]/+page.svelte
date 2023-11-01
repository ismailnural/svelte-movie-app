<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: movie = data.movie;
</script>

<h1>{movie?.title} - {movie?.id}</h1>
<p>{movie?.description}</p>
