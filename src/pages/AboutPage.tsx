import React from 'react';
import { Star, Award, ThumbsUp, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-custom px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title mb-6">À Propos de Nous</h1>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez l'histoire et les valeurs qui font de Jouaux Traiteur
              un partenaire de confiance pour tous vos événements.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-display text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-700 mb-4">
                Fondée en 2010 par Jean et Marie Jouaux, notre entreprise est née d'une passion partagée pour la gastronomie 
                et l'art de recevoir. Après plusieurs années d'expérience dans la restauration haut de gamme, 
                nous avons décidé de mettre notre savoir-faire au service d'événements privés et professionnels.
              </p>
              <p className="text-gray-700 mb-4">
                Ce qui a commencé comme une petite entreprise familiale s'est rapidement développé grâce au bouche-à-oreille 
                et à notre engagement constant envers la qualité. Aujourd'hui, Jouaux Traiteur est fier de compter une équipe 
                de 15 professionnels passionnés, unis par les mêmes valeurs d'excellence et de créativité.
              </p>
              <p className="text-gray-700">
                Notre cuisine, située au cœur de la région, est équipée des installations les plus modernes pour garantir 
                la fraîcheur et la qualité de nos préparations, tout en conservant le caractère artisanal qui fait notre signature.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Notre équipe en cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Préparation culinaire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7438072/pexels-photo-7438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Service lors d'un événement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Présentation d'un buffet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-beige">
        <div className="container-custom px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Des principes qui guident chacune de nos actions et font la différence dans nos prestations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-center mb-3">Excellence</h3>
              <p className="text-gray-600 text-center">
                Nous ne transigeons jamais sur la qualité, depuis la sélection des ingrédients jusqu'au service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-secondary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-center mb-3">Créativité</h3>
              <p className="text-gray-600 text-center">
                Nous innovons constamment pour proposer des expériences culinaires uniques et mémorables.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
                <ThumbsUp className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-center mb-3">Fiabilité</h3>
              <p className="text-gray-600 text-center">
                Nous respectons nos engagements et accordons une attention méticuleuse à chaque détail.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-center mb-3">Passion</h3>
              <p className="text-gray-600 text-center">
                Nous mettons tout notre cœur dans chaque plat et chaque service pour satisfaire nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Des professionnels passionnés qui mettent leur talent et leur expertise à votre service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Jean Jouaux"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-1">Jean Jouaux</h3>
              <p className="text-accent font-medium mb-3">Chef Fondateur</p>
              <p className="text-gray-600">
                Fort de 20 ans d'expérience dans la gastronomie, Jean apporte sa rigueur et sa créativité à chaque menu.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Marie Jouaux"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-1">Marie Jouaux</h3>
              <p className="text-accent font-medium mb-3">Directrice Artistique</p>
              <p className="text-gray-600">
                Passionnée par l'art de la table, Marie veille à ce que chaque présentation soit aussi belle que savoureuse.
              </p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Thomas Laurent"
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-1">Thomas Laurent</h3>
              <p className="text-accent font-medium mb-3">Chef Pâtissier</p>
              <p className="text-gray-600">
                Maître dans l'art des desserts, Thomas crée des pièces d'exception qui ravissent les yeux et les papilles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-beige">
        <div className="container-custom px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Notre Approche</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un processus pensé pour répondre parfaitement à vos attentes et garantir la réussite de votre événement.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-light"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-12 mb-6 md:mb-0 md:text-right animate-slide-up">
                  <h3 className="font-display text-xl font-semibold mb-2">Consultation personnalisée</h3>
                  <p className="text-gray-600">
                    Nous commençons par comprendre vos besoins spécifiques, votre vision et vos contraintes pour adapter parfaitement notre offre.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                
                <div className="flex-1 md:pl-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <img
                    src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Consultation"
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row-reverse items-center">
                <div className="flex-1 md:pl-12 mb-6 md:mb-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <h3 className="font-display text-xl font-semibold mb-2">Élaboration du menu</h3>
                  <p className="text-gray-600">
                    Notre équipe crée une proposition sur mesure, en tenant compte de vos préférences, des saisons et de votre budget.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                
                <div className="flex-1 md:pr-12 md:text-right animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <img
                    src="https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Élaboration du menu"
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-12 mb-6 md:mb-0 md:text-right animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <h3 className="font-display text-xl font-semibold mb-2">Dégustation</h3>
                  <p className="text-gray-600">
                    Pour les événements importants, nous proposons une dégustation pour ajuster les saveurs selon vos retours.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                
                <div className="flex-1 md:pl-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <img
                    src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Dégustation"
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
              
              <div className="relative flex flex-col md:flex-row-reverse items-center">
                <div className="flex-1 md:pl-12 mb-6 md:mb-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <h3 className="font-display text-xl font-semibold mb-2">Exécution parfaite</h3>
                  <p className="text-gray-600">
                    Le jour J, notre équipe professionnelle s'occupe de tout, de la préparation au service, pour que vous puissiez profiter pleinement de votre événement.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="text-white font-bold">4</span>
                </div>
                
                <div className="flex-1 md:pr-12 md:text-right animate-slide-up" style={{ animationDelay: '0.7s' }}>
                  <img
                    src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Service lors d'un événement"
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              La satisfaction de nos clients est notre plus grande fierté.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-beige p-6 rounded-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "L'équipe de Jouaux Traiteur a dépassé toutes nos attentes pour notre mariage. Le menu était exquis, le service impeccable, et nos invités n'ont pas arrêté de nous complimenter sur la qualité de la nourriture."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sophie et Marc</h4>
                  <p className="text-gray-500 text-sm">Mariage, Juin 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-beige p-6 rounded-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Pour notre séminaire d'entreprise, nous cherchions un traiteur capable de s'adapter à diverses contraintes alimentaires tout en offrant un service de qualité. Jouaux Traiteur a relevé ce défi avec brio."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Thomas Dupont</h4>
                  <p className="text-gray-500 text-sm">Directeur Marketing, Entreprise XYZ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-beige p-6 rounded-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Troisième fois que nous faisons appel à Jouaux Traiteur pour nos événements familiaux, et toujours aussi satisfaits. Leur capacité à se renouveler tout en maintenant un niveau d'excellence constant est remarquable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Marie Lefort</h4>
                  <p className="text-gray-500 text-sm">Cliente fidèle depuis 2019</p>
                </div>
              </div>
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
                Prêt à créer un événement mémorable ?
              </h2>
              <p className="text-lg text-gray-600">
                Notre équipe est impatiente de vous accompagner dans la réalisation de votre projet.
                Contactez-nous dès maintenant pour échanger sur vos besoins.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn btn-secondary whitespace-nowrap">
                Nous contacter
              </a>
              <a href="/devis" className="btn btn-primary whitespace-nowrap">
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;