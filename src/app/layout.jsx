import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { LenisProvider } from "@/components/LenisProvider";
import { Footer } from "@/components/Footer";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "Suhrud | Multidisciplinary Designer",
  description:
    "Suhrud is a multidisciplinary designer blending 3D, web, and UX to build interactive and meaningful experiences.",
  keywords: [
    "Suhrud",
    "Designer",
    "UX Design",
    "Frontend Developer",
    "3D on the Web",
    "Motion Design",
    "WebGL",
    "Portfolio",
  ],
  openGraph: {
    title: "Suhrud | Multidisciplinary Designer",
    description:
      "Suhrud is a designer and developer crafting immersive web experiences at the intersection of design and code.",
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
    title: "Suhrud | Multidisciplinary Designer",
    description:
      "Portfolio of Suhrud – designer and frontend developer focused on 3D and interactive experiences.",
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
      </body>
    </html>
  );
}
