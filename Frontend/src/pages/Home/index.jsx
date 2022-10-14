import { useState, useEffect } from 'react';
import CardBrand from '../../components/CardBrand';
import Header from '../../components/Header';
import Carrousel from '../../components/Carrousel';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import Spinner from '../../components/Spinner';
import Container from './styles';
import { getNewItemsDisney, getItemsForGenre } from '../../services/getDataFromAPI';

function Home() {
  const [newItems, setNewItems] = useState([]);
  const [animationItems, setAnimationItems] = useState([]);
  const [dramaItems, setDramaItems] = useState([]);
  const [comedySeries, setComedySeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getNewItemsDisney('movie'), getNewItemsDisney('tv')]).then(
      (data) => {
        const newMovies = data[0].map((item) => ({ ...item, type: 'movie' }));
        const newSeries = data[1].map((item) => ({ ...item, type: 'tv' }));
        setNewItems(newSeries.concat(newMovies));
        setLoading(false);
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
    });
  }, []);

  return (
    !loading
      ? (
        <>
          <Header position="fixed" />

          <main>
            <Slider collection={newItems} />

            <Container>
              <CardBrand />
            </Container>

            <Carrousel
              collection={newItems}
              title="Nuevo en Disney+"
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

          <Footer />
        </>
      ) : (
        <Spinner />
      )
  );
}

export default Home;
