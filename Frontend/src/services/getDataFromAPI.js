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

const getMoviesMarvel = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=420&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getSeriesMarvel = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/tv/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=420&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesAvengersMarvel = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/86311?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMoviesSpidermanMarvel = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/531241?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMoviesThorMarvel = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/131296?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMoviesCaptainAmericaMarvel = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/131295?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMoviesPixar = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=3&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMostPopularMoviesPixar = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=3&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesToyStoryPixar = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/10194?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMoviesCarsPixar = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/87118?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMoviesStarWars = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=1&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getSeriesStarWars = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/tv/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=1&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesLegoStarWars = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/302331?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMoviesNationalGeographic = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=7521&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getSeriesNationalGeographic = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/tv/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=7521&sort_by=release_date.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesWaltDisneyAnimations = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=6125&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesWaltDisney90s = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_companies=3475&with_companies=2&sort_by=vote_average.desc&release_date.gte=1990-01-01&release_date.lte=1999-01-01&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesWaltDisneyActionAdventure = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&with_genres=12&with_companies=2&sort_by=vote_average.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getMoviesIceAge = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}collection/8354?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.parts;
};

const getMostPopularsMoviesDisney = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}discover/movie/?api_key=${import.meta.env.VITE_API_KEY}&with_watch_providers=337&watch_region=ES&sort_by=popularity.desc&language=es-ES&page=1`);
  const data = await response.json();
  return data.results;
};

const getSeasonEpisodes = async (id, seasonNumber) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tv/${id}/season/${seasonNumber}?api_key=${import.meta.env.VITE_API_KEY}&language=es-ES&page=1`);
  const data = await response.json();
  return data.episodes;
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
  getMoviesMarvel,
  getSeriesMarvel,
  getMoviesAvengersMarvel,
  getMoviesCaptainAmericaMarvel,
  getMoviesSpidermanMarvel,
  getMoviesThorMarvel,
  getMoviesPixar,
  getMostPopularMoviesPixar,
  getMoviesToyStoryPixar,
  getMoviesCarsPixar,
  getMoviesStarWars,
  getSeriesStarWars,
  getMoviesLegoStarWars,
  getMoviesNationalGeographic,
  getSeriesNationalGeographic,
  getMoviesWaltDisneyAnimations,
  getMoviesWaltDisney90s,
  getMoviesWaltDisneyActionAdventure,
  getMoviesIceAge,
  getMostPopularsMoviesDisney,
  getSeasonEpisodes,
};
