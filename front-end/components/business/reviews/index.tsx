import { OpenButton } from 'components/common/buttons';
import { Icon } from 'components/common/icon';
import { ReviewComment } from 'components/common/review-comment';

import * as S from './styles';

const Reviews = () => (
  <S.Container>
    <S.Title>Top Reviews</S.Title>

    <div>
      <ReviewComment />
    </div>

    <OpenButton iconPosition="right">
      <span>Show All Reviews</span>
      <Icon icon="view" />
    </OpenButton>
  </S.Container>
);

export { Reviews };
