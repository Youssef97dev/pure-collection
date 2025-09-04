import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Pure Collection Marrakech",
  description: "Pure Collection Marrakech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
