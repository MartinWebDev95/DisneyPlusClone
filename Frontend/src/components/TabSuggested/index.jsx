import Carrousel from '../Carrousel';
import NotSuggested from './styles';

function TabSuggested({ items, type, id }) {
  return (
    items.length !== 0
      ? (<Carrousel collection={items} type={type} id={id} resetPosition />)
      : (<NotSuggested>No se encuentran películas o series similares</NotSuggested>)
  );
}

export default TabSuggested;
