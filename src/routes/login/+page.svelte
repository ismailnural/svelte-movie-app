<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import type { Snapshot } from './$types';

  import { InputField } from '$components';

  let username = '';
  let password = '';

  export const snapshot: Snapshot<{ username: string; password: string }> = {
    capture: () => {
      return {
        username,
        password,
      };
    },
    restore: (value) => {
      username = value.username;
      password = value.password;
    },
  };

  const login = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    const userData = await response.json();
    if (response.ok) {
      invalidateAll();
    } else {
      alert(userData.message);
    }
  };
</script>

<div class="w-full max-w-xl m-auto p-3 sm:p-6">
  <div class="text-gray-800 text-center mb-6">
    <div class="font-bold text-3xl">
      sMovie<span class="text-red-600">.</span>
    </div>
  </div>
  <div class="w-full bg-white rounded-lg shadow p-4 sm:p-16 pt-8 sm:pt-12">
    <h2 class="text-center text-2xl font-semibold tracking-tight text-gray-900 mb-8 sm:mb-12">
      Sign in to your account
    </h2>
    <form on:submit|preventDefault={login}>
      <div class="mb-6">
        <InputField name="username" label="Username" hint="Demo" bind:bindValue={username} />
      </div>

      <div class="mb-6">
        <InputField name="password" label="Password" hint="Demo" type="password" bind:bindValue={password} />
      </div>

      <button
        type="submit"
        class="inline-block mt-6 px-8 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full disabled:pointer-events-none disabled:cursor-default disabled:opacity-75"
        disabled={username === '' || password === ''}
      >
        Login
      </button>
    </form>
  </div>
</div>
