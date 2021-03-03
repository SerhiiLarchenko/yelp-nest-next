import { GetStaticProps } from 'next';

import { API } from 'api';
import { CompanyInfo, Reviews } from 'components/business';
import { ExtendedBusiness } from 'api/businesses/types';

const Business = ({ business }: { business: ExtendedBusiness }) => {
  return (
    <>
      <CompanyInfo business={business} />
      <Reviews />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  try {
    const businesses = await API.businesses.getAllBusinesses();
    const matched = businesses.find((business) => business.id === id);

    const business = await API.businesses.getBusiness(matched?.id);

    return {
      props: { business, serverSide: true },
      revalidate: 3600,
    };
  } catch (e) {
    console.error(e);

    return {
      props: { business: {}, serverSide: true },
      revalidate: 3600,
    };
  }
};

export async function getStaticPaths() {
  try {
    const businesses = await API.businesses.getAllBusinesses();
    const paths = businesses.map(({ id }) => ({
      params: { id },
    }));

    return { paths, fallback: false };
  } catch (e) {
    console.error(e);

    return { paths: [], fallback: false };
  }
}

export default Business;
