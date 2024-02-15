// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const consultationCounterSlice = createSlice({
  name: 'consultationCounter',
  initialState: {
    count: 0,
  },
  reducers: {
    consultationIncrement: (state) => {
      state.count += 1;
    },
    consultationDecrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { consultationIncrement, consultationDecrement } = consultationCounterSlice.actions;
export default consultationCounterSlice.reducer;
