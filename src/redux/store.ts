import { configureStore } from '@reduxjs/toolkit';

import stockReducer from './slices/stock.slice';

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    stock: stockReducer
  }
});
