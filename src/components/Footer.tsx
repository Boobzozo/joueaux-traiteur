import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container-custom px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ChefHat size={36} className="text-primary" />
              <span className="font-display text-2xl font-bold">Jouaux Traiteur</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Service traiteur d'exception pour tous vos événements.
              De 10 à 300 personnes, nous créons des moments de plaisir gastronomique.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-display text-xl mb-4 font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/formules" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Nos Formules
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/devis" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Demande de Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-display text-xl mb-4 font-semibold">Nos Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-primary transition-colors duration-300">Cocktails</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-300">Repas Chauds</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-300">Buffets</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-300">Mariages</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-300">Événements d'Entreprise</li>
              <li className="text-gray-300 hover:text-primary transition-colors duration-300">Fêtes Privées</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-display text-xl mb-4 font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Rue de la Gastronomie<br />
                  75000 Paris, France
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:contact@jouauxtraiteur.fr" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  contact@jouauxtraiteur.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jouaux Traiteur. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors duration-300">
              Mentions Légales
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors duration-300">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors duration-300">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;