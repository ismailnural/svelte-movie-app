import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { API_URL, API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch, params }) => {
  const movieResponse = await fetch(`${API_URL}/movie/${params.id}?api_key=${API_KEY}`);

  if (!movieResponse.ok) {
    throw error(movieResponse.status, movieResponse.statusText);
  }

  const movieDetails = await movieResponse.json();

  const similarMovies = await fetch(`${API_URL}/movie/${params.id}/similar?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(({ results }) => results);
  const movieVideos = await fetch(`${API_URL}/movie/${params.id}/videos?api_key=${API_KEY}`)
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
