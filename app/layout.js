import { Inter } from "next/font/google";
import "./globals.css";
import ToastifyNotifications from "./components/ToastifyNotifications";
import { AuthProvider } from "./Provider";
import Providers from "./Providers";
import { Redux } from "./redux/providers";
import { headers } from 'next/headers';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Portfolio Generator",
  description: "Show off your skills with just one click",
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const header_url = headersList.get('next-url') || "";
  return (
    <>
      {header_url == "/template1" ? (
        <html lang="en">
          <body className="main-content body" suppressHydrationWarning={true}>
            <AuthProvider>
              <Redux>{children}</Redux>
            </AuthProvider>
          </body>
        </html>
      ) : header_url == "/template5" ? (
        <html lang="en">
          <body className="bodyy" suppressHydrationWarning={true}>
            <AuthProvider>
              <Redux>{children}</Redux>
            </AuthProvider>
          </body>
        </html>
      ) : (
        <html lang="en">
          <body className="dark:bg-[#0b1120]" suppressHydrationWarning={true}>
            <Providers>
              <AuthProvider>
                <Redux>{children}</Redux>
              </AuthProvider>
              <ToastifyNotifications />
            </Providers>
          </body>
        </html>
      )}
    </>
  );
}
