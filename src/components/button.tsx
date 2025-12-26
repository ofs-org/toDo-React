import Text from '@/components/text';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import Icon from './icon';

const buttonVariants = cva(
  ' flex items-center transition-all rounded-lg cursor-pointer p-4',
  {
    variants: {
      variant: {
        primary: 'bg-blue flex  hover:bg-blue-dark',
      },
      size: {
        md: 'w-22.5 h-13 gap-2',
      },
      disabled: {
        true: 'opacity-50  pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  },
);

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  icon?: React.ComponentProps<typeof Icon>['svg'];
}

const Button = ({
  variant,
  size,
  disabled,
  children,
  className,
  icon: IconComponent,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({
        variant,
        disabled,
        size,
        className,
      })}
      {...props}
    >
      <Text
        variant="sm"
        className="flex items-center font-bold text-base-100! justify-center"
      >
        {children}
      </Text>
      {IconComponent && <Icon className="fill-base-100" svg={IconComponent} />}
    </button>
  );
};

export default Button;
