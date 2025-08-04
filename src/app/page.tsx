import Nav from "@/components/custom/Nav";
import Hero from "@/components/custom/Hero";
import Features from "@/components/custom/Features";
import About from "@/components/custom/About";
import Team from "@/components/custom/Team";
import Portfolio from "@/components/custom/Portfolio";
import Testimonials from "@/components/custom/Testimonials";
import TrustedBrands from "@/components/custom/TrustedBrands";
import Pricing from "@/components/custom/Pricing";
import Blog from "@/components/custom/Blog";
import Contact from "@/components/custom/Contact";
import CTA from "@/components/custom/CTA";
import Footer from "@/components/custom/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* About Us Section */}
      <About />

      {/* Team Section */}
      <Team />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />
      {/* Trusted Brands Section */}
      <TrustedBrands />

      {/* Pricing Section */}
      <Pricing />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
