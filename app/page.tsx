import Hero from "./custom_components/home/hero";
import About from "./custom_components/home/about";
import Rooms from "./custom_components/home/rooms";
import LogoCloud from "./custom_components/home/logoCloud";
import Contact from "./custom_components/home/contact";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Rooms />
        <LogoCloud />
        <Contact />
      </main>
    </div>
  );
}
