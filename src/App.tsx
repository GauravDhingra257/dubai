import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import BlogPage from "./pages/Blog";
import { ContactUs } from "./pages/Contact";
import BusinessBanner from "./components/BookApointmentComp";
import { useEffect } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAnConditionss from "./pages/TermsAnConditionss";
import Partners from "./pages/Partners";
import BlogAdmin from "./pages/BlogAdmin";

// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Layout>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/aboutUs" element={<AboutPage />} />
              <Route path="/business" element={<BuisnessService />} />
              <Route path="/mainservices" element={<MainServices />} />
              <Route path="/bankservices" element={<BankServices />} />
              <Route path="/visaservices" element={<VisaServices />} />
              <Route path="/liquidation" element={<CompanyLiquidation />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/calculate" element={<CalculateSetup />} />
              <Route path="/BuisnessService" element={<BuisnessService />} />
              <Route path="/Blog" element={<BlogPage />} />
              {/* <Route path="/contactus" element={<ContactUs />} /> */}
              <Route path="/book-appointment" element={<BusinessBanner />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAnConditionss />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/blogadmin" element={<BlogAdmin />} />
            </Routes>
          </Layout>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling
    });
  }, [location.pathname]);

  return <>{children}</>;
};

export default App;
