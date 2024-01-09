// url-manager.js
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://server-psi-eight-67.vercel.app"
    : "http://localhost:5000";
