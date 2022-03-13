import React from 'react';

import { StockList } from './StockList';
import { StockSearch } from './StockSearch';

export const Stock = () => (
  <div className="Stock">
    <StockSearch />
    <StockList />
  </div>
);
