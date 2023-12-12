import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/Hero/Hero";
import InTouch from "@/components/InTouch/InTouch";
import MiniGalary from "@/components/MiniGalary/MiniGalary";
import Navbar from "@/components/Navbar/Navbar";
import PartyHost from "@/components/PartyHost/PartyHost";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
import UpcomingDates from "@/components/UpcomingDates/UpcomingDates";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InTouch />
      <Stats />
      <PartyHost />
      <UpcomingDates />
      <WhatWeDo />
      <MiniGalary />
      <ContactUs />
      <Testimonials />
    </main>
  );
}
