import Cookies from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../config/url-manager";
import { accessToken } from "../access-token/access_token";
import {
  sendCertificateActiveMail,
  sendMedicaleCertificateMail,
} from "./sendmail";

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

export const acceptSinglePatientForm = async (id, status) => {
  const access_token = accessToken();
  if (access_token !== null || access_token !== undefined || access_token) {
    const result = await axios.put(
      `${BASE_URL}/api/form/updateSinglePatient/${id}`,
      {
        status: status,
      },
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
        fullname: formData.firstFormFName + " " + formData.firstFormLName,
      };
      await sendMedicaleCertificateMail(userData);
    } else {
      const userData = {
        toemail: formData.firstFormEmail,
        fullname: formData.firstFormFName + " " + formData.firstFormLName,
      };
      await sendCertificateActiveMail(userData);
    }
    return result;
  } catch (error) {
    return error;
  }
};
