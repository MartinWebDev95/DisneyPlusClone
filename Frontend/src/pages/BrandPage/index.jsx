import Carrousel from '../../components/Carrousel';
import BackgroundVideo from '../../components/BackgroundVideo';
import Spacing from './styles';
import useFetchFromApi from '../../hooks/useFetchFromApi';
import brandData from '../../utils/brandData';
import Spinner from '../../components/Spinner';

function BrandPage({ brand }) {
  const { data, isLoading } = useFetchFromApi({ apiCalls: brandData, brand });

  return (
    isLoading
      ? (<Spinner />)
      : (
        <main>
          <BackgroundVideo
            bgVideo={brandData[brand].videoBrand}
            posterImage={brandData[brand].posterBrand}
            altText={`${brand.substring(0, 1).toUpperCase() + brand.substring(1, brand.length)}`}
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

export default BrandPage;
