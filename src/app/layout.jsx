import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LenisProvider } from "@/components/LenisProvider";
import { Footer } from "@/components/Footer";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "Suhrud Shringarputale | Creative Developer for Design Teams",
  description:
    "Suhrud is a creative developer who started out in design. He turns ambitious designs into working websites, with motion, interactive 3D and brand detail intact.",
  keywords: [
    "Suhrud",
    "Creative Developer",
    "Frontend Developer",
    "React",
    "Three.js",
    "GSAP",
    "3D on the Web",
    "Motion Design",
    "WebGL",
  ],
  openGraph: {
    title: "Suhrud Shringarputale | Creative Developer for Design Teams",
    description:
      "Suhrud is a creative developer who started out in design. He turns ambitious designs into working websites, with motion, interactive 3D and brand detail intact.",
    url: "https://suhrud.vercel.app", // Replace with your live domain
    siteName: "Suhrud Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists in public/
        width: 1200,
        height: 630,
        alt: "Preview of Suhrud's Portfolio Website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhrud Shringarputale | Creative Developer for Design Teams",
    description:
      "Suhrud is a creative developer who started out in design. He turns ambitious designs into working websites, with motion, interactive 3D and brand detail intact.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "u304_7CdBdOcMSuCcrJ-0yOPWhVNgOu3_X6atMLMf8Y", // Replace after adding site to Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="bg-background text-text font-satoshi">
        <Navbar />
        <LenisProvider>
          <main className="px-6 lg:px-16 xl:px-24">{children}</main>
        </LenisProvider>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
