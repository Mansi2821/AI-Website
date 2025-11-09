import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import Expertise from "./components/Expertise";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import WhatDrives from "./components/WhatDrives";
import Testimonials from "./components/Testimonials";
import LatestInsights from "./components/LatestInsights";
import MeetOurExperts from "./components/MeetOurExperts";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <CompanyLogos />
      <Expertise />
      <WhyChooseUs />
      <Pricing />
      <WhatDrives />
      <Testimonials />
      <LatestInsights />
      <MeetOurExperts />
      <FAQ />
      <Footer />
    </div>
  );
}






