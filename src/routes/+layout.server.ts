import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
  const token = cookies.get('token');
  return { user: token ? JSON.parse(token) : { username: undefined, isLoggedIn: false } };
};
