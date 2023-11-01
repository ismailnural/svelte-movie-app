<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  export let q: string;

  afterUpdate(() => {
    const url = new URL($page.url.href);

    if (q === undefined || q === '') {
      url.searchParams.delete('query');
    }

    if (url.searchParams.get('query') || q !== undefined) {
      url.searchParams.set('query', q);
      url.searchParams.delete('page');
      goto(url.href, { replaceState: true, keepFocus: true });
    }
  });
</script>

<div class="px-3 sm:px-5 py-9 bg-white">
  <div class="flex flex-col m-auto max-w-screen-xl justify-center">
    <div class="relative items-center content-center flex">
      <span class="text-gray-400 absolute left-4 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search ..."
        name="query"
        bind:value={q}
        class="text-sm ring-1 bg-transparent ring-gray-200 focus:ring-red-300 pl-12 pr-8 py-3 text-gray-600 rounded-full w-full outline-none focus:ring-1"
      />
    </div>
  </div>
</div>
