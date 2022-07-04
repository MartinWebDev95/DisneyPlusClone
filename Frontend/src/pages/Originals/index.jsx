import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BgImage from '../../../public/assets/img/background_originals.png';
import { ImageStyled, ContainerImage } from './styles';

function Originals() {
  return (
    <>
      <Header />
      <main>
        <ContainerImage>
          <ImageStyled src={BgImage} alt="Originals" />
        </ContainerImage>
      </main>
      <Footer />
    </>
  );
}

export default Originals;
