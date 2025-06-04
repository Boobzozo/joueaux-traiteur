import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 font-medium transition-colors duration-300 hover:text-accent ${
      isActive ? 'text-accent' : 'text-gray-800'
    } ${
      isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent' : ''
    }`;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ChefHat size={36} className="text-accent" />
          <span className="font-display text-2xl font-bold">Jouaux Traiteur</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Accueil
          </NavLink>
          <NavLink to="/formules" className={navLinkClass}>
            Nos Formules
          </NavLink>
          <NavLink to="/galerie" className={navLinkClass}>
            Galerie
          </NavLink>
          <NavLink to="/a-propos" className={navLinkClass}>
            À Propos
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <Link to="/devis" className="hidden md:block btn btn-primary">
          Demander un devis
        </Link>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <ChefHat size={36} className="text-accent" />
              <span className="font-display text-2xl font-bold">Jouaux Traiteur</span>
            </Link>
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/formules"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Nos Formules
            </NavLink>
            <NavLink
              to="/galerie"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Galerie
            </NavLink>
            <NavLink
              to="/a-propos"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              À Propos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>

          <div className="mt-auto">
            <Link
              to="/devis"
              className="block w-full btn btn-primary text-center"
              onClick={closeMenu}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;