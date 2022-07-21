import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import VideoBgStar from '../../../public/assets/videos/bg-brand-star.mp4';
import PosterImage from '../../../public/assets/img/categories/bg-brand-star.jpg';
import BackgroundVideo from '../../components/BackgroundVideo';
import { useAuth } from '../../context/AuthContext';

function Star() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Header position="fixed" />
      <BackgroundVideo bgVideo={VideoBgStar} posterImage={PosterImage} />
    </>
  );
}

export default Star;
