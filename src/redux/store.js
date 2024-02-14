import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './car/carReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoriteCarsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favoriteCars'],
};

export const store = configureStore({
  reducer: {
    car: persistReducer(favoriteCarsPersistConfig, carReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
