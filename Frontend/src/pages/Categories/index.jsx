import {
  useCallback, useEffect, useRef,
} from 'react';
import Spinner from '../../components/Spinner';
import FilterBar from '../../components/FilterBar';
import FilterList from '../../components/FilterList';
import { MainStyled, DivSpinner } from './styles';
import usePaginationAndGenre from '../../hooks/usePaginationAndGenre';
import useNearScreen from '../../hooks/useNearScreen';

function Categories({ type }) {
  const {
    loading, items, genre, handleGenre, handlePage,
  } = usePaginationAndGenre({ type });

  const externalRef = useRef();

  const { nearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const handleNextPage = useCallback(() => handlePage(), [handlePage]);

  useEffect(() => {
    if (nearScreen) {
      handleNextPage();
    }
  }, [nearScreen]);

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
              <>
                <FilterList
                  items={items}
                  type={type}
                />

                <div id="visor" ref={externalRef} />
              </>
            )
        }
      </MainStyled>
    </>
  );
}

export default Categories;
