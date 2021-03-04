import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './styles';
import { settings } from './config';

const ImageSlider = ({ photos }: { photos: string[] }) => {
  return (
    <S.SliderWrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {photos.map((photo) => (
          <img key={photo} src={photo} alt="Slider item" />
        ))}
      </Slider>
    </S.SliderWrapper>
  );
};

export { ImageSlider };
