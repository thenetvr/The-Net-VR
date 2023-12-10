import Hero from "@/components/Hero/Hero";
import InTouch from "@/components/InTouch/InTouch";
import PartyHost from "@/components/PartyHost/PartyHost";
import Stats from "@/components/Stats/Stats";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-[65px] w-full"></div>
      <Hero />
      <InTouch />
      <Stats />
      <PartyHost />
    </main>
  );
}
