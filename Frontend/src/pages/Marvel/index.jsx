import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import VideoBgMarvel from '../../../public/assets/videos/bg-marvel.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-marvel.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import Spacing from './styles';
import Spinner from '../../components/Spinner';
import { getItemsCollection, getItemsFromBrand } from '../../services/getDataFromAPI';

function Marvel() {
  const [moviesMarvel, setMoviesMarvel] = useState([]);
  const [seriesMarvel, setSeriesMarvel] = useState([]);
  const [moviesAvengers, setMoviesAvengers] = useState([]);
  const [moviesSpiderman, setMoviesSpiderman] = useState([]);
  const [moviesCaptainAmerica, setMoviesCaptainAmerica] = useState([]);
  const [moviesThor, setMoviesThor] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);

    getItemsFromBrand('movie', 420)
      .then((data) => {
        setMoviesMarvel(data);
      });

    getItemsFromBrand('tv', 420)
      .then((data) => {
        setSeriesMarvel(data);
      });

    getItemsCollection(86311)
      .then((data) => {
        setMoviesAvengers(data);
      });

    getItemsCollection(531241)
      .then((data) => {
        setMoviesSpiderman(data);
      });

    getItemsCollection(131295)
      .then((data) => {
        setMoviesCaptainAmerica(data);
      });

    getItemsCollection(131296)
      .then((data) => {
        setMoviesThor(data);
      });

    setLoading(false);
  }, []);

  return (
    <>
      <Header position="fixed" />

      <main>
        <BackgroundVideo bgVideo={VideoBgMarvel} posterImage={PosterImage} />

        <Spacing />

        {isLoading
          ? (<Spinner />)
          : (
            <>
              <Carrousel
                collection={moviesMarvel}
                title="Películas Marvel"
                type="movie"
              />

              <Carrousel
                collection={seriesMarvel}
                title="Series Marvel"
                type="tv"
              />

              <Carrousel
                collection={moviesAvengers}
                title="Los Vengadores"
                type="movie"
              />

              <Carrousel
                collection={moviesSpiderman}
                title="Spiderman"
                type="movie"
              />

              <Carrousel
                collection={moviesCaptainAmerica}
                title="El Capitán América"
                type="movie"
              />

              <Carrousel
                collection={moviesThor}
                title="Thor"
                type="movie"
              />
            </>
          )}
      </main>

      <Footer />
    </>
  );
}

export default Marvel;
