import { createSlice } from '@reduxjs/toolkit';
import { mainSliceState } from '../interfaces';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    empty: true,
    timeZone: '',
    currentWeather: {},
    dailyWeather: [],
    isLoading: true,
  },
  reducers: {
    setIsEmpty: (state, action) => {
      state.empty = action.payload;
    },
    setTimeZone: (state, action) => {
      state.timeZone = action.payload;
    },
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setDailyWeather: (state, action) => {
      state.dailyWeather = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Selectors
export const isEmpty = (state: mainSliceState) => state.main.empty;
export const timeZone = (state: mainSliceState) => state.main.timeZone;
export const currentWeather = (state: mainSliceState) =>
  state.main.currentWeather;
export const dailyWeather = (state: mainSliceState) => state.main.dailyWeather;
export const isLoading = (state: mainSliceState) => state.main.isLoading;

// Actions
export const {
  setIsEmpty,
  setTimeZone,
  setCurrentWeather,
  setDailyWeather,
  setIsLoading,
} = mainSlice.actions;

// Reducer
export default mainSlice.reducer;
