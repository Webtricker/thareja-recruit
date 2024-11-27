import type { Metadata } from "next";
// local font
import localFont from "next/font/local";

// global styles
import "./globals.css";

// import fonts

import BodyEventListeners from "@/components/DOM/BodyEventListeners";
import ReactToastifyMessage from "@/components/DOM/ReactToastifyMessage";
import CheckPrevUser from "@/components/shared/authentication/CheckPrevUser";
import ReduxProvider from "@/provider/reduxProvider";

const tharejaFont = localFont({
  src: [
    {
      path: "/fonts/TharejaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/TharejaSans-Regular.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/TharejaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/TharejaSans-Bold.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/TharejaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/TharejaSans-Light.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "/fonts/TharejaSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Thareja Ai",
  description:
    "Welcome to Thareja Ai, the ultimate platform for freelancers and clients to connect, collaborate, and succeed. Whether you are a skilled professional looking for flexible work opportunities or a business seeking top-notch talent, YourHub is your go-to destination.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${tharejaFont.className} h-full overflow-x-hidden overflow-y-auto`}
      >
        <ReduxProvider>
          {children}

          {/* ===== portal to show modals ====== */}
          <div className="w-full" id="modal_portal"></div>

          {/* ======== check if the user previously logged in the application ===== */}
          <CheckPrevUser />
          <BodyEventListeners />
        </ReduxProvider>
        <ReactToastifyMessage />
      </body>
    </html>
  );
}
