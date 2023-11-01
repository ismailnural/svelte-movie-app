<script lang="ts">
  import type { PageData } from './$types';
  import { MovieOverview, MovieVideos, SimilarMovies } from '$components';

  export let data: PageData;

  $: movieDetails = data.movie.movieDetails;
  $: movieVideos = data.movie.movieVideos;
  $: similarMovies = data.movie.similarMovies;
</script>

<MovieOverview resource={movieDetails} />
<MovieVideos resource={movieVideos} />
<SimilarMovies resource={similarMovies} />
