import { createSlice } from "@reduxjs/toolkit";

const loginAccessTokenSlice = createSlice({
  name: "loginAccessToken",
  initialState: {
    token: "",
  },
  reducers: {
    insertToken: (state, action) => {
      state.token.push(action.payload);
    },
  },
});
export const { insertToken } = loginAccessTokenSlice.actions;
export default loginAccessTokenSlice.reducer;
