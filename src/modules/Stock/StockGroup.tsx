import React from 'react';

import { List } from '../../components';
import { StockGroup as Group } from '../../types';

import { StockItem } from './StockItem';

export interface StockGroupProps {
  group: Group
}

export const StockGroup = ({ group }: StockGroupProps) => (
  <li>
    {group.name}
    <List>
      {Object.values(group.items).map(item => (
        <StockItem key={item.name} item={item} />
      ))}
    </List>
  </li>
);
