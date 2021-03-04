import styled from 'styled-components';

const SliderWrapper = styled.div`
  margin-bottom: 40px;
  filter: drop-shadow(0px 24px 48px rgba(0, 0, 0, 0.16));

  & .slick-slider {
    width: 596px;
  }

  & .slick-prev {
    left: -14px;
  }

  & .slick-next {
    right: -14px;
  }

  & .slick-disabled {
    path {
      stroke: ${(p) => p.theme.colors.disabledSliderBtn};
    }
  }

  & .slick-prev,
  & .slick-next {
    width: 48px;
    height: 80px;
    border-radius: 4px;
    background-color: ${(p) => p.theme.colors.background};
    box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.2);
    z-index: 1;

    &:before {
      content: '';
    }
  }

  & img {
    height: 312px;
    object-fit: cover;
    border-radius: 24px;
  }

  @media (max-width: 1300px) {
    & .slick-slider {
      width: 485px;
    }
  }

  @media (max-width: 1200px) {
    & .slick-slider {
      width: 356px;
    }
  }

  @media (max-width: 1000px) {
    & .slick-slider {
      width: 286px;
    }
  }

  @media (max-width: 910px) {
    & .slick-slider {
      width: 90vw;
    }
  }

  @media (max-width: 740px) {
    & .slick-slider {
      width: 85vw;
    }
  }

  @media (max-width: 530px) {
    & .slick-slider {
      width: 80vw;
    }
  }

  @media (max-width: 400px) {
    & .slick-slider {
      width: 78vw;
    }
  }
`;

export { SliderWrapper };
