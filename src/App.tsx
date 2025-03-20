import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./pages/Home";
import AboutPage from "./pages/About";
import BankServices from "./pages/MainServices/BankServices";
import VisaServices from "./pages/MainServices/VisaServices";
import MainServices from "./components/BuisnessServices/AccountsAndBook";
import BuisnessService from "./pages/MainServices/BusinessSetup";
import CompanyLiquidation from "./pages/MainServices/CompanyLiquidation";
import ContactPage from "./pages/Contact";
import CalculateSetup from "./pages/MainServices/CalculateSetup";
// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/aboutUs" element={<AboutPage />} />
            <Route path="/buisness" element={<BuisnessService />} />
            <Route path="/mainservices" element={<MainServices />} />
            <Route path="/bankservices" element={<BankServices />} />
            <Route path="/visaservices" element={<VisaServices />} />
            <Route path="/liquidation" element={<CompanyLiquidation />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/calculate" element={<CalculateSetup />} />
            {/* Add more routes as needed */}
            {/* Example:
            
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> 
            */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
