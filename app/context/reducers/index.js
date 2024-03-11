import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import brandReducer from "../slices/brandSlice";
import resellerReducer from "../slices/resellerSlice";
import consultationCounterReducer from "../states/consultationCounter/consultationCounterSlice";
import telehealthConsultationReducer from "../states/telehealthConsultation/telehealthConsultationSlice";
import loginAccessTokenReducer from "../states/loginAccessToken/loginAccessTokenSlice";
import onboardReducer from "../states/onboardSlice/onboardSlice";
import formOneCertificateReducer from "../states/formOneCertificate/formOneCertificateSlice";
import formOneReducer from "../slices/fomrOneSlice";
import downloadCertificateReducer from "../slices/downloadCertificateSlice";
import checkPaymentReducer from "../slices/checkPaymenteSlice";

const rootReducer = combineReducers({
  userInfo: userReducer,
  brandsInfo: brandReducer,
  resellerInfo: resellerReducer,
  formOneCertificate: formOneCertificateReducer,
  telehealthConsultation: telehealthConsultationReducer,
  consultationCounter: consultationCounterReducer,
  loginAccessToken: loginAccessTokenReducer,
  onboard: onboardReducer,
  fomrOneInfo: formOneReducer,
  downloadCertificate: downloadCertificateReducer,
  checkPayment:checkPaymentReducer
});

export default rootReducer;
