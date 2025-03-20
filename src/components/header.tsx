import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/home/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("business"); // Default active page
  const navigate = useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Business", href: "buisness", id: "business" },
    { name: "Services", href: "mainservices", id: "services" },
    { name: "Blog", href: "blog", id: "blog" },
    { name: "About us", href: "aboutUs", id: "about" },
    { name: "Contact us", href: "contact", id: "contact" },
  ];

  return (
    <header className="bg-gray-400 w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo}
            onClick={() => {setActivePage("");navigate('/')}} 
            alt="HA Group Logo" 
            className="h-12 w-auto hover:cursor-pointer"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <a 
                // href={item.href} 
                className={`text-black font-medium hover:text-gray-700 hover:cursor-pointer ${activePage === item.id ? 'border-b-2 border-black pb-1' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.href);
                  setActivePage(item.id);
                }}
              >
                {item.name}
              </a>
              {activePage === item.id && (
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                  <div className="rotate-180 w-0 h-0 border-l-4 border-r-4 border-t-4 border-t-black border-l-transparent border-r-transparent" />
                </div>
              )}
            </div>
          ))}
          <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition hover:cursor-pointer" onClick={() => navigate('/book-appointment')}>
            Book Appointment
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-400 px-4 pb-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <a 
                  className={`text-black font-medium hover:text-gray-700 ${activePage === item.id ? 'font-bold' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage(item.id);
                    setIsMenuOpen(false);
                    navigate(item.href);
                    setActivePage(item.id);
                  }}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <button className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition w-full hover:cursor-pointer" onClick={() => navigate('/book-appointment')}>
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;