import Head from 'next/head';
import { ReactNode } from 'react';

import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';

import { StyledHeader, StyledMain } from './styles';

const siteTitle = 'Project Demo';

const Layout = ({ children }: { children: ReactNode }) => {
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StyledHeader>
        <LogoSvg />
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export { Layout, siteTitle };
