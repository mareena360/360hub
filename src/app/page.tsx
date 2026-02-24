import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Strengths from "@/components/sections/Strengths";
import Services from "@/components/sections/Services";
import TargetAudience from "@/components/sections/TargetAudience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar logoPath="/logo.png" />
      <Hero />
      <Strengths />
      <Services />
      <TargetAudience />
      <Contact />
      <Footer />
    </main>
  );
}
