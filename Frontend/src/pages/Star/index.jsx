import { useEffect } from 'react';
import Header from '../../components/Header';
import VideoBgStar from '../../../public/assets/videos/bg-brand-star.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-brand-star.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';

function Star() {

  // useEffect(() => {
  //   if (user === null) {
  //     navigate('/');
  //   }
  // }, []);

  return (
    <>
      <Header position="fixed" />
      <BackgroundVideo bgVideo={VideoBgStar} posterImage={PosterImage} />
    </>
  );
}

export default Star;
