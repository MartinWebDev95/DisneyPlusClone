/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Carrousel from '../Carrousel';
import TabDetail from '../TabDetail';
import TabEpisodes from '../TabEpisodes';
import { TabsStyled, TabStyled } from './styles';
import {
  getSimilarMovies, getCastFromMovie, getSimilarSeries, getCastFromSerie,
} from '../../services/getDataFromAPI';
import getHoursAndMinutes from '../../helpers/getHoursAndMinutes';

function Tabs({ item, id, type }) {
  const [selectedSuggested, setSelectedSuggested] = useState(true);
  const [selectedDetails, setSelectedDetails] = useState(false);
  const [selectedEpisodes, setSelectedEpisodes] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarSeries, setSimilarSeries] = useState([]);
  const [cast, setCast] = useState([]);
  const { hours, minutesLeft } = getHoursAndMinutes(item?.runtime || item?.episode_run_time);

  useEffect(() => {
    type === 'movie'
      ? (
        getSimilarMovies(id).then((data) => {
          setSimilarMovies(data);
        }),

        getCastFromMovie(id).then((data) => {
          setCast(data);
        })
      ) : (
        getSimilarSeries(id).then((data) => {
          setSimilarSeries(data);
        }),

        getCastFromSerie(id).then((data) => {
          setCast(data);
        })
      );
  }, [id]);

  const handleClick = (e) => {
    if (e.target.textContent === 'Sugerencias') {
      setSelectedSuggested(true);
      setSelectedDetails(false);
      setSelectedEpisodes(false);
    } else if (e.target.textContent === 'Detalles') {
      setSelectedSuggested(false);
      setSelectedDetails(true);
      setSelectedEpisodes(false);
    } else {
      setSelectedSuggested(false);
      setSelectedDetails(false);
      setSelectedEpisodes(true);
    }
  };

  return (
    <section>
      <TabsStyled>
        {type === 'movie' && (
          <>
            <TabStyled selected={selectedSuggested} onClick={handleClick}>
              Sugerencias
            </TabStyled>
            <TabStyled selected={selectedDetails} onClick={handleClick}>
              Detalles
            </TabStyled>
          </>
        )}

        {type === 'tv' && (
          <>
            <TabStyled selected={selectedSuggested} onClick={handleClick}>
              Sugerencias
            </TabStyled>
            <TabStyled selected={selectedDetails} onClick={handleClick}>
              Detalles
            </TabStyled>
            <TabStyled selected={selectedEpisodes} onClick={handleClick}>
              Episodios
            </TabStyled>
          </>
        )}
      </TabsStyled>

      {/* Se muestran las películas o series similares a la que se muestra */}
      {selectedSuggested && (
        type === 'movie' ? (
          <Carrousel collection={similarMovies} type="movie" />
        ) : (
          <Carrousel collection={similarSeries} type="tv" />
        )
      )}

      {/* Se muestran los detalles de la serie o película */}
      {selectedDetails && (
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
      {selectedEpisodes && (
        <TabEpisodes seasons={item.seasons} id={id} />
      )}
    </section>
  );
}

export default Tabs;
