import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  return {
    movie: {
      id: params.id,
      title: 'Test Title',
      description: 'Test Description',
    },
    title: 'Test Title',
    description: 'Test Description',
  };
};
