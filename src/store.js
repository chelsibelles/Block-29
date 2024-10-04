// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { puppyBowlApi } from './api/puppyBowlApi';

export default configureStore({
  reducer: {
    // Integrate the puppyBowlApi reducer
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },
  // Add puppyBowlApi middleware for caching and other features
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
  // Enable Redux DevTools in development mode
  devTools: process.env.NODE_ENV !== 'production',
});
