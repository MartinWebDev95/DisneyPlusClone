/* eslint-disable react/prop-types */
import {
  Container,
  Title,
  Sinopsis,
  Detail,
  ContainerDetails,
} from './styles';

function TabDetail({
  title, overview, date, genres, cast, hours, minutesLeft,
}) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Sinopsis>
          {overview}
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
            <span>{date?.split('-')[0]}</span>
          </Detail>
          <Detail>
            Género:
            <span>{genres?.map((genre) => genre.name).join(', ')}</span>
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
