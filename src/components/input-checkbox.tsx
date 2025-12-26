import CheckIcon from '@/assets/checkIcon.svg?react';
import Icon from '@/components/icon';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import Skeleton from './skeleton';

const inputCheckBoxWrapperVariant = cva(
  `inline-flex items-center  justify-center cursor-pointer relative group`,
);

const inputCheckBoxVariants = cva(
  `appearance-none peer flex items-center justify-center border-2 transition hover:border-blue-dark  checked:bg-purple-dark group-hover:border-blue-dark border-blue rounded-full overflow-hidden checked:hover:bg-purple`,
  {
    variants: {
      size: {
        sm: 'w-5 h-5',
      },
      disabled: {
        true: 'pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      size: 'sm',
      disabled: false,
    },
  },
);

const inputCheckBoxIconVariants = cva(
  ` absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-base-100`,
  {
    variants: {
      size: {
        md: 'w-3 h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface InputCheckBoxProps
  extends VariantProps<typeof inputCheckBoxVariants>,
    Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {
  loading?: boolean;
}

const InputCheckBox = ({
  size,
  disabled,
  className,
  loading,
  ...props
}: InputCheckBoxProps) => {
  if (loading) {
    return (
      <Skeleton rounded="full" className={inputCheckBoxVariants({ size })} />
    );
  }
  return (
    <label className={inputCheckBoxWrapperVariant({ className })}>
      <input
        className={inputCheckBoxVariants({ size, disabled })}
        type="checkbox"
        {...props}
      />
      <Icon className={inputCheckBoxIconVariants()} svg={CheckIcon} />
    </label>
  );
};

export default InputCheckBox;
