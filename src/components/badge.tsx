import Text from '@/components/text';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

const badgeVariants = cva(
  'rounded-full inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-base-400',
      },
      size: {
        sm: 'py-0.5 px-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
);

const textBadgeVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-base-200! font-bold',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface BadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text className={textBadgeVariants({ variant })} as="p" variant="xs">
        {children}
      </Text>
    </div>
  );
};

export default Badge;
