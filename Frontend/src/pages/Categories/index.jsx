import Spinner from '../../components/Spinner';
import FilterBar from '../../components/FilterBar';
import FilterList from '../../components/FilterList';
import { MainStyled, DivSpinner } from './styles';
import usePageAndCategory from '../../hooks/usePageAndCategory';

function Categories({ type }) {
  const {
    loading, items, genre, handleGenre, handlePage,
  } = usePageAndCategory({ type });

  return (
    <>
      <FilterBar
        title={type === 'movie' ? 'Películas' : 'Series'}
        genre={genre}
        handleGenre={handleGenre}
        type={type}
      />

      <MainStyled>
        {
          loading
            ? (
              <DivSpinner>
                <Spinner />
              </DivSpinner>
            ) : (
              <FilterList
                items={items}
                handlePage={handlePage}
                type={type}
              />
            )
        }
      </MainStyled>
    </>
  );
}

export default Categories;
