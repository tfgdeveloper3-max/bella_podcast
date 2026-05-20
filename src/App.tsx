import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Preloader from "./components/Preloader";
import AboutSection from "./components/aboutSection";
import DiscoverSection from "./components/discoverSection";
import TrendingSection from "./components/trendingSection";
import FooterSection from "./components/footerSection";
import CreatorsSection from "./components/creatorSection";
import CTASection from "./components/ctaSection";

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Navbar />
      <Hero />
      <AboutSection />
      <DiscoverSection />
      <TrendingSection />
      <CreatorsSection />
      <CTASection />
      <FooterSection />
    </>
  );
};

export default App;