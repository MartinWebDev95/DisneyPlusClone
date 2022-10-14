/* eslint-disable react/prop-types */
import CardPlaceholder from '../CardPlaceholder';
import CardEpisodesInfo from '../CardEpisodesInfo';

function CardEpisodes({ item, isLoading }) {
  return (
    isLoading
      ? (
        <CardPlaceholder />
      ) : (
        <CardEpisodesInfo item={item} />
      )
  );
}

export default CardEpisodes;
