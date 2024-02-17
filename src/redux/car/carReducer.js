import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCar, getCars } from '../../../services/carApi';

export const fetchAllCar = createAsyncThunk(
  'car/getAllcar',
  async (_, thunkAPI) => {
    try {
      const carList = await getAllCar();

      return carList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCars = createAsyncThunk(
  'car/getCars',
  async (page, thunkAPI) => {
    try {
      const carList = await getCars(page, 12);

      return carList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  allCar: [],
  carList: [],
  favoriteCars: [],
  selectedValue: 'All cars',
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
    setSelectedValue(state, action) {
      state.selectedValue = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;

        state.carList = [...state.carList, ...action.payload];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCar.fulfilled, (state, action) => {
        state.isLoading = false;

        state.allCar = action.payload;
      })
      .addCase(fetchAllCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carReducer = carSlice.reducer;

export const { addFavoriteCar, deleteFavoriteCar, setPage, setSelectedValue } =
  carSlice.actions;
