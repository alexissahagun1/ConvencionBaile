import localFont from "next/font/local";
import "./globals.css";

const madeSans = localFont({
  src: "./fonts/madeSans.woff",
  variable: "--font-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Motus Experience",
  description: "Motus Experience by Diana Matos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${madeSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
