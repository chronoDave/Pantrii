import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StockGroup, StockItem } from '../../types';

export interface StockState {
  groups: {
    default: StockGroup,
    [key: string]: StockGroup
  }
}

const initialState: StockState = {
  groups: {
    default: {
      items: {
        eggs: {
          name: 'Eggs',
          amount: 3
        }
      }
    }
  }
};

export const slice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ group?: string, item: StockItem }>) => {
      const { group, item } = action.payload;

      const key = item.name.toLocaleLowerCase();

      state.groups[group || 'default'].items[key] = item;
    },
    removeItem: (state, action: PayloadAction<{ group?: string, name: string }>) => {
      const { group, name } = action.payload;

      const key = name.toLocaleLowerCase();

      delete state.groups[group || 'default'].items[key];
    },
    incrementItem: (
      state,
      action: PayloadAction<{
        group?: string,
        name: string,
        n: number
      }>
    ) => {
      const { group, name, n } = action.payload;

      const key = name.toLocaleLowerCase();

      state.groups[group || 'default'].items[key].amount += n;
    },
    decrementItem: (
      state,
      action: PayloadAction<{
        group?: string,
        name: string,
        n: number
      }>
    ) => {
      const { group, name, n } = action.payload;

      const key = name.toLocaleLowerCase();
      const amount = Math.max(0, state.groups[group || 'default'].items[key].amount - n);

      state.groups[group || 'default'].items[key].amount = amount;
    }
  }
});

export const {
  addItem: addStockItem,
  removeItem: removeStockItem,
  incrementItem: incrementStockItem,
  decrementItem: decrementStockItem
} = slice.actions;

export default slice.reducer;
