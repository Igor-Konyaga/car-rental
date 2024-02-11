import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './car/carReducer';


export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
