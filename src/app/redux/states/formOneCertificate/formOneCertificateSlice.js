import { createSlice } from "@reduxjs/toolkit";

const formOneCertificateSlice = createSlice({
  name: "certificateone",
  initialState: {
    alldata: [],
  },
  reducers: {
    addFormOne: (state, action) => {
      state.alldata = [...state.alldata, action.payload];
      // state.alldata.push(action.payload);
    },
    removeFromOne: (state) => {
      state.alldata.pop();
    },
  },
});

export const { addFormOne, removeFromOne } = formOneCertificateSlice.actions;
export default formOneCertificateSlice.reducer;
