import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Strengths from "@/components/sections/Strengths";
import Services from "@/components/sections/Services";
import TargetAudience from "@/components/sections/TargetAudience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "360° Degree Hub",
    "image": "https://www.360degreehub.ae/logo.svg",
    "description": "Comprehensive 360° solutions for company formation, tax advisory, and audit services in the UAE.",
    "url": "https://www.360degreehub.ae",
    "telephone": "+971 54 265 8225",
    "email": "info@360degreehub.ae",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <main className="min-h-screen">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar logoPath="/logo.svg" />
      <Hero />
      <Strengths />
      <Services />
      <TargetAudience />
      <Contact />
      <Footer />
    </main>
  );
}
