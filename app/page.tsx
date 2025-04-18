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
      {/* <SEO title="Home" />
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <LogoCloud />
        <Testimonials />
        <Contact />
      </main>
      <Footer /> */}
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Website Coming Soon
          </h1>
          <p className="text-xl text-gray-600">
            We&apos;re working on something exciting!
          </p>
        </div>
      </div>
    </>
  );
}
