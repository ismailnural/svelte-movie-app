<script lang="ts">
  import type { PageData } from './$types';
  import { Pagination, PageTitle, MovieCard } from '$components';

  export let data: PageData;

  $: movies = data.movies;
  $: query = data.query;

  $: pageTitle = () => {
    const total = movies?.total_results;

    if (query) {
      return `Search for: ${query} ${total > 0 ? `(${total})` : ''}`;
    }
    return `Popular Movies ${total > 0 ? `(${total})` : ''}`;
  };
</script>

<div class="flex items-center justify-center px-3 sm:px-5 pt-3 pb-10">
  <div class="flex flex-col max-w-screen-xl">
    <PageTitle title={pageTitle()} />
    <div class="mt-5 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4">
      {#if movies?.results && movies?.results.length > 0}
        {#each movies?.results as movie}
          <MovieCard item={movie} />
        {/each}
      {/if}
    </div>
    <Pagination currentPage={movies?.page} totalPages={movies?.total_pages} />
  </div>
</div>
