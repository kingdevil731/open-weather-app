import { createSlice } from '@reduxjs/toolkit';

interface stateProps {
  app: {
    city: string;
    isProcessing: boolean;
  };
}

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    city: localStorage.getItem('city') || '',
    isProcessing: false,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setIsProcessing: (state, action) => {
      state.isProcessing = action.payload;
    },
  },
});

// Selectors
export const isProcessing = (state: stateProps) => state.app.isProcessing;
export const city = (state: stateProps) => state.app.city;

// Actions
export const { setCity, setIsProcessing } = appSlice.actions;

// Reducer
export default appSlice.reducer;
