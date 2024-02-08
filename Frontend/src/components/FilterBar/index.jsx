/* eslint-disable no-unused-expressions */
import listGenres from '../../utils/listGenres';
import {
  Title, FormStyled, OptionStyled, SectionFormStyled,
} from './styles';

function FilterBar({
  title, genre, handleGenre, type,
}) {
  return (
    <SectionFormStyled>

      <Title>{title}</Title>

      <FormStyled action="#">
        <select
          name="genres"
          id="genres"
          value={genre}
          onChange={handleGenre}
        >
          {
            listGenres[type].map((gen) => (
              <OptionStyled
                key={Object.keys(gen)}
                value={Object.keys(gen)}
              >
                {Object.values(gen)}
              </OptionStyled>
            ))
          }
        </select>
      </FormStyled>
    </SectionFormStyled>
  );
}

export default FilterBar;
