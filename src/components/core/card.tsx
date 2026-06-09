import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const cardVariants = cva(
  'rounded-lg border flex items-center  border-base-400 bg-base-500',
  {
    variants: {
      size: {
        none: '',
        md: 'h-18 w-112.75  p-4',
      },
    },
    defaultVariants: {
      size: 'none',
    },
  },
)

interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<'div'> {
  as?: keyof React.JSX.IntrinsicElements
}
export default function Card({
  as = 'div',
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children,
  )
}
