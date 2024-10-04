import { createSlice } from "@reduxjs/toolkit";

export const isTokenExistSlice = createSlice({
    name: 'isTokenExist',
    initialState: {
        value: false,
    },
    reducers: {
        setIsTokenExist: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setIsTokenExist } = isTokenExistSlice.actions

export default isTokenExistSlice.reducer