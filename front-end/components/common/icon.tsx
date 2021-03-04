import React from 'react';

// Common Icon
import { ReactComponent as LogoIcon } from 'public/icons/logo.svg';
import { ReactComponent as StarIcon } from 'public/icons/star.svg';
import { ReactComponent as ClockIcon } from 'public/icons/clock.svg';
import { ReactComponent as HomeIcon } from 'public/icons/home.svg';
import { ReactComponent as SmartphoneIcon } from 'public/icons/smartphone.svg';
import { ReactComponent as ViewIcon } from 'public/icons/view.svg';
import { ReactComponent as YelpIcon } from 'public/icons/yelp.svg';
import { ReactComponent as ArrowLeft } from 'public/icons/arrow-left.svg';
import { ReactComponent as ChevronLeft } from 'public/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'public/icons/chevron-right.svg';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'logo':
      return <LogoIcon />;
    case 'star':
      return <StarIcon />;
    case 'clock':
      return <ClockIcon />;
    case 'home':
      return <HomeIcon />;
    case 'smartphone':
      return <SmartphoneIcon />;
    case 'view':
      return <ViewIcon />;
    case 'yelp':
      return <YelpIcon />;
    case 'arrow-left':
      return <ArrowLeft />;
    case 'chevron-left':
      return <ChevronLeft />;
    case 'chevron-right':
      return <ChevronRight />;

    default:
      return <span />;
  }
};

export const Icon = ({
  icon,
  onClick,
  className,
}: {
  icon: string;
  onClick?: () => void;
  className?: string;
}) => {
  return React.cloneElement(getIcon(icon), {
    onClick,
    className: className ? `${icon}-icon ${className}` : `${icon}-icon`,
  });
};
