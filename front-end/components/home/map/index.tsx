import { GoogleMap } from 'components/common';
import { Business } from 'api/businesses/types';

import { CardsList } from '../cards-list';

const Map = ({ businesses }: { businesses: Business[] }) => {
  return (
    <>
      <CardsList businesses={businesses} />
      <GoogleMap size="large" item={businesses} />
    </>
  );
};

export { Map };
