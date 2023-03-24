import Card from '../Card';
import { ListStyled, NotFound } from './styles';

function ListOfSearchResults({ results, keyword }) {
  return (
    // Si no se encuentran resultados...
    results.length === 0 && keyword !== ''
      ? (
        <NotFound>{`No se han encontrado resultados para "${keyword}"`}</NotFound>
      ) : (
        <ListStyled>
          {results?.map((item) => (
            <Card
              key={item.id}
              item={item}
              type={item.type ? item.type : 'movie'}
              width="max-content"
              height="no-carousel"
            />
          ))}
        </ListStyled>
      )
  );
}

export default ListOfSearchResults;
