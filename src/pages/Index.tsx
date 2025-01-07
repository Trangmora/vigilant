import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import Challenge from "@/components/Challenge";
import CaseStudies from "@/components/CaseStudies";
import Solution from "@/components/Solution";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionStatement />
      <Challenge />
      <CaseStudies />
      <Solution />
    </main>
  );
};

export default Index;