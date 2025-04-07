import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import HeaderNav from "./Components/Header";
import Footer from "./Components/Footer";
import Galary from "./Pages/Galary";
import Events from "./Pages/Events";
import About from "./Components/About";
import Contact from "./Pages/Contact";
import Certification from "./Pages/Certificate";
import Media from "./Pages/Media";
import AnnualReport from "./Pages/Annual";
import AppAnnual from "./Pages/AppAnnual";
import WhyDonation from "./Components/Donate";
import Provision from "./Pages/80g_12a";
import Termsandcondition from "./Components/Termsandcondition";
import PrivacyandPolicy from "./Components/PrivacyandPolicy";

function App() {
  const location = useLocation();

  // Define routes where you want to hide header and footer
  const routesWithoutHeaderFooter = ["/annualreport"];

  // Function to check if current route should hide header and footer
  const shouldHideHeaderFooter = () => {
    return routesWithoutHeaderFooter.includes(location.pathname);
  };

  return (
    <>
      {!shouldHideHeaderFooter() && <HeaderNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certification />} />
        <Route path="/gallery" element={<Galary />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/annualreport" element={<AppAnnual />} />
        <Route path="/whydonation" element={<WhyDonation />} />
        <Route path="/provision" element={<Provision />} />
        <Route path="/terms" element={<Termsandcondition />} />
        <Route path="/privacy" element={<PrivacyandPolicy />} />
        
      </Routes>
      {!shouldHideHeaderFooter() && <Footer />}
    </>
  );
}

export default App;
