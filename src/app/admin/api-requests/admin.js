import axios from "axios";
import { BASE_URL } from "../url-manager/url-manager";

// Login admin or doctor user
export const logintAdminUser = async (registerData) => {
  const result = await axios.post(
    `${BASE_URL}/api/admin/logintAdminUser`,
    registerData
  );
  return result;
};

// Register admin or doctor user
export const createAdminUser = async (loginData) => {
  const result = await axios.post(
    `${BASE_URL}/api/admin/createAdminUser`,
    loginData
  );
  return result;
};
