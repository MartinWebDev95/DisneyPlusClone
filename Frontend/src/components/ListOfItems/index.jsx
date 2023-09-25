import Card from '../Card';
import { NoData, DivStyled } from './styles';

function ListOfItems({ items }) {
  return (
    items?.length === 0
      ? (<NoData>No han añadido películas ni series a su lista</NoData>)
      : (
        <DivStyled>
          {items?.map((item) => (
            <Card
              key={item.item_id}
              item={item}
              type={item.type}
              width="max-content"
              height="no-carousel"
            />
          ))}
        </DivStyled>
      )
  );
}

export default ListOfItems;
