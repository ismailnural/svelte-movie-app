import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends, url }) => {
  const page = url.searchParams.get('page') ?? '1';
  const query = url.searchParams.get('query') ?? '';

  const response = await fetch(`/api/movies?page=${page}&query=${query}`);
  depends('app:moviesServerLoad');

  if (response.ok) {
    return {
      movies: response.json(),
      page: page ? parseInt(page) : 1,
      query,
    };
  }

  const errorJSON = await response.json();
  throw error(response.status, errorJSON.message);
};
