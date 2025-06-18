import CardStyle from './styles';

function CardBrand({ href, image, video }) {
  return (
    <CardStyle to={href}>
      <img src={image} alt={href.split('/')[1]} />
      <video autoPlay loop muted playsInline webkit-playsinline="true">
        <source src={video} type="video/mp4" />
      </video>
    </CardStyle>
  );
}

export default CardBrand;
