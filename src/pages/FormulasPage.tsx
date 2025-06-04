import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formulas, Formula } from '../data/formulas';

const categories = [
  { id: 'all', label: 'Toutes les formules' },
  { id: 'cocktail', label: 'Cocktails' },
  { id: 'buffet', label: 'Buffets' },
  { id: 'menu', label: 'Menus' },
  { id: 'special', label: 'Événements spéciaux' },
];

const FormulasPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredFormulas, setFilteredFormulas] = useState<Formula[]>(formulas);
  const [visibleFormulas, setVisibleFormulas] = useState<Formula[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    const filtered = activeCategory === 'all' 
      ? formulas 
      : formulas.filter(formula => formula.category === activeCategory);
    
    setFilteredFormulas(filtered);
    
    // Simulate loading for smoother transitions
    setTimeout(() => {
      setVisibleFormulas(filtered);
      setIsLoading(false);
    }, 300);
  }, [activeCategory]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-custom px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title mb-6">Nos Formules</h1>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez notre sélection de formules adaptées à tous types d'événements. 
              Des cocktails aux repas complets, nous proposons des solutions sur mesure 
              pour ravir vos invités et faire de votre événement un moment mémorable.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Formulas Grid */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="card animate-pulse">
                  <div className="h-56 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : visibleFormulas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleFormulas.map((formula, index) => (
                <div
                  key={formula.id}
                  className="card animate-slide-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="h-56 bg-gray-200 relative overflow-hidden">
                    <img
                      src={formula.image}
                      alt={formula.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {formula.popular && (
                      <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Populaire
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{formula.title}</h3>
                    <p className="text-gray-600 mb-4">{formula.shortDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">
                        À partir de {formula.startingPrice}€
                      </span>
                      <Link
                        to={`/formules/${formula.id}`}
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">Aucune formule trouvée</h3>
              <p className="text-gray-600 mb-6">
                Nous n'avons pas trouvé de formules correspondant à cette catégorie.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="btn btn-primary"
              >
                Voir toutes les formules
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-light">
        <div className="container-custom px-4 mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl mb-8 md:mb-0">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Besoin d'aide pour choisir ?
              </h2>
              <p className="text-lg text-gray-600">
                Vous ne savez pas quelle formule conviendrait le mieux à votre événement ? 
                Notre équipe est là pour vous conseiller et créer une offre sur mesure.
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

export default FormulasPage;