import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AllCar } from '../../../services/carApi';

export const fetchAllCar = createAsyncThunk(
  'car/getAll',
  async (page, thunkAPI) => {
    try {
      const carList = await AllCar(page, 12);

      return carList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  carList: [],
  isLoading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carList = [...state.carList, ...action.payload];
      })
      .addCase(fetchAllCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carReducer = carSlice.reducer;
