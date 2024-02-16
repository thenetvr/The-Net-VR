import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import InTouch from "@/components/InTouch/InTouch";
import MiniGalary from "@/components/MiniGalary/MiniGalary";
import Navbar from "@/components/Navbar/Navbar";
import News from "@/components/News/News";
import PartyHost from "@/components/PartyHost/PartyHost";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testimonials/Testimonials";
import UpcomingDates from "@/components/UpcomingDates/UpcomingDates";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import "./globals.css";
import Background from "@/components/Background/Background";
import SecondBG from "@/components/SecondBG/SecondBG";
import Carousel from "@/components/Carousel/Carousel";
import CarouselDisplay from "@/components/Carousel/CarouselDisplay";
import Welcome from "./Welcome/Welcome";


export default function Home() {

  return (
    <main>
      <Navbar />
      <div className="main-content">

        <Hero />
        <InTouch />
        <Stats />
        <PartyHost />
        <UpcomingDates />
        <WhatWeDo />
        <MiniGalary />
        <Testimonials />
        <News />
        <Welcome />
        <ContactUs />

        <Footer />

      </div>
      <Background />
      <SecondBG />
    </main>
  );
}
