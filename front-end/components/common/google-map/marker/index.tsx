import { LinkTo } from 'components/common/link-to';
import * as S from './styles';
import { MarkerProps } from './types';

const Marker = ({ id, url, isCardHovered }: MarkerProps) => {
  return (
    <LinkTo href={`/business/${id}`}>
      <S.Marker url={url} isCardHovered={isCardHovered} />
    </LinkTo>
  );
};

export { Marker };
