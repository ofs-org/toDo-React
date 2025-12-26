import type React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <article className="max-w-184 max-h-112.75 mx-auto">{children}</article>
  );
};

export default Container;
