/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Carrousel from '../Carrousel';
import {
  TabsStyled,
  TabStyled,
  Container,
  Title,
  Sinopsis,
  Detail,
  ContainerDetails,
  ListOfSeasons,
  SeasonItem,
} from './styles';
import {
  getSimilarMovies, getCastFromMovie, getSimilarSeries, getCastFromSerie,
} from '../../services/getDataFromAPI';
import getHoursAndMinutes from '../../helpers/getHoursAndMinutes';

function Tabs({
  item, id, type,
}) {
  const [selectedSuggested, setSelectedSuggested] = useState(true);
  const [selectedDetails, setSelectedDetails] = useState(false);
  const [selectedEpisodes, setSelectedEpisodes] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarSeries, setSimilarSeries] = useState([]);
  const [cast, setCast] = useState([]);
  const { hours, minutesLeft } = getHoursAndMinutes(type === 'movie' ? item?.runtime : item?.episode_run_time);

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

  const handleClickSeason = (e) => {

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
      {
        (selectedSuggested && (
          type === 'movie' ? (
            <Carrousel collection={similarMovies} type="movie" />
          ) : (
            <Carrousel collection={similarSeries} type="tv" />
          )
        ))
      }
      {selectedDetails && (
        <Container>
          <div>
            <Title>{type === 'movie' ? item.title : item.name}</Title>
            <Sinopsis>
              {item.overview}
            </Sinopsis>
          </div>
          <ContainerDetails>
            <div>
              <Detail>
                Duración:
                <span>
                  {
                    hours === 0 ? (
                      `${minutesLeft} min`
                    ) : (
                      `${hours} h ${minutesLeft} min`
                    )
                  }
                </span>
              </Detail>
              <Detail>
                Fecha de estreno:
                <span>{type === 'movie' ? item.release_date?.split('-')[0] : item.first_air_date?.split('-')[0]}</span>
              </Detail>
              <Detail>
                Género:
                <span>{item.genres.map((genre) => genre.name).join(', ')}</span>
              </Detail>
            </div>
            <div>
              <Detail>
                Con:
                {cast?.map((person) => (
                  <span key={person.id}>{person.name}</span>
                )).slice(0, 6)}
              </Detail>
            </div>
          </ContainerDetails>
        </Container>
      )}
      {selectedEpisodes && (
        <Container>
          <ListOfSeasons>
            {item.seasons.map((season) => (
              <SeasonItem key={season.id} onClick={handleClickSeason}>
                Temporada
                {' '}
                {season.season_number}
              </SeasonItem>
            ))}
          </ListOfSeasons>
        </Container>
      )}
    </section>
  );
}

export default Tabs;
