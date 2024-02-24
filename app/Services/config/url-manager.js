// url-manager.js
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://server-psi-eight-67.vercel.app"
    : "http://localhost:5000";

// server
export const BASE_URL_CLIENT =
  process.env.NODE_ENV === "production"
    ? "https://certnow.com.au"
    : "http://localhost:3000/";
