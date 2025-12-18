import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import { textVariants } from './variants/text-variants';

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

const Text = ({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) => {
  return React.createElement(
    as,
    { className: textVariants({ variant, className }), ...props },
    children,
  );
};

export default Text;
