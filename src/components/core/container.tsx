import type React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-360 mx-auto">{children}</div>;
};

export default Container;
