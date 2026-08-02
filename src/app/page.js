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
import Integration from "./components/Integration";
import ChatWidget from "./components/ChatWidget";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <Marquee />
      </Reveal>

      <Reveal>
        <Results />
      </Reveal>

      <Reveal>
        <Features />
      </Reveal>

      <Reveal>
        <SocialManagement />
      </Reveal>

      <Reveal>
        <SchedulingSection />
      </Reveal>

      <Reveal>
        <Reviews />
      </Reveal>

      <Reveal>
        <Insighttips />
      </Reveal>

      <Reveal>
        <Integration />
      </Reveal>
      
      <Reveal>
        <Pricing />
      </Reveal>
      
      <Reveal>
        <CTASection />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>

      <ChatWidget />
    </main>
  );
}
