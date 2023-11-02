import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { APIUrls } from '$lib';

export const GET: RequestHandler = async ({ fetch, params }) => {
  const movieResponse = await fetch(APIUrls.server.movie(params.id));

  if (!movieResponse.ok) {
    throw error(movieResponse.status, movieResponse.statusText);
  }

  const movieDetails = await movieResponse.json();

  const similarMovies = await fetch(APIUrls.server.movieSimilar(params.id))
    .then((res) => res.json())
    .then(({ results }) => results);
  const movieVideos = await fetch(APIUrls.server.movieVideos(params.id))
    .then((res) => res.json())
    .then(({ results }) => results);

  return json(
    {
      movieDetails,
      similarMovies,
      movieVideos,
    },
    {
      status: 200,
    },
  );
};
