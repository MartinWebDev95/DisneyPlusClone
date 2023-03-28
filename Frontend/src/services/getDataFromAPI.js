const getNewItemsDisney = async (type) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/${type}?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getItemsForGenre = async (type, genre) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/${type}?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=release_date.desc&with_genres=${genre}&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getItemDetail = async (id, type) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data;
};

const getSimilarItems = async (id, type) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${type}/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getCast = async (id, type) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.cast;
};

const getSearchMovies = async (keyword) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1&query=${decodeURI(keyword)}`);
  const data = await response.json();
  return data.results;
};

const getSearchSeries = async (keyword) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}search/tv?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1&query=${decodeURI(keyword)}`);
  const data = await response.json();
  return data.results;
};

const getItemsFromBrand = async (type, brand) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/${type}?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=${brand}&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getItemsFromStar = async (type) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/${type}?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&without_companies=3,6125,7521, 1,420,3475&sort_by=popularity.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getItemsFromStarNew = async (type) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/${type}?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&without_companies=3,6125,7521, 1,420,3475&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getItemsFromStarGenre = async (type, genre) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/${type}?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&without_companies=3,6125,7521, 1,420,3475&with_genres=${genre}&sort_by=popularity.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMostPopularMoviesPixar = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=3&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesWaltDisneyAnimations = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=6125&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesWaltDisney90s = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=3475&with_companies=2&sort_by=vote_average.desc&release_date.gte=1990-01-01&release_date.lte=1999-01-01&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesWaltDisneyActionAdventure = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_genres=12&with_companies=2&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getItemsCollection = async (collection) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/${collection}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMostPopularsMoviesDisney = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=popularity.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getSeasonEpisodes = async (id, seasonNumber) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tv/${id}/season/${seasonNumber}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.episodes;
};

const getItemsFromDisney = async (type, page = 1, genre = '') => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/${type}?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&with_genres=${genre}&watch_region=ES&sort_by=release_date.desc&language=es-ES&page=${page}`);
  const data = await response.json();
  return data.results;
};

export {
  getNewItemsDisney,
  getItemDetail,
  getItemsForGenre,
  getItemsFromBrand,
  getItemsFromDisney,
  getItemsCollection,
  getCast,
  getSimilarItems,
  getSearchMovies,
  getSearchSeries,
  getMostPopularMoviesPixar,
  getMoviesWaltDisneyAnimations,
  getMoviesWaltDisney90s,
  getMoviesWaltDisneyActionAdventure,
  getMostPopularsMoviesDisney,
  getSeasonEpisodes,
  getItemsFromStar,
  getItemsFromStarGenre,
  getItemsFromStarNew,
};
