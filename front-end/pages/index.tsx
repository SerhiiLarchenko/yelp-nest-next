import Head from 'next/head';
import { GetStaticProps } from 'next';

// import { API } from 'api';
import { Map } from 'components/home';
import { Layout, siteTitle } from 'components/common';
import { Business } from 'api/businesses/types';

const Home = ({ businesses }: { businesses: Business[] }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Map businesses={businesses} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mock = {
    categories: [
      {
        alias: 'd;askd',
        title: 'dlaskjd',
      },
    ],
    coordinates: {
      latitude: -34.397,
      longitude: 150.644,
    },
    id: 'dasd;sakd;lksajdlsa',
    image_url: '',
    name: 'Name',
    rating: 4,
    review_count: 1000,
  };

  try {
    // const businesses = await API.businesses.getAllBusinesses();
    const businesses = new Array(20).fill(mock);

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
