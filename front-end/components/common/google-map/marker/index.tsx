import { LinkTo } from 'components/common/link-to';
import * as S from './styles';
import { MarkerProps } from './types';

const Marker = ({ id, url, isCardHovered }: MarkerProps) => {
  return (
    <LinkTo href={`/business/${id}`}>
      <S.OuterMarker isCardHovered={isCardHovered}>
        <S.InnerMarker url={url} />
      </S.OuterMarker>
    </LinkTo>
  );
};

export { Marker };
