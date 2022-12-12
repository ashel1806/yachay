import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['auth/login', 'auth/register'],
      },
    }),
});
