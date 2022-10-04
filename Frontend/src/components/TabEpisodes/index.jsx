/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Container, ListOfSeasons, SeasonItem } from './styles';
import { getSeasonEpisodes } from '../../services/getDataFromAPI';
import CarrouselEpisodes from '../CarrouselEpisodes';

function TabEpisodes({ seasons, id }) {
  const [seasonId, setSeasonId] = useState(seasons[0].name === 'Especiales' ? 0 : 1);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getSeasonEpisodes(id, seasonId).then((data) => {
      setEpisodes(data);
    });
  }, [seasonId]);

  const handleClickSeason = (e) => {
    if (e.target.textContent === 'Especiales') {
      setSeasonId(0);
    } else {
      setSeasonId(e.target.textContent.split(' ')[1]);
    }
  };

  return (
    <Container>
      <ListOfSeasons>
        {seasons?.map((season) => (
          <SeasonItem key={season.id} onClick={handleClickSeason}>
            {season.name}
          </SeasonItem>
        ))}
      </ListOfSeasons>
      <CarrouselEpisodes collection={episodes} />
    </Container>
  );
}

export default TabEpisodes;
