import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
const space = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Medical Certificates Online | Only $19.95 | Real Aussie Doctors",
  description:
    "Medical Certificates Online | Only $19.95 | Real Aussie Doctors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <ReduxProvider>
          <Toaster />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
