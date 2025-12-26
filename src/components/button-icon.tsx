import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import Icon from './icon';
import Skeleton from './skeleton';

const buttonIconVariants = cva(
  'inline-flex items-center justify-center cursor-pointer transition-all group  ',
  {
    variants: {
      variant: {
        primary:
          'fill-base-300 border-transparent hover:fill-danger border hover:bg-base-400',
      },

      size: {
        sm: 'w-6 h-6   rounded-sm',
      },
      disabled: {
        false: '',
        true: 'opacity-90 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
      disabled: false,
    },
  },
);

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<'button'>, 'size' | 'disabled'> {
  icon: React.ComponentProps<typeof Icon>['svg'];
  loading?: boolean;
}

const ButtonIcon = ({
  size,
  disabled,
  className,
  icon,
  loading,
  ...props
}: ButtonIconProps) => {
  if (loading) {
    return <Skeleton className={buttonIconVariants({ size, className })} />;
  }
  return (
    <button
      className={buttonIconVariants({ size, disabled, className })}
      {...props}
    >
      <Icon svg={icon} />
    </button>
  );
};

export default ButtonIcon;
