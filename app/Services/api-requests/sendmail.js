import Cookies from "js-cookie";
import axios from "axios";
import { accessToken } from "../access-token/access_token";
import { BASE_URL } from "../config/url-manager";

// send confirmation mail user and admin
export const sendFromAndToEmail = async (userData) => {
  const result = await axios.post(
    `${BASE_URL}/api/mail/sendEmailAdminAndUser`,
    userData
  );
  return result;
};
// send confirmation mail user and admin
export const sendMailUserOnly = async (userData) => {
  const token = accessToken();

  if (token !== null || token !== undefined || token) {
    const result = await axios.post(
      `${BASE_URL}/api/mail/sendEmailOnlyUser`,
      userData,
      {
        headers: {
          access_token: token,
        },
      }
    );

    return result;
  }
};

// Send mail for recover password
export const sendEmailForRecover = async (userEmail) => {
  const result = await axios.post(`${BASE_URL}/api/mail/recoverPasswordLink`, {
    email: userEmail,
  });

  return result;
};
