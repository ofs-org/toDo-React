import { cva, type VariantProps } from 'class-variance-authority'
import type React from 'react'
import Text from '@/components/text'
import Skeleton from './skeleton'

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
)

const textBadgeVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-base-200! font-bold',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface BadgeProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof badgeVariants> {
  loading?: boolean
}

const Badge = ({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) => {
  if (loading) {
    return <Skeleton rounded="full" className="w-5 h-5" />
  }
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text className={textBadgeVariants({ variant })} as="p" variant="xs">
        {children}
      </Text>
    </div>
  )
}

export default Badge
