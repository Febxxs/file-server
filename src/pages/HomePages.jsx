import HeroSection from "../components/home_pages/HeroSection";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import Features from "../components/home_pages/Features";
import HelpButton from "../components/ui/HelpButton";
import JoinComunity from "../components/home_pages/JoinComunity";

const HomePages = () => {
  return (
    <main className="relative">
      <Navigationbar />
      <HelpButton />
      {/* Background pattern div */}
      <div className="bg-pettern min-h-screen absolute top-0 left-0 right-0 z-0"></div>

      <div className="max-w-screen-xl w-full container mx-auto relative z-10">
        <HeroSection />
        <Features />
        <JoinComunity />
      </div>

      <Footer />
    </main>
  );
};

export default HomePages;
