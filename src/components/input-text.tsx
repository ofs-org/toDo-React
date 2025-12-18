import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

const inputTextVariants = cva(
  'base-gray-500 text-base-300 border-transparent outline-none',
  {
    variants: {
      variant: {
        md: 'p-4 w-112.75 h-13.5 hover:border-purple-dark! hover:placeholder:text-base-100 transition-all bg-base-500 border rounded-lg border-base-300!',
      },
    },
    defaultVariants: {
      variant: 'md',
    },
  },
);

interface inputTextProps
  extends React.ComponentProps<'input'>,
    VariantProps<typeof inputTextVariants> {
  className?: string;
}

const InputText = ({ className, ...props }: inputTextProps) => {
  return (
    <input
      className={inputTextVariants({ className })}
      type="text"
      {...props}
    />
  );
};

export default InputText;
