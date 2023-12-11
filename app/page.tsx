import Hero from "@/components/Hero/Hero";
import InTouch from "@/components/InTouch/InTouch";
import Navbar2 from "@/components/Navbar2/Navbar2";
import PartyHost from "@/components/PartyHost/PartyHost";
import Stats from "@/components/Stats/Stats";
import UpcomingDates from "@/components/UpcomingDates/UpcomingDates";

export default function Home() {
  return (
    <main>
      <Navbar2 />
      <div className="h-[65px] w-full"></div>
      <div
        className="absolute"
        // z-10
      >
        <Hero />
        <InTouch />
        <Stats />
        <PartyHost />
        <UpcomingDates />
      </div>
    </main>
  );
}
