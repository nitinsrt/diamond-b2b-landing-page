import Process from "../components/Process";
import Footer from "../components/Footer";
import HeroContainer from "@/components/HeroContainer";
import B2BInquiryForm from "@/components/B2BInquiryForm";
import DiamondsDealIn from "@/components/DiamondsDealIn";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroContainer />
      <Process />
      <DiamondsDealIn/>
      <B2BInquiryForm />
      <Footer />
    </main>
  );
}
