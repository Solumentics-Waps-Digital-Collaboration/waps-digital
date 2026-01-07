import HomeHero from "@/components/sections/home/HomeHero";
import Portfolio from "@/components/sections/home/Portfolio";
import Pricing from "@/components/sections/home/Pricing";
import TrustedPartners from "@/components/sections/home/TrustedPartners";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustedPartners />
      <Pricing />
      <Portfolio />
    </>
  )
}