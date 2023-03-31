import { getItemsForGenre, getNewItemsDisney } from '../services/getDataFromAPI';

const homeData = {
  home: {
    dataPage: [
      {
        call: getNewItemsDisney('movie'),
        state: 'newMovies',
        title: 'Nuevas películas en Disney +',
      },
      {
        call: getNewItemsDisney('tv'),
        state: 'newSeries',
        title: 'Nuevas series en Disney +',
      },
      {
        call: getItemsForGenre('movie', '16'),
        state: 'animationItems',
        title: 'Películas de Animación',
      },
      {
        call: getItemsForGenre('movie', '18'),
        state: 'dramaItems',
        title: 'Películas Dramáticas',
      },
      {
        call: getItemsForGenre('tv', '35'),
        state: 'comedySeries',
        title: 'Series de Comedia',
      },
    ],
  },
};

export default homeData;
