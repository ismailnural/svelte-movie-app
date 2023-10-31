<script lang="ts">
  export let name: string;
  export let label: string;
  export let type: string = 'text';
  export let hint: string | undefined = undefined;
  export let bindValue: string;

  const handleInput = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    bindValue = inputElement.value;
  };
</script>

<label for={name} class="inline-block text-md font-semibold text-gray-700 mb-2">{label}</label>
<input
  {type}
  {name}
  id={name}
  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
  placeholder={label}
  value={bindValue}
  on:input={handleInput}
/>
{#if hint}
  <span class="block text-xs text-gray-400 mt-1">{hint}</span>
{/if}
