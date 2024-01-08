// certificate.js
import { createSlice } from "@reduxjs/toolkit";

const telehealthConsultationSlice = createSlice({
  name: "telehealthconsultation",
  initialState: {
    allvalues: [],
  },
  reducers: {
    addTelehealth: (state, action) => {
      state.allvalues = [...state.allvalues, action.payload];
    },
    removeTelehealth: (state, action) => {
      state.allvalues.pop();
    },
  },
});

export const { addTelehealth, removeTelehealth } =
  telehealthConsultationSlice.actions;
export default telehealthConsultationSlice.reducer;
