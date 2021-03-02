import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

const LinkTo = ({
  as,
  href,
  scroll,
  locale,
  replace,
  shallow,
  children,
  prefetch,
  ...anchorProps
}: PropsWithChildren<LinkProps>) => {
  return (
    <Link {...{ href, as, replace, scroll, shallow, prefetch, locale }}>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <a {...anchorProps}>{children}</a>
    </Link>
  );
};

export { LinkTo };
