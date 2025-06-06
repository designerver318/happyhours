
import { AboutUs } from "@/MyComponents/About";
import WhyChooseUs from "@/MyComponents/Choose";
import Glimpse from "@/MyComponents/Glimpse";
import Hero from "@/MyComponents/Hero";
import Statistics from "@/MyComponents/Stats";



export default function Home() {
  return (
    <main className="text-4xl font-bold text-center">
      <Hero />
      <AboutUs />
      <Statistics />
      <Glimpse />
      <WhyChooseUs />
    </main>
  );
}
