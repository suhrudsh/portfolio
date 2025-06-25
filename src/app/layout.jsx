import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Suhrud Portfolio",
  description: "Multidisciplinary designer portfolio.",
};

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} bg-background text-text px-24`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
