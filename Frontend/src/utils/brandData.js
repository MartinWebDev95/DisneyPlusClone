import {
  getItemsCollection,
  getItemsFromBrand,
  getItemsFromStar,
  getItemsFromStarGenre,
  getItemsFromStarNew,
  getMoviesWaltDisney90s,
  getMoviesWaltDisneyActionAdventure,
  getMoviesWaltDisneyAnimations,
} from '../services/getDataFromAPI';

const brandData = {
  marvel: {
    posterBrand: '/assets/img/categories/bg-marvel.jpg',
    videoBrand: '/assets/videos/bg-marvel.mp4',
    dataBrand: [
      {
        call: getItemsFromBrand('movie', '420'),
        state: 'moviesMarvel',
        title: 'Películas Marvel',
      },
      {
        call: getItemsFromBrand('tv', '420'),
        state: 'seriesMarvel',
        title: 'Series Marvel',
      },
      {
        call: getItemsCollection('86311'),
        state: 'moviesAvengers',
        title: 'Los Vengadores',
      },
      {
        call: getItemsCollection('531241'),
        state: 'moviesSpiderman',
        title: 'Spiderman',
      },
      {
        call: getItemsCollection('131295'),
        state: 'moviesCaptainAmerica',
        title: 'El Capitán América',
      },
      {
        call: getItemsCollection('131296'),
        state: 'moviesThor',
        title: 'Thor',
      },
    ],
  },

  disney: {
    posterBrand: '/assets/img/categories/bg-disney.jpg',
    videoBrand: '/assets/videos/bg-disney.mp4',
    dataBrand: [
      {
        call: getMoviesWaltDisneyAnimations(),
        state: 'moviesWaltDisney',
        title: 'En primer plano',
      },
      {
        call: getMoviesWaltDisney90s(),
        state: 'moviesWaltDisney90s',
        title: 'Hecho en los 90',
      },
      {
        call: getMoviesWaltDisneyActionAdventure(),
        state: 'moviesWaltDisneyActionAdventure',
        title: 'Walt Disney Animation Studios',
      },
      {
        call: getItemsCollection('8354'),
        state: 'moviesIceAge',
        title: 'Ice Age: La edad de hielo',
      },
    ],
  },

  pixar: {
    posterBrand: '/assets/img/categories/bg-pixar.jpg',
    videoBrand: '/assets/videos/bg-pixar.mp4',
    dataBrand: [
      {
        call: getItemsFromBrand('movie', '3'),
        state: 'moviesPixar',
        title: 'En primer plano',
      },
      {
        call: getItemsCollection('10194'),
        state: 'toyStoryMovies',
        title: 'Toy Story',
      },
      {
        call: getItemsCollection('87118'),
        state: 'carsMovies',
        title: 'Cars',
      },
    ],
  },

  nationalGeographic: {
    posterBrand: '/assets/img/categories/bg-national-geographic.jpg',
    videoBrand: '/assets/videos/bg-national-geographic.mp4',
    dataBrand: [
      {
        call: getItemsFromBrand('movie', '7521'),
        state: 'moviesGeographic',
        title: 'Documentales',
      },
      {
        call: getItemsFromBrand('tv', '7521'),
        state: 'seriesGeographic',
        title: 'Docuseries',
      },
    ],
  },

  starWars: {
    posterBrand: '/assets/img/categories/bg-star-wars.jpg',
    videoBrand: '/assets/videos/bg-star-wars.mp4',
    dataBrand: [
      {
        call: getItemsFromBrand('movie', '1'),
        state: 'starWarsMovies',
        title: 'Películas Star Wars',
      },
      {
        call: getItemsFromBrand('tv', '1'),
        state: 'starWarsSeries',
        title: 'Series Star Wars',
      },
      {
        call: getItemsCollection('302331'),
        state: 'legoStarWarsMovies',
        title: 'Lego Star Wars',
      },
    ],
  },

  star: {
    posterBrand: '/assets/img/categories/bg-brand-star.jpg',
    videoBrand: '/assets/videos/bg-brand-star.mp4',
    dataBrand: [
      {
        call: getItemsFromStar('tv'),
        state: 'itemsStar',
        title: 'En primer plano',
      },
      {
        call: getItemsFromStarNew('movie'),
        state: 'newItemsStar',
        title: 'Añadidas recientemente',
      },
      {
        call: getItemsFromStarGenre('tv', '80'),
        state: 'seriesStarCrimes',
        title: 'Crímenes reales',
      },
      {
        call: getItemsFromStarGenre('movie', '28'),
        state: 'moviesStarAction',
        title: 'Películas de acción',
      },
      {
        call: getItemsFromStarGenre('tv', '18'),
        state: 'seriesStarDrama',
        title: 'Series dramáticas',
      },
    ],
  },
};

export default brandData;
