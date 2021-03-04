import { GetStaticProps } from 'next';
import Head from 'next/head';

import { API } from 'api';
import { GoogleMap } from 'components/common';
import { CompanyInfo, Reviews, ImageSlider } from 'components/business';
import { ExtendedBusiness } from 'api/businesses/types';

const Business = ({ business }: { business: ExtendedBusiness }) => {
  return (
    <S.BusinessWrapper>
      <Head>
        <title>{business.name}</title>
      </Head>

      <CompanyInfo business={business} />
      <Reviews reviews={business.reviews} />

      <S.SliderMapWrapper>
        <ImageSlider photos={business.photos} />
        <GoogleMap size="small" item={business} />
      </S.SliderMapWrapper>
    </S.BusinessWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const businesses = await API.businesses.getAllBusinesses();
    const matched = businesses.find((business) => business.id === params?.id);

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
