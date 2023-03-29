import Card from '../Card';
import {
  SectionDataStyled,
} from './styles';

function FilterList({
  items, type,
}) {
  return (
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
  );
}

export default FilterList;
