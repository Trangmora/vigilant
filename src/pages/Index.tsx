import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import Challenge from "@/components/Challenge";
import CaseStudies from "@/components/CaseStudies";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Team from "@/components/Team";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionStatement />
      <Challenge />
      <CaseStudies />
      <Solution />
      <Features />
      <Team />
    </main>
  );
};

export default Index;