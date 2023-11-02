import { PUBLIC_API_URL as API_URL, PUBLIC_API_KEY as API_KEY } from '$env/static/public';

export const APIUrls = {
  client: {
    login: '/api/login',
    logout: '/api/logout',
    movie: (id: string) => `/api/movie/${id}`,
    movies: (page: string, query: string) => `/api/movies?page=${page}&query=${query}`,
  },
  server: {
    movie: (id: string) => `${API_URL}/movie/${id}?api_key=${API_KEY}`,
    movieSimilar: (id: string) => `${API_URL}/movie/${id}/similar?api_key=${API_KEY}`,
    movieVideos: (id: string) => `${API_URL}/movie/${id}/videos?api_key=${API_KEY}`,
    searchMovie: (page: string, query: string) =>
      `${API_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`,
    discoverMovie: (page: string, query: string) =>
      `${API_URL}/discover/movie?api_key=${API_KEY}&page=${page}&query=${query}`,
  },
} as const;

export default APIUrls;
