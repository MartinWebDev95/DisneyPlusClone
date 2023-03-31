import Carrousel from '../../components/Carrousel';
import BackgroundVideo from '../../components/BackgroundVideo';
import Spacing from './styles';
import useFetchFromApi from '../../hooks/useFetchFromApi';
import brandData from '../../utils/brandData';
import Spinner from '../../components/Spinner';

function BrandPage({ namePage }) {
  const { data, isLoading } = useFetchFromApi({ apiCalls: brandData, namePage });

  return (
    isLoading
      ? (<Spinner />)
      : (
        <main>
          <BackgroundVideo
            bgVideo={brandData[namePage].videoBrand}
            posterImage={brandData[namePage].posterBrand}
            altText={
              namePage.substring(0, 1).toUpperCase() + namePage.substring(1, namePage.length)
            }
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
