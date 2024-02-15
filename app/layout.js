import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Layouts/ThemeProvider";
import "react-phone-input-2/lib/bootstrap.css";
import ToastProvider from "./Shared/ToastProvider";
import "react-datepicker/dist/react-datepicker.css";

import ReduxWrapper from "./ReduxWrapper";
const poppins = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Certnow",
  description:
    "Bulkee is an application facilitating streamlined connections between resellers and brands, aiming to simplify order management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider />
          <ReduxWrapper>{children}</ReduxWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
