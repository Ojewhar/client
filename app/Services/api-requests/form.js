import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../config/url-manager";
import { accessToken } from "../access-token/access_token";
import { sendFromAndToEmail } from "./sendmail";

export const getFormOne = async () => {
  const access_token = accessToken();

  if (access_token !== null || access_token !== undefined || access_token) {
    const result = await axios.get(`${BASE_URL}/api/form/getFormOne`, {
      headers: {
        access_token: access_token,
      },
    });
    return result;
  } else {
    return "You dont have jwt";
  }
};
export const getAllFormData = async () => {
  const access_token = accessToken();

  if (access_token !== null || access_token !== undefined || access_token) {
    const result = await axios.get(`${BASE_URL}/api/form/getAllFormData`, {
      headers: {
        access_token: access_token,
      },
    });
    return result;
  } else {
    return "You dont have jwt";
  }
};

// Access token routes
export const createFormOne = async (formData) => {
  try {
    const result = await axios.post(
      `${BASE_URL}/api/form/createFormOne`,
      formData
    );
    if (formData.ifOther) {
      const userData = {
        toemail: formData.firstFormEmail,
        subject: "Certnow form confirmation",
        message:
          "Your form is submited but its in under review . Now you can login your account using email and password . we will confirm sortly",
      };
      await sendFromAndToEmail(userData);
    } else {
      const userData = {
        toemail: formData.firstFormEmail,
        subject: "Certnow form confirmation",
        message:
          "Your form is submited and its aproved . Now you can login your account using email and password",
      };
      await sendFromAndToEmail(userData);
    }
    return result;
  } catch (error) {
    return error;
  }
};
