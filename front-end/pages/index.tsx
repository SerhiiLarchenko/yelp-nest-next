import Head from 'next/head';
import { GetStaticProps } from 'next';

import { API } from 'api';
import { Map } from 'components/home';
import { Business } from 'api/businesses/types';
import { REVALIDATION_TIME } from 'config/styles/limits';

const Home = ({ businesses }: { businesses: Business[] }) => {
  return (
    <>
      <Head>
        <title>Restaurants - The Catalog</title>
      </Head>

      <Map businesses={businesses} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const businesses = await API.businesses.getAllBusinesses();

    return {
      props: {
        businesses,
        serverSide: true,
      },
      revalidate: REVALIDATION_TIME,
    };
  } catch (e) {
    console.error(e);

    return {
      props: { businesses: {}, serverSide: true },
      revalidate: REVALIDATION_TIME,
    };
  }
};

export default Home;
