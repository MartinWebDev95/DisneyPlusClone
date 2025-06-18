import cardBrandData from '../../utils/cardBrandData';
import CardBrand from '../CardBrand';
import List from './styles';

function ListOfCardsBrand() {
  return (
    <List>
      {
        cardBrandData.map((card) => (
          <CardBrand
            key={card.href}
            href={card.href}
            image={card.image}
            video={card.video}
          />
        ))
      }
    </List>
  );
}

export default ListOfCardsBrand;
