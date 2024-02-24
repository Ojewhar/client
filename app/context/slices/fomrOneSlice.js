// slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "form",
  initialState: {
    formOne: {},
  },
  reducers: {
    setFormOne: (state, action) => {
      state.formOne = action.payload;
    },
  },
});

export const { setFormOne } = authSlice.actions;
export default authSlice.reducer;
