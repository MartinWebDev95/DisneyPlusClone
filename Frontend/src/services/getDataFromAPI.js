const getNewMoviesDisney = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getNewSeriesDisney = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/tv/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getAnimationMovies = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc&with_genres=16&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getDramaMovies = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc&with_genres=18&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getComedySeries = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/tv/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=popularity.desc&with_genres=35&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getDetailMovie = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data;
};

const getDetailTv = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tv/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data;
};

const getSimilarMovies = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}movie/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getCastFromMovie = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.cast;
};

const getSimilarSeries = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tv/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getCastFromSerie = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tv/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.cast;
};

const getSearchMovies = async (keyword) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1&query=${decodeURI(keyword)}`);
  const data = await response.json();
  return { results: data.results, type: 'movie' };
};

const getSearchSeries = async (keyword) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}search/tv?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1&query=${decodeURI(keyword)}`);
  const data = await response.json();
  return { results: data.results, type: 'tv' };
};

export {
  getNewMoviesDisney,
  getNewSeriesDisney,
  getAnimationMovies,
  getDramaMovies,
  getDetailMovie,
  getSimilarMovies,
  getCastFromMovie,
  getDetailTv,
  getSimilarSeries,
  getCastFromSerie,
  getSearchMovies,
  getSearchSeries,
  getComedySeries,
};
