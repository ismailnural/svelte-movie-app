<script lang="ts">
  import type { MovieVideosResultsType } from '$lib/types';
  import { PageTitle } from '$components';

  export let resource: MovieVideosResultsType[];
</script>

<div class="px-3 sm:px-5 my-9 w-full">
  <div class="flex flex-col flex-1 max-w-screen-xl m-auto">
    <PageTitle title="Videos" />
    {#if resource && resource.length > 0}
      <div class="flex rounded-xl max-w-fit overflow-x-scroll mt-4 mb-6">
        {#each resource as video (video.id)}
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${video?.key}`}
              title={video?.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        {/each}
      </div>
    {:else}
      <div class="my-6 font-light"><p>No content available</p></div>
    {/if}
  </div>
</div>
