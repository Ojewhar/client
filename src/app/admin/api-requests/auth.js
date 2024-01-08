import { BASE_URL } from "@/app/admin/url-manager/url-manager";
import Cookies from "js-cookie";
import axios from "axios";

export const sendLoginLink = async (passlessMail) => {
  const result = await axios.post(`${BASE_URL}/api/auth/sendLoginLink`, {
    email: passlessMail,
  });
  return result;
};

// Verify login
export const verifyLogin = async (isToken) => {
  const result = await axios.post(
    `${BASE_URL}/api/auth/verifyLogin?token=${isToken}`
  );
  return result;
};
//
export const addPersonInfo = async (parsonData) => {
  const result = await axios.post(
    `${BASE_URL}/api/auth/addPersonInfo`,
    parsonData
  );
  return result;
};
