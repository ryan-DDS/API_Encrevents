import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Events from "@/components/sections/events";
import EventBar from "@/components/sections/eventbar";
import More from "@/components/sections/more";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <EventBar/>
      <Events/>
      <More/>
      <Footer/>
    </div>
  );
}