import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../components';
import { decrementStockItem, incrementStockItem } from '../../redux';
import { StockItem as Item } from '../../types';

export interface StockItemProps {
  group?: string
  item: Item
}

export const StockItem = ({ group, item }: StockItemProps) => {
  const dispatch = useDispatch();

  const increment = () => dispatch(incrementStockItem({
    group,
    name: item.name,
    n: item.step ?? 1
  }));

  const decrement = () => dispatch(decrementStockItem({
    group,
    name: item.name,
    n: item.step ?? 1
  }));

  return (
    <li>
      <Button onClick={decrement}>
        -
      </Button>
      {item.name}
      {item.amount}
      <Button onClick={increment}>
        +
      </Button>
    </li>
  );
};
