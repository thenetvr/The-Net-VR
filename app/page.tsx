import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-[65px] w-full"></div>
      <Hero />
    </main>
  );
}
