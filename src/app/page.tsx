import Header from "./components/Header";
import Hero from "./components/Hero";
import SeenAt from "./components/SeenAt";
import Spots from "./components/Spots";
import HowItWorks from "./components/HowItWorks";
import AboutMarc from "./components/AboutMarc";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SeenAt />
      <Spots />
      <HowItWorks />
      <AboutMarc />
      <FAQ />
      <Footer />
    </main>
  );
}
