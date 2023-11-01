import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { BASE_URL, API_KEY } from '$env/static/private'

export const GET: RequestHandler = async ({ fetch, url }) => {
  const page = url.searchParams.get('page') ?? '1';
  const query = url.searchParams.get('query') ?? '';

  const response = await fetch(`${BASE_URL}/${query ? 'search/movie' : 'discover/movie'}?api_key=${API_KEY}&page=${page}&query=${query}`);

  if (response.ok) {
    const resJSON = await response.json();
    return json(resJSON, {
      status: 200
    });
  }

  throw error(response.status, response.statusText);
};