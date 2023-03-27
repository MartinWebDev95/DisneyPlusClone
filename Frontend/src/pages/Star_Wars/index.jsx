import BackgroundVideo from '../../components/BackgroundVideo';
import Carrousel from '../../components/Carrousel';

import Spacing from './styles';
import useFetchFromApi from '../../hooks/useFetchFromApi';
import brandData from '../../utils/brandData';
import Spinner from '../../components/Spinner';

function StarWars() {
  const { data, isLoading } = useFetchFromApi({ apiCalls: brandData, brand: 'starWars' });

  return (
    isLoading
      ? (<Spinner />)
      : (
        <main>
          <BackgroundVideo
            bgVideo={brandData.starWars.videoBrand}
            posterImage={brandData.starWars.posterBrand}
            altText="Star Wars Logo"
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

export default StarWars;
