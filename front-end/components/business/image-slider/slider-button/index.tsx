import { Icon } from 'components/common/icon';

interface SliderButtonProps {
  direction: 'left' | 'right';
  className: string;
  onClick(): void;
}

const SliderButton = ({
  direction,
  className,
  onClick,
}: Partial<SliderButtonProps>) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      <Icon icon={`chevron-${direction}`} />
    </button>
  );
};

export { SliderButton };
