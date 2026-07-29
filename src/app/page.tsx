import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { AudienceSplit } from "@/components/sections/AudienceSplit";
import { About } from "@/components/sections/About";
import { Offers } from "@/components/sections/Offers";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <AudienceSplit />
        <About />
        <Offers />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
