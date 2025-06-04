import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Users, ArrowRight } from 'lucide-react';
import { getFormulaById, formulas } from '../data/formulas';

const FormulaDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const formula = getFormulaById(id || '');
  const otherFormulas = formulas.filter(f => f.id !== id).slice(0, 3);

  useEffect(() => {
    if (!formula) {
      navigate('/formules');
      return;
    }

    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [formula, navigate]);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-8 w-full max-w-6xl px-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!formula) {
    return null; // We'll navigate away in the useEffect
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === formula.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? formula.gallery.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container-custom px-4 mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-accent">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/formules" className="hover:text-accent">Formules</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{formula.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Gallery */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg h-80 md:h-96 bg-gray-100">
                <img
                  src={formula.gallery[currentImageIndex]}
                  alt={`${formula.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300"
                  aria-label="Image suivante"
                >
                  <ChevronLeft size={24} className="transform rotate-180" />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {formula.gallery.length}
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {formula.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`overflow-hidden rounded-md h-20 ${
                      index === currentImageIndex
                        ? 'ring-2 ring-accent'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${formula.title} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <h1 className="title mb-2">{formula.title}</h1>
                <div className="flex items-center text-gray-700">
                  <Users size={18} className="mr-2" />
                  <span>Pour {formula.minPeople} personnes minimum</span>
                </div>
              </div>
              
              <div className="text-2xl font-semibold">
                À partir de {formula.pricePerPerson}€ par personne
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700">{formula.description}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <Link
                  to="/devis"
                  className="btn btn-primary w-full sm:w-auto justify-center"
                >
                  Demander un devis pour cette formule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formula Details */}
      <section className="section bg-beige">
        <div className="container-custom px-4 mx-auto">
          <h2 className="subtitle mb-8">Contenu de la formule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formula.details.appetizers && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-4">Entrées & Mises en bouche</h3>
                <ul className="space-y-2">
                  {formula.details.appetizers.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {formula.details.mains && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-4">Plats principaux</h3>
                <ul className="space-y-2">
                  {formula.details.mains.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {formula.details.pieces && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-4">Pièces cocktail</h3>
                <ul className="space-y-2">
                  {formula.details.pieces.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {formula.details.sides && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-4">Accompagnements</h3>
                <ul className="space-y-2">
                  {formula.details.sides.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {formula.details.desserts && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-4">Desserts</h3>
                <ul className="space-y-2">
                  {formula.details.desserts.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {formula.details.drinks && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-4">Boissons</h3>
                <ul className="space-y-2">
                  {formula.details.drinks.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Options */}
          {formula.options && formula.options.length > 0 && (
            <div className="mt-12">
              <h2 className="subtitle mb-6">Options supplémentaires</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="divide-y divide-gray-200">
                  {formula.options.map((option, index) => (
                    <li key={index} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div>
                          <h4 className="font-semibold text-lg">{option.title}</h4>
                          <p className="text-gray-600">{option.description}</p>
                        </div>
                        <div className="mt-2 sm:mt-0">
                          <span className="font-semibold text-lg text-accent">
                            {option.price > 0 ? `+${option.price}€` : 'Inclus'}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Formulas */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <h2 className="subtitle mb-8">Autres formules qui pourraient vous intéresser</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherFormulas.map((relatedFormula) => (
              <div key={relatedFormula.id} className="card">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={relatedFormula.image}
                    alt={relatedFormula.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{relatedFormula.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{relatedFormula.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      À partir de {relatedFormula.startingPrice}€
                    </span>
                    <Link
                      to={`/formules/${relatedFormula.id}`}
                      className="flex items-center text-accent hover:text-accent-dark transition-colors duration-300"
                    >
                      <span className="mr-1">Voir détails</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/formules" className="btn btn-secondary">
              Voir toutes nos formules
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-light">
        <div className="container-custom px-4 mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl mb-8 md:mb-0">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="text-lg text-gray-600">
                Laissez-nous vous accompagner dans l'organisation de votre événement.
                Demandez un devis personnalisé ou contactez-nous pour plus d'informations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-secondary whitespace-nowrap">
                Nous contacter
              </Link>
              <Link to="/devis" className="btn btn-primary whitespace-nowrap">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormulaDetailPage;