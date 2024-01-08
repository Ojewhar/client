// reducers.js
import { combineReducers } from "redux";
import userReducer from "@/app/redux/states/user/userSlice";
import consultationCounterReducer from "@/app/redux/states/consultationCounter/consultationCounterSlice";
import telehealthConsultationReducer from "@/app/redux/states/telehealthConsultation/telehealthConsultationSlice";
import loginAccessTokenReducer from "@/app/redux/states/loginAccessToken/loginAccessTokenSlice";
import onboardReducer from "@/app/redux/states/onboardSlice/onboardSlice";
import formOneCertificateReducer from "../states/formOneCertificate/formOneCertificateSlice";

const rootReducer = combineReducers({
  user: userReducer,
  formOneCertificate: formOneCertificateReducer,
  telehealthConsultation: telehealthConsultationReducer,
  consultationCounter: consultationCounterReducer,
  loginAccessToken: loginAccessTokenReducer,
  onboard: onboardReducer,
});

export default rootReducer;
