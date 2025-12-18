import Text from '@/components/text';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

const buttonVariants = cva('rounded-lg cursor-pointer px-4 py-4', {
  variants: {
    variant: {
      primary: 'bg-blue',
    },
    size: {
      md: 'w-22.5 h-13',
    },
    desabilitado: {
      true: 'opacity-50  cursor-not-allowed! pointer-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    desabilitado: false,
  },
});

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = ({
  variant,
  size,
  desabilitado,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, desabilitado, size, className })}
      {...props}
    >
      <Text
        variant="sm"
        className="flex items-center font-bold text-base-100! justify-center gap-2"
      >
        {children}
      </Text>
    </button>
  );
};

export default Button;
