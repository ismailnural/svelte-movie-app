import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { APIUrls } from '$lib';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const response = await fetch(APIUrls.client.movie(params.id));

  if (response.ok) {
    const movie = await response.json();

    return {
      movie,
      meta: {
        title: movie.movieDetails.title,
        description: movie.movieDetails.overview,
      },
    };
  }

  const errorJSON = await response.json();
  throw error(response.status, errorJSON.message);
};
