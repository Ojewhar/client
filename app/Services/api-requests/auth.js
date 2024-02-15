import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../config/url-manager";
import { decodeUser } from "../access-token/access_token";

export const userRegister = async (userData) => {
  const result = await axios.post(`${BASE_URL}/api/auth/createUser`, userData);
  return result;
};

// user and admin login route
export const userLogin = async (userData) => {
  const result = await axios.post(`${BASE_URL}/api/auth/loginUser`, userData);
  if (result.data) {
    Cookies.set("access_token", result.data.jwt);
  }
  return result;
};

/// update user
export const updateSingleUser = async (user) => {
  const result = await axios.put(`${BASE_URL}/api/auth/updateUser/${user.id}`, {
    password: user.password,
  });
  return result;
};

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
