import { TransactionLabel } from 'components/common/labels';
import { OpenButton } from 'components/common/buttons';
import { Icon } from 'components/common/icon';
import { Rating } from 'components/common';
import { format } from 'utils';
import { ExtendedBusiness } from 'api/businesses/types';

import * as S from './styles';

const CompanyInfo = ({
  business: { name, rating, review_count },
}: {
  business: ExtendedBusiness;
}) => (
  <S.Container>
    <div>
      <h1>{name}</h1>
      <Rating rating={rating} reviewCount={review_count} />
    </div>

    <S.ServiceInfo>
      <S.ServiceInfoItem>
        <Icon icon="home" />
        <S.Address title="205 E Houston St, New York, NY 10002">
          205 E Houston St, New York, NY 10002
        </S.Address>
        <TransactionLabel className="with-margin-right">
          Delivery
        </TransactionLabel>
        <TransactionLabel>Pickup</TransactionLabel>
      </S.ServiceInfoItem>
      <S.ServiceInfoItem>
        <Icon icon="smartphone" />
        <span>{format.telephoneUSAFormater('+16468860601')}</span>
      </S.ServiceInfoItem>
      <S.ServiceInfoItem>
        <Icon icon="clock" />
        <span>6am - 1am (All days)</span>
      </S.ServiceInfoItem>
    </S.ServiceInfo>

    <OpenButton iconPosition="left">
      <Icon icon="yelp" />
      <span>Open on Yelp</span>
    </OpenButton>
  </S.Container>
);

export { CompanyInfo };
