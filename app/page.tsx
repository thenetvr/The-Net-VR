import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Influencer from "@/components/Influencer/Influencer";
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
import { Metadata } from "next";
import TheTeam from "@/components/TheTeam/TheTeam";

const appTitle = "The Net VR";
// for SEO customization
export const metadata: Metadata = {
  title: appTitle,
  description: `${appTitle}: A digital space for the future of live stream`,
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
    other: {
      rel: "/images/icon.png",
      url: "/images/icon.png",
    },
  },
  manifest: "/manifest.json",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main-content">
        <Hero />
        <Influencer />
        <InTouch />
        <Stats />
        <PartyHost />
        <UpcomingDates />
        <TheTeam />
        <WhatWeDo />
        <MiniGalary />
        <Testimonials />
        <News />
        <ContactUs />
        <Footer />
      </div>
      <Background />
      <SecondBG />
    </main>
  );
}
