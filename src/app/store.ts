import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/feedSlice';

export const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
