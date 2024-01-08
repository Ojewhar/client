import { BASE_URL } from "@/app/admin/url-manager/url-manager";
import Cookies from "js-cookie";
import axios from "axios";
import { access_token } from "../access-token/access_token";

export const getFormOne = async () => {
  const accessToken = access_token();

  if (accessToken !== null || accessToken !== undefined || accessToken) {
    const result = await axios.get(`${BASE_URL}/api/form/getFormOne`, {
      headers: {
        access_token: accessToken,
      },
    });
    return result;
  } else {
    return "You dont have jwt";
  }
};

// Access token routes
export const createFormOne = async (formData) => {
  const result = await axios.post(
    `${BASE_URL}/api/form/createFormOne`,
    formData
  );
  return result;
};
