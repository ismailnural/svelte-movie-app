<script lang="ts">
  import type { MovieResponseType } from '$lib';
  import { BackdropPoster, Poster } from '$components';
  import { getYear, getDate, convertMinsToHrsMins } from '$utils';

  export let resource: MovieResponseType;
</script>

<BackdropPoster posterPath={resource?.poster_path}>
  <div class="flex sm:flex-col flex-1 m-auto w-full max-w-screen-xl justify-center my-8 sm:my-16 px-3 sm:px-5 xl:px-0">
    <div class="grid grid-rows-1 sm:grid-cols-[300px,auto] gap-8 text-white">
      <div class="w-[300px] m-auto rounded overflow-hidden shadow-lg shadow-black">
        <Poster posterPath={resource?.poster_path} size="medium" />
      </div>
      <div class="flex flex-col">
        <h1 class="font-semibold text-4xl">
          {resource?.title}
          {#if resource?.release_date}
            <span class="font-thin">({getYear(resource?.release_date)})</span>
          {/if}
        </h1>
        <div class="flex font-light mt-1">
          {#if resource?.release_date}
            <span>{getDate(resource?.release_date)}</span>
          {/if}
          <span class="before:content-['•'] before:p-2">
            {#if resource?.genres}
              {resource?.genres?.map((genre) => genre.name).join(', ')}
            {/if}
          </span>
          {#if resource?.runtime}
            <span class="before:content-['•'] before:p-2"> {convertMinsToHrsMins(resource?.runtime)}</span>{/if}
        </div>
        <div class="mt-8">
          {#if resource?.tagline}
            <h3 class="font-thin italic text-lg text-gray-400">{resource?.tagline}</h3>
          {/if}

          {#if resource?.overview}
            <h3 class="text-xl mt-8">Overview</h3>
            <div class="font-light mt-3">
              <p>{resource?.overview}</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</BackdropPoster>
