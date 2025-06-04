import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChefHat, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

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

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 font-medium transition-colors duration-300 hover:text-accent ${
      isActive ? 'text-accent' : 'text-gray-800 dark:text-gray-100'
    } ${
      isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent' : ''
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-800 shadow-md py-2' : 'bg-transparent py-4'
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

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="hidden md:flex text-gray-800 dark:text-gray-100 focus:outline-none"
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <Link to="/devis" className="hidden md:block btn btn-primary">
            Demander un devis
          </Link>
        </div>

        <button
          className="md:hidden text-gray-800 dark:text-gray-100 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-800 z-40 transform transition-transform duration-300 ease-in-out ${
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
              className="text-gray-800 dark:text-gray-100 focus:outline-none"
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
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800 dark:text-gray-100'}`
              }
              onClick={closeMenu}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/formules"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800 dark:text-gray-100'}`
              }
              onClick={closeMenu}
            >
              Nos Formules
            </NavLink>
            <NavLink
              to="/galerie"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800 dark:text-gray-100'}`
              }
              onClick={closeMenu}
            >
              Galerie
            </NavLink>
            <NavLink
              to="/a-propos"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800 dark:text-gray-100'}`
              }
              onClick={closeMenu}
            >
              À Propos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 ${isActive ? 'text-accent font-semibold' : 'text-gray-800 dark:text-gray-100'}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>

          <div className="mt-auto space-y-4">
            <button
              onClick={toggleTheme}
              className="w-full flex justify-center items-center py-2 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
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