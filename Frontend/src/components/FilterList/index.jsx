/* eslint-disable react/prop-types */
import Card from '../Card';
import {
  SectionDataStyled, ButtonStyled,
} from './styles';

function FilterList({
  items, handlePage, type,
}) {
  return (
    <>
      <SectionDataStyled>
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            type={type}
            width="max-content"
            height="no-carousel"
          />
        ))}
      </SectionDataStyled>

      <ButtonStyled
        type="button"
        onClick={handlePage}
      >
        Mostrar más
      </ButtonStyled>
    </>
  );
}

export default FilterList;
