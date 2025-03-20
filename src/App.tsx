import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./pages/Home";
import AboutPage from "./pages/About";
import BuisnessService from "./pages/Buisness";
import BlogPage from "./pages/Blog";
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
            <Route path="/BuisnessService" element={<BuisnessService />} />
            <Route path="/Blog" element={<BlogPage />} />
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
