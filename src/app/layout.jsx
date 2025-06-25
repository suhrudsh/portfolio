import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { LenisProvider } from "@/components/LenisProvider";

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
    <html lang="en" className={satoshi.variable}>
      <body className="bg-background text-text font-satoshi">
        <Navbar />
        <LenisProvider>
          <main className="px-24">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
