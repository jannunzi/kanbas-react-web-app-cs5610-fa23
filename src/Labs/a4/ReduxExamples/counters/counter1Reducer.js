import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count1: 0,
};

const counter1Slice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment1: (state) => {
      state.count1++;
    },
    decrement1: (state) => {
      state.count1--;
    },
    setCount1: (state, action) => {
      state.count1 = action.payload;
    },
  },
});

export const { increment1, decrement1, setCount1 } = counter1Slice.actions;
export default counter1Slice.reducer;
