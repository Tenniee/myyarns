import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Results from "./components/Results";
import Features from "./components/Features";
import SocialManagement from "./components/Socialmanagement";
import SchedulingSection from "./components/Schedulingsection";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Results />
      <Features />
      <SchedulingSection />
      <Reviews />
    </main>
  );
}
