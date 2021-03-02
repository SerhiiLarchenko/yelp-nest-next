import Head from 'next/head';
import { GetStaticProps } from 'next';

import { API } from 'api';
import { CardsList, Map } from 'components/home';
import { Layout, siteTitle } from 'components/common';
import { Business } from 'api/businesses/types';

const Home = ({ businesses }: { businesses: Business[] }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <CardsList businesses={businesses} />
      <Map coordinates={businesses.map(({ coordinates }) => coordinates)} />
    </Layout>
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
    };
  } catch (e) {
    console.error(e);

    return {
      props: { businesses: {}, serverSide: true },
    };
  }
};

export default Home;
