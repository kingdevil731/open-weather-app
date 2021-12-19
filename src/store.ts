import { configureStore } from '@reduxjs/toolkit';
// Reducers
import appReducer from './redux/appSlice';
import mainReducer from './redux/mainSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    main: mainReducer,
  },
});
