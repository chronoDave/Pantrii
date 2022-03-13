import React from 'react';

import { cx } from '../../utils';

import './Button.scss';

export type ButtonProps = React.ButtonHTMLAttributes<{
  className?: string
  children: React.ReactNode
}>;

export const Button = (props: ButtonProps) => {
  const {
    className,
    type,
    children,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={cx('Button', className)}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};
