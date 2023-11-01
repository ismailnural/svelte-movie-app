import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const {
    user: { isLoggedIn },
  } = await parent();

  if (isLoggedIn) throw redirect(307, '/');

  return {
    meta: {
      title: 'Login',
      description: 'Login page for sMovie Popular Movies',
    },
  };
};
