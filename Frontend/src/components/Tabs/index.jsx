/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';

import Carrousel from '../Carrousel';
import TabDetail from '../TabDetail';
import TabEpisodes from '../TabEpisodes';

import useHoursAndMinutes from '../../hooks/useHoursAndMinutes';

import {
  getSimilarItems, getCast,
} from '../../services/getDataFromAPI';

import { TabsStyled, TabStyled, SectionStyled } from './styles';
import TabSuggested from '../TabSuggested';

function Tabs({ item, id, type }) {
  const [tabSelected, setTabSelected] = useState('suggested');
  const [similarItems, setSimilarItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const { hours, minutesLeft } = useHoursAndMinutes(item?.runtime || item?.episode_run_time);

  useEffect(() => {
    try {
      getSimilarItems(id, type).then((data) => {
        setSimilarItems(data);
      });

      getCast(id, type).then((data) => {
        setCast(data);
      });
    } catch (err) {
      throw new Error(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const handleClick = (value) => {
    setTabSelected(value);
  };

  return (
    <SectionStyled>
      <TabsStyled>
        {type === 'movie' && (
          <>
            <TabStyled
              type="button"
              selected={tabSelected === 'suggested'}
              value="suggested"
              onClick={(e) => handleClick(e.target.value)}
            >
              Sugerencias
            </TabStyled>

            <TabStyled
              type="button"
              selected={tabSelected === 'details'}
              value="details"
              onClick={(e) => handleClick(e.target.value)}
            >
              Detalles
            </TabStyled>
          </>
        )}

        {type === 'tv' && (
          <>
            <TabStyled
              type="button"
              selected={tabSelected === 'suggested'}
              value="suggested"
              onClick={(e) => handleClick(e.target.value)}
            >
              Sugerencias
            </TabStyled>

            <TabStyled
              type="button"
              selected={tabSelected === 'details'}
              value="details"
              onClick={(e) => handleClick(e.target.value)}
            >
              Detalles
            </TabStyled>

            <TabStyled
              type="button"
              selected={tabSelected === 'episodes'}
              value="episodes"
              onClick={(e) => handleClick(e.target.value)}
            >
              Episodios
            </TabStyled>
          </>
        )}
      </TabsStyled>

      {/* Se muestran las películas o series similares a la que se muestra */}
      {(tabSelected === 'suggested' && !loading) && (
        <TabSuggested items={similarItems} type={type} id={id} />
      )}

      {/* Se muestran los detalles de la serie o película */}
      {(tabSelected === 'details' && !loading) && (
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
      {(tabSelected === 'episodes' && !loading) && (
        <TabEpisodes seasons={item.seasons} id={id} />
      )}
    </SectionStyled>
  );
}

export default Tabs;
