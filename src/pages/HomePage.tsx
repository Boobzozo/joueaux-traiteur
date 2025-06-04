import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, UtensilsCrossed } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="container-custom px-4 mx-auto relative z-10 mt-16">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Des moments de plaisir gastronomique
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Service traiteur d'exception pour tous vos événements. 
              De 10 à 300 personnes, nous créons des expériences culinaires inoubliables.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/devis" className="btn btn-primary">
                Demander un devis gratuit
              </Link>
              <Link to="/formules" className="btn bg-white text-gray-800 hover:bg-gray-100">
                Découvrir nos formules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-beige">
        <div className="container-custom px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-primary text-white mx-auto">
                <UtensilsCrossed size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-center mb-4">
                Cuisine Artisanale
              </h3>
              <p className="text-center text-gray-600">
                Des produits frais et locaux, préparés avec passion par nos chefs pour offrir une expérience gustative exceptionnelle.
              </p>
            </div>

            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-secondary text-white mx-auto">
                <Users size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-center mb-4">
                Service Personnalisé
              </h3>
              <p className="text-center text-gray-600">
                Une équipe attentive à vos besoins pour créer un événement unique qui vous ressemble et ravit vos invités.
              </p>
            </div>

            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-accent text-white mx-auto">
                <Calendar size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-center mb-4">
                Flexibilité Totale
              </h3>
              <p className="text-center text-gray-600">
                Des formules adaptables à tous types d'événements, du plus intime au plus grandiose, selon vos envies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Formulas */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="title mb-4">Nos Formules Populaires</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos formules les plus appréciées par nos clients. Des solutions adaptées à chaque occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFormulas.map((formula, index) => (
              <div
                key={formula.id}
                className="card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <img
                    src={formula.image}
                    alt={formula.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{formula.title}</h3>
                  <p className="text-gray-600 mb-4">{formula.description}</p>
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

          <div className="text-center mt-12">
            <Link to="/formules" className="btn btn-primary">
              Voir toutes nos formules
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-texture bg-fixed bg-cover">
        <div className="bg-white bg-opacity-90 py-16">
          <div className="container-custom px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="title mb-4">Ce que disent nos clients</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des retours authentiques de clients satisfaits après avoir fait confiance à Jouaux Traiteur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card p-8 animate-slide-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center text-primary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                        className={i < testimonial.rating ? 'text-primary' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-light">
        <div className="container-custom px-4 mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl mb-8 md:mb-0">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Prêt à organiser votre événement ?
              </h2>
              <p className="text-lg text-gray-600">
                Laissez-nous créer une expérience culinaire sur mesure pour vous et vos invités.
                Demandez votre devis gratuit dès maintenant.
              </p>
            </div>
            <div>
              <Link to="/devis" className="btn btn-primary whitespace-nowrap">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Sample data
const featuredFormulas = [
  {
    id: '1',
    title: 'Cocktail Dînatoire',
    description: 'Une sélection de pièces élégantes pour un événement où vos invités pourront se déplacer librement.',
    startingPrice: 25,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Buffet Champêtre',
    description: 'Des produits frais et de saison, présentés sous forme de buffet généreux et convivial.',
    startingPrice: 30,
    image: 'https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'Menu Prestige',
    description: 'Une expérience gastronomique complète avec service à table pour vos événements les plus raffinés.',
    startingPrice: 45,
    image: 'https://images.pexels.com/photos/5175537/pexels-photo-5175537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const testimonials = [
  {
    name: 'Sophie Martin',
    event: 'Mariage, Juin 2024',
    text: 'Un service impeccable et une cuisine délicieuse qui a ravi tous nos invités. Merci à toute l\'équipe pour avoir rendu notre jour si spécial.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Thomas Dubois',
    event: 'Anniversaire d\'entreprise, Mars 2024',
    text: 'Professionnalisme et qualité au rendez-vous. Nos collaborateurs parlent encore des délicieux plats servis lors de notre événement.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Marie Lefort',
    event: 'Baptême, Mai 2024',
    text: 'Une équipe à l\'écoute et des plats savoureux qui s\'adaptent parfaitement à nos demandes spécifiques. Je recommande vivement !',
    rating: 4,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default HomePage;