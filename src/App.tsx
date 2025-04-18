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
import BusinessBanner from "./components/BookApointmentComp";
import { useEffect, useState } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAnConditionss from "./pages/TermsAnConditionss";
import Partners from "./pages/Partners";
import BlogAdmin from "./pages/BlogAdmin";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "./Constants/config";
import { useBlogStore } from "./store/store";
import { getApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

// Import other pages as needed

function App() {
  const blogs = useBlogStore((state) => state.blogs);
  const setBlogs = useBlogStore((state) => state.setBlogs);
  useEffect(() => {
    if (blogs.length === 0) {
      (async () => {
        const db = getFirestore(getApp());
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogPost = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))?.filter(blog=>(blog?.visible=="true" || blog?.visible==true));
        setBlogs(blogPost);
      })();
    }
  }, []);
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
              <Route path="/blogadmin" element={    <ProtectedRoute>
      <BlogAdmin />
    </ProtectedRoute>} />
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



const ProtectedRoute = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!authed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-80">
          <h2 className="text-xl mb-4 font-bold">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-2 p-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return children;
};
export default App;
