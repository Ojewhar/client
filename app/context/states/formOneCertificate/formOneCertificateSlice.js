import { createSlice } from '@reduxjs/toolkit';

const formOneCertificateSlice = createSlice({
  name: 'certificateone',
  initialState: {
    alldata: [],
  },
  reducers: {
    addFormOne: (state, action) => {
      const { index, payload } = action.payload;
      if (!state.alldata[index]) {
        state.alldata.push(payload);
      } else {
        state.alldata[index] = payload;
      }
    },
    removeFromOne: (state) => {
      state.alldata.pop();
    },
  },
});

export const { addFormOne, removeFromOne } = formOneCertificateSlice.actions;
export default formOneCertificateSlice.reducer;
