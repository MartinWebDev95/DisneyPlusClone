/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import Carrousel from '../Carrousel';
import TabDetail from '../TabDetail';
import TabEpisodes from '../TabEpisodes';
import { TabsStyled, TabStyled } from './styles';
import {
  getSimilarItems, getCast,
} from '../../services/getDataFromAPI';
import getHoursAndMinutes from '../../helpers/getHoursAndMinutes';

function Tabs({ item, id, type }) {
  const [tabSelected, setTabSelected] = useState('suggested');
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarSeries, setSimilarSeries] = useState([]);
  const [cast, setCast] = useState([]);
  const { hours, minutesLeft } = getHoursAndMinutes(item?.runtime || item?.episode_run_time);

  useEffect(() => {
    type === 'movie'
      ? (
        getSimilarItems(id, type).then((data) => {
          setSimilarMovies(data);
        }),

        getCast(id, type).then((data) => {
          setCast(data);
        })
      ) : (
        getSimilarItems(id, type).then((data) => {
          setSimilarSeries(data);
        }),

        getCast(id, type).then((data) => {
          setCast(data);
        })
      );
  }, [id]);

  const handleClick = (value) => {
    setTabSelected(value);
  };

  return (
    <section>
      <TabsStyled>
        {type === 'movie' && (
          <>
            <TabStyled type="button" selected={tabSelected === 'suggested'} value="suggested" onClick={(e) => handleClick(e.target.value)}>
              Sugerencias
            </TabStyled>
            <TabStyled type="button" selected={tabSelected === 'details'} value="details" onClick={(e) => handleClick(e.target.value)}>
              Detalles
            </TabStyled>
          </>
        )}

        {type === 'tv' && (
          <>
            <TabStyled type="button" selected={tabSelected === 'suggested'} value="suggested" onClick={(e) => handleClick(e.target.value)}>
              Sugerencias
            </TabStyled>
            <TabStyled type="button" selected={tabSelected === 'details'} value="details" onClick={(e) => handleClick(e.target.value)}>
              Detalles
            </TabStyled>
            <TabStyled type="button" selected={tabSelected === 'episodes'} value="episodes" onClick={(e) => handleClick(e.target.value)}>
              Episodios
            </TabStyled>
          </>
        )}
      </TabsStyled>

      {/* Se muestran las películas o series similares a la que se muestra */}
      {tabSelected === 'suggested' && (
        type === 'movie' ? (
          <Carrousel collection={similarMovies} type="movie" />
        ) : (
          <Carrousel collection={similarSeries} type="tv" />
        )
      )}

      {/* Se muestran los detalles de la serie o película */}
      {tabSelected === 'details' && (
        <TabDetail
          title={item.title || item.name}
          overview={item.overview}
          date={item.first_air_date || item.release_date}
          genres={item.genres}
          cast={cast}
          hours={hours}
          minutesLeft={minutesLeft}
        />
      )}

      {/* Se muestran las temporadas de la serie con todos sus episodios */}
      {tabSelected === 'episodes' && (
        <TabEpisodes seasons={item.seasons} id={id} />
      )}
    </section>
  );
}

export default Tabs;
