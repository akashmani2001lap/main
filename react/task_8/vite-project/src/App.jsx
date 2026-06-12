import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
