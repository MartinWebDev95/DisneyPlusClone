import { useState, useEffect } from 'react';

import CardBrand from '../../components/CardBrand';
import Carrousel from '../../components/Carrousel';
import Slider from '../../components/Slider';
import Spinner from '../../components/Spinner';

import { getNewItemsDisney, getItemsForGenre } from '../../services/getDataFromAPI';

import Container from './styles';

function Home() {
  const [newItems, setNewItems] = useState([]);
  const [animationItems, setAnimationItems] = useState([]);
  const [dramaItems, setDramaItems] = useState([]);
  const [comedySeries, setComedySeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    Promise.all([getNewItemsDisney('movie'), getNewItemsDisney('tv')]).then(
      (data) => {
        const newMovies = data[0].map((item) => ({ ...item, type: 'movie' }));
        const newSeries = data[1].map((item) => ({ ...item, type: 'tv' }));
        setNewItems(newSeries.concat(newMovies));
      },
    );

    getItemsForGenre('movie', '16').then((data) => {
      setAnimationItems(data);
    });

    getItemsForGenre('movie', '18').then((data) => {
      setDramaItems(data);
    });

    getItemsForGenre('tv', '35').then((data) => {
      setComedySeries(data);
      setLoading(false);
    });
  }, []);

  return (
    !loading
      ? (
        <main>
          <Slider collection={newItems.filter((item) => item.backdrop_path !== null)} />

          <Container>
            <CardBrand />
          </Container>

          <Carrousel
            collection={newItems}
            title="Nuevo en Disney+"
            isLoading={loading}
          />

          <Carrousel
            collection={animationItems}
            title="Películas de Animación"
            type="movie"
          />

          <Carrousel
            collection={dramaItems}
            title="Películas Dramáticas"
            type="movie"
          />

          <Carrousel
            collection={comedySeries}
            title="Series de comedia"
            type="tv"
          />
        </main>
      ) : (
        <Spinner />
      )
  );
}

export default Home;
