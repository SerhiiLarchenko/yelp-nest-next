import { Rating } from '../rating';
import * as S from './styles';
import { ReviewProps } from './types';

const ReviewComment = ({ user, text, rating, timeCreated }: ReviewProps) => {
  const { image_url: imageUrl, name } = user;

  return (
    <S.Container>
      <S.UserInfo>
        <S.Avatar src={imageUrl} />
        <S.Column>
          <S.NickName>{name}</S.NickName>

          <S.RatingWrapper>
            <Rating rating={rating} />
            <S.CreationDate>{timeCreated}</S.CreationDate>
          </S.RatingWrapper>
        </S.Column>
      </S.UserInfo>
      <p>{text}</p>
    </S.Container>
  );
};

export { ReviewComment };
