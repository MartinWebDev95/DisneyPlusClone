/* eslint-disable no-unused-expressions */
import useOpacity from '../../hooks/useOpacity';
import listGenres from '../../utils/listGenres';
import {
  Title, FormStyled, OptionStyled, SectionFormStyled,
} from './styles';

function FilterBar({
  title, genre, handleGenre, type,
}) {
  const { opacity } = useOpacity();

  return (
    <SectionFormStyled opacity={opacity.toString()}>

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
