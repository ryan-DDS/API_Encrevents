import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import EventBar from "@/components/sections/eventbar";
import Events from "@/components/sections/events";
import Artists from "@/components/sections/artists";
import More from "@/components/sections/more";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <EventBar/>
      <Events/>
      <Artists/>
      <More/>
      <Footer/>
    </div>
  );
}