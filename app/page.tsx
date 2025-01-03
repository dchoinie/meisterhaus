import Hero from "./custom_components/home/hero";
import About from "./custom_components/home/about";
import Rooms from "./custom_components/home/rooms";
import LogoCloud from "./custom_components/home/logoCloud";
import Contact from "./custom_components/home/contact";
import Header from "./layout/header";
import Footer from "./layout/footer";
import SEO from "./custom_components/seo";
import Testimonials from "./custom_components/home/testimonials";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Header
        position="absolute"
        textColor="text-primary-100"
        textColorHover="text-white"
      />
      <main>
        <Hero />
        <About />
        <Rooms />
        <LogoCloud />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
