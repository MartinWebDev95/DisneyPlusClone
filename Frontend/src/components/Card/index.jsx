/* eslint-disable react/prop-types */
import CardPlaceholder from '../CardPlaceholder';
import CardImage from '../CardImage';

function Card({
  item, type, isLoading = false, width = '', height = '',
}) {
  return (
    isLoading
      ? (
        <CardPlaceholder />
      )
      : (
        <CardImage type={type} item={item} width={width} height={height} />
      )
  );
}

export default Card;
