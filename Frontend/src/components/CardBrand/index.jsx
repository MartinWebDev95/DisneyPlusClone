import VideoDisney from '/assets/videos/disney.mp4';
import VideoPixar from '/assets/videos/pixar.mp4';
import VideoMarvel from '/assets/videos/marvel.mp4';
import VideoStarWars from '/assets/videos/star-wars.mp4';
import VideoNationalGeographic from '/assets/videos/national-geographic.mp4';
import VideoStar from '/assets/videos/brand-star.mp4';
import { Wrapper, CardStyle } from './styles';

function CardBrand() {
  return (
    <Wrapper>
      <CardStyle to="/brand/disney">
        <img src="/assets/img/categories/disney.png" alt="" />
        <video autoPlay loop muted>
          <source src={VideoDisney} type="video/mp4" />
        </video>
      </CardStyle>

      <CardStyle to="/brand/pixar">
        <img src="/assets/img/categories/pixar.png" alt="" />
        <video autoPlay loop muted>
          <source src={VideoPixar} type="video/mp4" />
        </video>
      </CardStyle>

      <CardStyle to="/brand/marvel">
        <img src="/assets/img/categories/marvel.png" alt="" />
        <video autoPlay loop muted>
          <source src={VideoMarvel} type="video/mp4" />
        </video>
      </CardStyle>

      <CardStyle to="/brand/star-wars">
        <img src="/assets/img/categories/star_wars.png" alt="" />
        <video autoPlay loop muted>
          <source src={VideoStarWars} type="video/mp4" />
        </video>
      </CardStyle>

      <CardStyle to="/brand/national-geographic">
        <img src="/assets/img/categories/national_geographic.png" alt="" />
        <video autoPlay loop muted>
          <source src={VideoNationalGeographic} type="video/mp4" />
        </video>
      </CardStyle>

      <CardStyle to="/brand/star">
        <img src="/assets/img/categories/star.png" alt="" />
        <video autoPlay loop muted>
          <source src={VideoStar} type="video/mp4" />
        </video>
      </CardStyle>
    </Wrapper>
  );
}

export default CardBrand;
