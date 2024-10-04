import { configureStore } from '@reduxjs/toolkit';
import isTokenExistReducer from './isTokenExistSlice';
import isAuthReducer from './utils/helpers/isAuthSlice';

export default configureStore({
  reducer: {
    isAuth: isAuthReducer,
    isTokenExist: isTokenExistReducer,
  },
});
