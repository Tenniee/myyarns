import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Results from "./components/Results";
import Features from "./components/Features";
import SocialManagement from "./components/Socialmanagement";
import SchedulingSection from "./components/Schedulingsection";
import Reviews from "./components/Reviews";
import Insighttips from "./components/Insighttips";
import Pricing from "./components/Pricing";
import CTASection from "./components/Ctasection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Results />
      <Features />
      <SocialManagement />
      <SchedulingSection />
      <Reviews />
      <Insighttips />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
