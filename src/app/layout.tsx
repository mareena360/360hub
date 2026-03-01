import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/ui/Preloader"; const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://360degreehub.ae'),
  title: "360° Degree Hub | Premium Consultancy UAE",
  description: "Comprehensive 360° solutions for company formation, tax advisory, and audit services in the UAE.",
  keywords: ["company formation UAE", "tax advisory Dubai", "audit services UAE", "business setup Dubai", "360 degree hub consultancy"],
  authors: [{ name: "360° Degree Hub" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://360degreehub.ae",
    title: "360° Degree Hub | Premium Consultancy UAE",
    description: "Comprehensive 360° solutions for company formation, tax advisory, and audit services in the UAE.",
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
    title: "360° Degree Hub | Premium Consultancy UAE",
    description: "Comprehensive 360° solutions for company formation, tax advisory, and audit services in the UAE.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "https://360degreehub.ae",
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
