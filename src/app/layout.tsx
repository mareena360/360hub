import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/ui/Preloader"; const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.360degreehub.ae'),
  title: "360° Degree Hub | Company Formation, Tax Advisory & Audit UAE",
  description: "Premium business consultancy in the UAE offering comprehensive 360° solutions, including company formation, corporate tax advisory, accounting, and professional audit services in Dubai.",
  keywords: [
    "company formation UAE",
    "business setup Dubai",
    "corporate tax advisory UAE",
    "audit services UAE",
    "accounting services Dubai",
    "business consultancy UAE",
    "mainland company formation",
    "freezone business setup",
    "360 degree hub consultancy"
  ],
  authors: [{ name: "360° Degree Hub" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.360degreehub.ae",
    title: "360° Degree Hub | Company Formation, Tax Advisory & Audit UAE",
    description: "Premium business consultancy in the UAE offering comprehensive 360° solutions, including company formation, corporate tax advisory, accounting, and professional audit services in Dubai.",
    siteName: "360° Degree Hub",
    images: [{
      url: "/logo.svg",
      width: 1200,
      height: 630,
      alt: "360° Degree Hub Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "360° Degree Hub | Company Formation, Tax Advisory & Audit UAE",
    description: "Premium business consultancy in the UAE offering comprehensive 360° solutions, including company formation, corporate tax advisory, accounting, and professional audit services in Dubai.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "https://www.360degreehub.ae",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "360° Degree Hub",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
