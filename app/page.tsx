import Hero from "@/components/Hero/Hero";
import InTouch from "@/components/InTouch/InTouch";
import PartyHost from "@/components/PartyHost/PartyHost";
import Stats from "@/components/Stats/Stats";
import UpcomingDates from "@/components/UpcomingDates/UpcomingDates";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-[65px] w-full"></div>
      <div id="home-container" className="absolute z-10">
        <Hero />
        <InTouch />
        <Stats />
        <PartyHost />
        <UpcomingDates />
      </div>
    </main>
  );
}
