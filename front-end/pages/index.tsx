import Head from 'next/head';
import { GetStaticProps } from 'next';

import { API } from 'api';
// import { Restaurant } from 'api/restaurants/types';
import { CardsList } from 'components/cards-list';
import { Layout, siteTitle } from 'components/common';

const Home = ({ restaurants }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <CardsList restaurants={restaurants} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const restaurants = await API.restaurants.getRestaurants();

    return {
      props: {
        restaurants,
      },
      serverSide: true,
    };
  } catch (e) {
    console.error(e);

    return {
      props: { restaurants: {}, serverSide: true },
    };
  }
};

export default Home;
