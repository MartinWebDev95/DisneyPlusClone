/* eslint-disable react/prop-types */
import Card from '../Card';
import {
  SectionDataStyled, ButtonStyled,
} from './styles';

function FilterList({
  movies, tv, setPage, type,
}) {
  const handlePage = () => {
    setPage((previousPage) => previousPage + 1);
  };

  return (
    <>
      <SectionDataStyled>
        {type === 'movie'
          ? (
            movies.map((item) => (
              <Card
                key={item.id}
                item={item}
                type={type}
                width="max-content"
                height="no-carousel"
              />
            ))
          ) : (
            tv.map((item) => (
              <Card
                key={item.id}
                item={item}
                type={type}
                width="max-content"
                height="no-carousel"
              />
            ))
          )}
      </SectionDataStyled>

      <ButtonStyled type="button" onClick={handlePage}>Mostrar más</ButtonStyled>
    </>
  );
}

export default FilterList;
