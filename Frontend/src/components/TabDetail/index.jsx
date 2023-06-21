/* eslint-disable react/prop-types */
import getHoursAndMinutes from '../../helpers/getHoursAndMinutes';
import {
  Container,
  Title,
  Sinopsis,
  Detail,
  ContainerDetails,
} from './styles';

function TabDetail({ item, cast, type }) {
  return (
    <Container>
      <div>
        <Title>{item.title || item.name}</Title>

        <Sinopsis>
          {item.overview}
        </Sinopsis>
      </div>

      <ContainerDetails>
        <div>
          <Detail>
            Duración:
            <span>
              {type === 'movie'
                ? getHoursAndMinutes(item?.runtime)
                : getHoursAndMinutes(item?.episode_run_time)}
            </span>
          </Detail>

          <Detail>
            Fecha de estreno:
            <span>{item.first_air_date?.split('-')[0] || item.release_date?.split('-')[0]}</span>
          </Detail>

          <Detail>
            Género:
            <span>{item.genres?.map((genre) => genre.name).join(', ')}</span>
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
  );
}

export default TabDetail;
