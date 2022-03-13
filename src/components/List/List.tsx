import React from 'react';

import { cx } from '../../utils';

export interface ListProps {
  className?: string
  children?: React.ReactNode
}

export const List = ({ className, children }: ListProps) => (
  <ul className={cx('List', className)}>
    {children}
  </ul>
);
