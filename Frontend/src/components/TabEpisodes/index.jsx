/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, ListOfSeasons, SeasonItem } from './styles';
import { getSeasonEpisodes } from '../../services/getDataFromAPI';
import CarrouselEpisodes from '../CarrouselEpisodes';

function TabEpisodes({ seasons, id }) {
  const [seasonId, setSeasonId] = useState(0);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getSeasonEpisodes(id, seasonId).then((data) => {
      setEpisodes(data);
    });
  }, [seasonId]);

  console.log(episodes);

  const handleClickSeason = (e) => {
    setSeasonId(e.target.textContent.split(' ')[1]);
  };

  return (
    <Container>
      <ListOfSeasons>
        {seasons?.map((season) => (
          <SeasonItem key={season.id} onClick={handleClickSeason}>
            Temporada
            {' '}
            {season.season_number}
          </SeasonItem>
        ))}
      </ListOfSeasons>
      <CarrouselEpisodes collection={episodes} />
    </Container>
  );
}

export default TabEpisodes;
