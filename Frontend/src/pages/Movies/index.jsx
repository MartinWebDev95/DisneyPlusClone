/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import {
  Title, SectionDataStyled, MainStyled, FormStyled, OptionStyled, SectionFormStyled,
} from './styles';
import { getMoviesFromDisney } from '../../services/getDataFromAPI';

// Lista de géneros
const listGenres = {
  all: '',
  action: 28,
  adventure: 12,
  comedy: 35,
  animation: 16,
  drama: 18,
  fiction: 878,
  thriller: 53,
  documental: 99,
};

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');
  const [opacity, setOpacity] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cada vez que se cambie de género se renderizará
  useEffect(() => {
    window.scrollTo(0, 0);
    getMoviesFromDisney(genre).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [genre]);

  // Se cambia el género
  const handleSelect = (e) => {
    setGenre(listGenres[e.target.value]);
  };

  const changeOpacity = () => {
    window.scrollY > 0 ? setOpacity(true) : setOpacity(false);
  };

  window.addEventListener('scroll', changeOpacity);

  return (
    <>
      <Header />
      <MainStyled>
        <SectionFormStyled opacity={opacity.toString()}>
          <Title>Películas</Title>
          <FormStyled action="#">
            <select name="genres" id="genres" onChange={handleSelect}>
              <OptionStyled value="all" default>Todas las películas</OptionStyled>
              <OptionStyled value="action">Acción</OptionStyled>
              <OptionStyled value="adventure">Aventura</OptionStyled>
              <OptionStyled value="comedy">Comedias</OptionStyled>
              <OptionStyled value="animation">Animación</OptionStyled>
              <OptionStyled value="drama">Dramas</OptionStyled>
              <OptionStyled value="fiction">Ciencia ficción</OptionStyled>
              <OptionStyled value="thriller">Thrillers</OptionStyled>
              <OptionStyled value="documental">Documentales</OptionStyled>
            </select>
          </FormStyled>
        </SectionFormStyled>
        <SectionDataStyled>
          {
            loading
              ? (<Spinner />)
              : (movies.map((item) => (
                <Card key={item.id} item={item} type="movie" />
              )))
          }
        </SectionDataStyled>
      </MainStyled>
      <Footer />
    </>
  );
}

export default Movies;
