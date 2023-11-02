<script lang="ts">
  import type { MovieResponseType } from '$lib';
  import { PageTitle, MovieCard } from '$components';

  export let resource: MovieResponseType[];
</script>

<div class="flex items-center justify-center px-3 sm:px-5 pt-3 pb-10">
  <div class="flex flex-col flex-1 max-w-screen-xl">
    <PageTitle title="Similar Movies" />
    {#if resource && resource.length > 0}
      <div class="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {#each resource as item (item.id)}
          <MovieCard {item} />
        {/each}
      </div>
    {:else}
      <div class="my-6 font-light"><p>No content available</p></div>
    {/if}
  </div>
</div>
