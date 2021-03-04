import { GetStaticProps } from 'next';
import Head from 'next/head';

import { API } from 'api';
import { GoogleMap } from 'components/common';
import { CompanyInfo, Reviews, ImageSlider } from 'components/business';
import { ExtendedBusiness } from 'api/businesses/types';

import * as S from './styles';

const Business = ({ business }: { business: ExtendedBusiness }) => {
  return (
    <>
      <Head>
        <title>{business.name}</title>
      </Head>

      <S.InfoWrapper>
        <CompanyInfo business={business} />
        <Reviews reviews={business.reviews} />
      </S.InfoWrapper>

      <div>
        <ImageSlider photos={business.photos} />
        <GoogleMap size="small" item={business} />
      </div>
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
