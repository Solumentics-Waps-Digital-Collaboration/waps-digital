import Contact from "@/components/sections/home/Contact";
import FAQ from "@/components/sections/home/FAQ";
import HomeHero from "@/components/sections/home/HomeHero";
import Portfolio from "@/components/sections/home/Portfolio";
import Pricing from "@/components/sections/home/Pricing";
import Process from "@/components/sections/home/Process";
import TrustedPartners from "@/components/sections/home/TrustedPartners";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustedPartners />
      <Pricing />
      <Portfolio />
      <Process />
      <FAQ />
      <Contact />
    </>
  )
}