import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allCar } from '../../../services/carApi';

export const fetchAllCar = createAsyncThunk(
  'car/getAll',
  async (page, thunkAPI) => {
    try {
      const carList = await allCar(page, 12);

      return carList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  carList: [],
  favoriteCars: [],
  page: 1,
  isLoading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState: INITIAL_STATE,
  reducers: {
    addFavoriteCar(state, action) {
      state.favoriteCars = [action.payload, ...state.favoriteCars];
    },
    deleteFavoriteCar(state, action) {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
    },
    setPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCar.fulfilled, (state, action) => {
        state.isLoading = false;

        state.carList = [...action.payload, ...state.carList];
      })
      .addCase(fetchAllCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carReducer = carSlice.reducer;

export const { addFavoriteCar, deleteFavoriteCar, setFavorite, setPage } =
  carSlice.actions;
