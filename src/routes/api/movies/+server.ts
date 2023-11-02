import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { APIUrls } from '$lib';

export const GET: RequestHandler = async ({ fetch, url }) => {
  const page = url.searchParams.get('page') ?? '1';
  const query = url.searchParams.get('query') ?? '';

  const response = await fetch(
    query ? APIUrls.server.searchMovie(page, query) : APIUrls.server.discoverMovie(page, query),
  );

  if (response.ok) {
    const resJSON = await response.json();
    return json(resJSON, {
      status: 200,
    });
  }

  throw error(response.status, response.statusText);
};
