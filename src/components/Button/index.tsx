import * as React from 'react';
import { FC } from 'react';

type TProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const Button: FC<TProps> = ({ children, onClick }) => <button onClick={onClick}>{children}</button>;
