import { PropsWithChildren } from 'react';
import Head from 'next/head';

import { LinkTo } from '../link-to';

const siteTitle = 'Project Demo';

const Layout = ({ children, home }: PropsWithChildren<{ home: boolean }>) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Project Demo" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <h1>Home</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <LinkTo href="/">← Back to home</LinkTo>
        </div>
      )}
    </>
  );
};

export { Layout, siteTitle };
