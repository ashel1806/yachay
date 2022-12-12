import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state/authSlice';
import messageReducer from './state/messageSlice';
import themeReducer from './state/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messageReducer,
    theme: themeReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['auth/login', 'auth/register'],
      },
    }),
});
