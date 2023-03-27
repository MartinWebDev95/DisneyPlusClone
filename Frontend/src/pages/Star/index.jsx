import BackgroundVideo from '../../components/BackgroundVideo';
import Spacing from './styles';
import Carrousel from '../../components/Carrousel';
import useFetchFromApi from '../../hooks/useFetchFromApi';
import brandData from '../../utils/brandData';
import Spinner from '../../components/Spinner';

function Star() {
  const { data, isLoading } = useFetchFromApi({ apiCalls: brandData, brand: 'star' });

  return (
    isLoading
      ? (<Spinner />)
      : (
        <>
          <BackgroundVideo
            bgVideo={brandData.star.videoBrand}
            posterImage={brandData.star.posterBrand}
            altText="Star Logo"
          />

          <Spacing />

          {Object.values(data).map((collection) => (
            <Carrousel
              key={crypto.randomUUID()}
              collection={collection.data}
              title={collection.title}
            />
          ))}
        </>
      )
  );
}

export default Star;
