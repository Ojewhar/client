import { BASE_URL } from "@/app/admin/url-manager/url-manager";
import Cookies from "js-cookie";
import axios from "axios";

export const access_token = () => {
  const token = Cookies.get("access_token");
  if (!token) {
    return null;
  } else {
    return token;
  }
};
