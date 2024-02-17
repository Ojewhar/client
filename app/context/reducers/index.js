import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import brandReducer from "../slices/brandSlice";
import resellerReducer from "../slices/resellerSlice";
import consultationCounterReducer from "../states/consultationCounter/consultationCounterSlice";
import telehealthConsultationReducer from "../states/telehealthConsultation/telehealthConsultationSlice";
import loginAccessTokenReducer from "../states/loginAccessToken/loginAccessTokenSlice";
import onboardReducer from "../states/onboardSlice/onboardSlice";
import formOneCertificateReducer from "../states/formOneCertificate/formOneCertificateSlice";

const rootReducer = combineReducers({
  userInfo: userReducer,
  brandsInfo: brandReducer,
  resellerInfo: resellerReducer,
  formOneCertificate: formOneCertificateReducer,
  telehealthConsultation: telehealthConsultationReducer,
  consultationCounter: consultationCounterReducer,
  loginAccessToken: loginAccessTokenReducer,
  onboard: onboardReducer,
});

export default rootReducer;