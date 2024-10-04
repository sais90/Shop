import { createSlice } from '@reduxjs/toolkit';

export const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState: {
    value: null,
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsAuth } = isAuthSlice.actions;

export default isAuthSlice.reducer;
