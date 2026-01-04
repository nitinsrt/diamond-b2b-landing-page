import Hero from "../components/Hero";
import About from "../components/About";
import Process from "../components/Process";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroContainer from "@/components/HeroContainer";
import B2BInquiryForm from "@/components/B2BInquiryForm";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroContainer />
      <About />
      <Process />
      <Gallery />
      <B2BInquiryForm />
      <Footer />
    </main>
  );
}
