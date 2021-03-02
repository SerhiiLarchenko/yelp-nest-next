import Image from 'next/image';

import { ReactComponent as StarSvg } from 'assets/icons/star.svg';

import { StyledCard, StyledStarSvg, StyledTitle } from './styles';

const Card = () => {
  return (
    <StyledCard>
      <Image
        src="/me.png"
        alt="Picture of the restaurant"
        width={80}
        height={80}
      />
      <StyledTitle>Title</StyledTitle>
      <StyledStarSvg />
      <StarSvg />
    </StyledCard>
  );
};

export { Card };
