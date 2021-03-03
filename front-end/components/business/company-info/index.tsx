import { v4 as uuidv4 } from 'uuid';

import { TransactionLabel } from 'components/common/labels';
import { OpenButton } from 'components/common/buttons';
import { Icon } from 'components/common/icon';
import { LinkTo, Rating } from 'components/common';
import { ExtendedBusiness } from 'api/businesses/types';

import { weekDays } from './helpers';
import * as S from './styles';

const CompanyInfo = ({
  business: {
    url,
    name,
    phone,
    rating,
    location,
    categories,
    review_count,
    transactions,
    display_phone,
    working_hours,
  },
}: {
  business: ExtendedBusiness;
}) => (
  <S.Container>
    <S.Header>
      <LinkTo href="/">
        <Icon icon="arrow-left" />
      </LinkTo>

      <h1>{name}</h1>
      <S.RatingWrapper>
        <Rating rating={rating} />
        <S.RatingNumber>{rating.toFixed(1)}</S.RatingNumber>
        <span>({review_count})</span>
      </S.RatingWrapper>

      <S.Categories>
        {categories.map(({ title }) => title).join(', ')}
      </S.Categories>
    </S.Header>

    <S.ServiceInfo>
      <S.ServiceInfoItem>
        <Icon icon="home" />
        <S.Address title={location.display_address}>
          {location.display_address}
        </S.Address>
        <S.TransactionsList>
          {transactions.map((item) => (
            <TransactionLabel key={uuidv4()}>{item}</TransactionLabel>
          ))}
        </S.TransactionsList>
      </S.ServiceInfoItem>
      <S.ServiceInfoItem>
        <Icon icon="smartphone" />
        <a href={`tel:${phone}`}>{display_phone || 'No phone'}</a>
      </S.ServiceInfoItem>
      <S.ServiceInfoItem>
        <Icon icon="clock" />
        <S.WorkingHours>
          {working_hours.map(
            ({ end, start, days }) =>
              `${start} - ${end} (${days
                .map((day) => weekDays[day])
                .join(', ')})`
          )}
        </S.WorkingHours>
      </S.ServiceInfoItem>
    </S.ServiceInfo>

    <OpenButton as="a" href={url} target="_blank" iconPosition="left">
      <Icon icon="yelp" />
      <span>Open on Yelp</span>
    </OpenButton>
  </S.Container>
);

export { CompanyInfo };
