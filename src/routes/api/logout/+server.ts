import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ cookies }) => {
  cookies.delete('token', { path: '/' });
  return json({
    username: undefined,
    isLoggedIn: false,
  });
};
