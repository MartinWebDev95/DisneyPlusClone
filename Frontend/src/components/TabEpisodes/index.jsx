import { useState, useEffect } from 'react';
import { Container, ListOfSeasons, SeasonItem } from './styles';
import { getSeasonEpisodes } from '../../services/getDataFromAPI';
import CarrouselEpisodes from '../CarrouselEpisodes';

function TabEpisodes({ seasons, id }) {
  const [seasonId, setSeasonId] = useState(seasons[0].name === 'Especiales' ? 0 : 1);
  const [active, setActive] = useState(seasons[0].name);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getSeasonEpisodes(id, seasonId)
      .then((data) => {
        setEpisodes(data);
      });
  }, [seasonId]);

  const handleClickSeason = (e) => {
    if (e.target.textContent === 'Especiales') {
      setSeasonId(0);
    } else {
      setSeasonId(e.target.textContent.split(' ')[1]);
    }

    setActive(e.target.textContent);
  };

  return (
    <>
      <Container>
        <ListOfSeasons>
          {seasons?.map((season) => (
            <li key={season.id}>
              <SeasonItem
                type="button"
                aria-selected={season.name === active}
                onClick={handleClickSeason}
              >
                {season.name}
              </SeasonItem>
            </li>
          ))}
        </ListOfSeasons>
      </Container>

      <CarrouselEpisodes collection={episodes} />
    </>
  );
}

export default TabEpisodes;
