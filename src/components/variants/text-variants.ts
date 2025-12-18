import { cva } from 'class-variance-authority';

export const textVariants = cva('font-sans  inline-flex leading-[140%]', {
  variants: {
    variant: {
      xs: 'text-xs text-base-300',
      sm: 'text-sm text-base-300',
      md: 'text-base text-base-300',
    },
  },
  defaultVariants: {
    variant: 'md',
  },
});
