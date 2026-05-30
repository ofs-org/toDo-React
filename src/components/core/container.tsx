import type React from 'react'

interface ContainerProps extends React.ComponentProps<'main'> {}

const Container = ({ children }: ContainerProps) => {
  return (
    <article className="max-w-184 max-h-112.75 mx-auto">{children}</article>
  )
}

export default Container
