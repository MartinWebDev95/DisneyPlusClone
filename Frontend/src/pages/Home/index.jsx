import CardBrand from '../../components/CardBrand';
import Carrousel from '../../components/Carrousel';
import Slider from '../../components/Slider';
import Spinner from '../../components/Spinner';
import removeBlankImagesFromSlider from '../../helpers/removeBlankImagesFromSlider';
import useFetchFromApi from '../../hooks/useFetchFromApi';
import homeData from '../../utils/homeData';
import Container from './styles';

function Home() {
  const { data, isLoading } = useFetchFromApi({ apiCalls: homeData, namePage: 'home' });

  return (
    isLoading
      ? (
        <Spinner />
      ) : (
        <main>
          <Slider
            collection={removeBlankImagesFromSlider({ state: data })}
          />

          <Container>
            <CardBrand />
          </Container>

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

export default Home;
