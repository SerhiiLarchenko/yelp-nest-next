import { GetStaticProps } from 'next';
import Head from 'next/head';
import { REVALIDATION_TIME } from 'config/styles/limits';

import { API } from 'api';
import { GoogleMap } from 'components/common';
import { CompanyInfo, Reviews, ImageSlider } from 'components/business';
import { ExtendedBusiness } from 'api/businesses/types';
import { BusinessWrapper, SliderMapWrapper } from 'components/common/wrappers';

const Business = ({ business }: { business: ExtendedBusiness }) => {
  return (
    <BusinessWrapper>
      <Head>
        <title>{`Restaurants - ${business.name}`}</title>
      </Head>

      <CompanyInfo business={business} />
      <Reviews url={business.url} reviews={business.reviews} />

      <SliderMapWrapper>
        <ImageSlider photos={business.photos} />
        <GoogleMap size="small" item={business} />
      </SliderMapWrapper>
    </BusinessWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const businesses = await API.businesses.getAllBusinesses();
    const matched = businesses.find((business) => business.id === params?.id);

    const business = await API.businesses.getBusiness(matched?.id);

    return {
      props: { business, serverSide: true },
      revalidate: REVALIDATION_TIME,
    };
  } catch (e) {
    console.error(e);

    return {
      props: { business: {}, serverSide: true },
      revalidate: REVALIDATION_TIME,
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
