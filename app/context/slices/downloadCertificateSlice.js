import { createSlice } from "@reduxjs/toolkit";

const downloadCertificateSlice = createSlice({
  name: "auth",
  initialState: {
    certificate: null,
  },
  reducers: {
    setCertificateUser: (state, action) => {
      state.certificate = action.payload;
    },
  },
});

export const { setCertificateUser } = downloadCertificateSlice.actions;
export default downloadCertificateSlice.reducer;
