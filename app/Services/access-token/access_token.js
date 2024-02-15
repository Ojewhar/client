import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export const accessToken = () => {
  const token = Cookies.get("access_token");
  if (!token) {
    return null;
  } else {
    return token;
  }
};

export const decodeUser = () => {
  const token = accessToken();

  if (token) {
    const decoded = jwtDecode(token);
    return decoded;
  } else {
    return "Use dont have token";
  }
};
