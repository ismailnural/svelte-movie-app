import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends, url }) => {
  const page = url.searchParams.get('page') ?? '1';
  const query = url.searchParams.get('query') ?? '';

  const response = await fetch(`/api/movies?page=${page}&query=${query}`);
  depends('app:moviesServerLoad');

  if (response.ok) {
    const currentPage = page ? parseInt(page) : 1;

    const getTitle = () => {
      const pageTitle = currentPage > 1 ? ` / ${currentPage}` : '';
      if (query) {
        return `Search Results for "${query}"${pageTitle}`;
      }
      return `Popular Movies${pageTitle}`;
    };

    return {
      movies: response.json(),
      page: currentPage,
      query,
      meta: {
        title: getTitle(),
        description: 'sMovie Popular Movies',
      },
    };
  }

  const errorJSON = await response.json();
  throw error(response.status, errorJSON.message);
};
