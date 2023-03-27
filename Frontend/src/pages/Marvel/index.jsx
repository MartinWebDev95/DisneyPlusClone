import Carrousel from '../../components/Carrousel';
import BackgroundVideo from '../../components/BackgroundVideo';
import Spacing from './styles';
import useFetchFromApi from '../../hooks/useFetchFromApi';
import brandData from '../../utils/brandData';
import Spinner from '../../components/Spinner';

function Marvel() {
  const { data, isLoading } = useFetchFromApi({ apiCalls: brandData, brand: 'marvel' });

  return (
    isLoading
      ? (<Spinner />)
      : (
        <main>
          <BackgroundVideo
            bgVideo={brandData.marvel.videoBrand}
            posterImage={brandData.marvel.posterBrand}
            altText="Marvel Logo"
          />

          <Spacing />

          {Object.values(data).map((collection) => (
            <Carrousel
              key={crypto.randomUUID()}
              collection={collection.data}
              title={collection.title}
            />
          ))}
        </main>
      )
  );
}

export default Marvel;
