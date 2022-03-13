import React from 'react';
import { useSelector } from 'react-redux';

import { Button, List } from '../../components';
import { StoreState } from '../../redux';

import { StockGroup } from './StockGroup';
import { StockItem } from './StockItem';

export const StockList = () => {
  const stockGroups = useSelector((state: StoreState) => state.stock.groups);

  return (
    <List>
      {Object.values(stockGroups).map(group => {
        if (group.name) return <StockGroup key={group.name} group={group} />;
        return Object.values(group.items).map(item => (
          <StockItem key={item.name} item={item} />
        ));
      })}
      <li>
        <Button>Add item +</Button>
      </li>
    </List>
  );
};
