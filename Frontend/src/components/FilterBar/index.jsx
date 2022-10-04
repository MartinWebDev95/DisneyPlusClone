/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import useOpacity from '../../hooks/useOpacity';
import {
  Title, FormStyled, OptionStyled, SectionFormStyled,
} from './styles';

const listGenresMovies = [
  { '': 'Todas las películas' },
  { 28: 'Acción' },
  { 12: 'Aventura' },
  { 35: 'Comedia' },
  { 16: 'Animación' },
  { 18: 'Drama' },
  { 878: 'Ciencia Ficción' },
  { 53: 'Thrillers' },
  { 99: 'Documental' },
];

const listGenresSeries = [
  { '': 'Todas las series' },
  { 10759: 'Acción y Aventura' },
  { 35: 'Comedia' },
  { 16: 'Animación' },
  { 18: 'Drama' },
  { 10765: 'Ciencia Ficción' },
  { 9648: 'Thrillers' },
  { 99: 'Docuserie' },
];

function FilterBar({
  title, setGenre, setPage, setMovies, setTv,
}) {
  const { opacity } = useOpacity();

  // Se cambia el género
  const handleSelect = (e) => {
    window.scrollTo(0, 0);
    setGenre(e.target.value);
    setPage(1);
    title === 'Películas' ? setMovies([]) : setTv([]);
  };

  return (
    <SectionFormStyled opacity={opacity.toString()}>
      <Title>{title}</Title>
      <FormStyled action="#">
        <select name="genres" id="genres" defaultValue="" onChange={handleSelect}>
          {
            title === 'Películas'
              ? (
                listGenresMovies.map((g) => (
                  <OptionStyled
                    key={Object.keys(g)}
                    value={Object.keys(g)}
                  >
                    {Object.values(g)}
                  </OptionStyled>
                ))
              ) : (
                listGenresSeries.map((g) => (
                  <OptionStyled
                    key={Object.keys(g)}
                    value={Object.keys(g)}
                  >
                    {Object.values(g)}
                  </OptionStyled>
                ))
              )
          }
        </select>
      </FormStyled>
    </SectionFormStyled>
  );
}

export default FilterBar;
