// url-manager.js
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-vercel-app.vercel.app"
    : "http://localhost:5000";
