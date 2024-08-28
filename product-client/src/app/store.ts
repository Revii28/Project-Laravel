import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
