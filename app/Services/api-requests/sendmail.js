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

// patient login by magic link
export const sendLoginLink = async (passlessMail) => {
  const result = await axios.post(`${BASE_URL}/api/mail/sendLoginLink`, {
    email: passlessMail,
  });
  return result;
};

// send certificate active email
export const sendCertificateActiveMail = async (formData) => {
  const result = await axios.post(
    `${BASE_URL}/api/mail/sendCertificateActiveMail`,
    formData
  );
  return result;
};
// send certificate active email
export const sendCertificateRejectMail = async (formData) => {
  const access_token = accessToken();

  if (access_token !== null || access_token !== undefined || access_token) {
    const result = await axios.post(
      `${BASE_URL}/api/mail/sendCertificateRejectMail`,
      formData,
      {
        headers: {
          access_token: access_token,
        },
      }
    );
    return result;
  } else {
    return "You dont have jwt";
  }
};

// send certificate active email
export const sendMedicaleCertificateMail = async (formData) => {
  const result = await axios.post(
    `${BASE_URL}/api/mail/sendMedicaleCertificateMail`,
    formData
  );
  console.log(result);
  return result;
};
// send certificate active email
export const sendEmailOnlyUser = async (formData) => {
  const result = await axios.post(
    `${BASE_URL}/api/mail/sendEmailOnlyUser`,
    formData
  );
  console.log(result);
  return result;
};
