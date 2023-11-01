<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  export let currentPage: number;
  export let totalPages: number;

  const prevPage = () => {
    if (currentPage > 1) {
      currentPage -= 1;
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages && currentPage !== 500) {
      currentPage += 1;
    }
  };

  afterUpdate(() => {
    const url = new URL($page.url.href);

    if (url.searchParams.get('page') || currentPage > 1) {
      url.searchParams.set('page', JSON.stringify(currentPage));
      goto(url.href, { replaceState: true });
    }
  });
</script>

<div class="flex items-center space-x-2 fill-gray-500 pt-8 pb-2 m-auto">
  <button
    on:click={prevPage}
    class="h-7 w-7 rounded-full border p-1 enabled:hover:border-red-600 enabled:hover:fill-red-600 enabled:hover:cursor-pointer focus:outline-none disabled:opacity-75"
    disabled={currentPage === 1}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z" />
    </svg>
  </button>
  <button
    on:click={nextPage}
    class="h-7 w-7 rounded-full border p-1 enabled:hover:border-red-600 enabled:hover:fill-red-600 enabled:hover:cursor-pointer focus:outline-none disabled:opacity-75"
    disabled={currentPage >= totalPages}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z" />
    </svg>
  </button>
</div>
