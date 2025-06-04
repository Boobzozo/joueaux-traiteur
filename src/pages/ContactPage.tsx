import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ce champ est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Ce champ est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Ce champ est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Ce champ est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-custom px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title mb-6">Contactez-Nous</h1>
            <p className="text-lg text-gray-700 mb-8">
              Une question, une demande spécifique ou besoin d'informations supplémentaires ?
              Notre équipe est à votre disposition pour vous répondre dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-beige rounded-lg p-8 h-full">
                <h2 className="font-display text-2xl font-semibold mb-6">Nos Coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <MapPin size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-gray-700">
                        123 Rue de la Gastronomie<br />
                        75000 Paris, France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
                        <Phone size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+33123456789" className="hover:text-accent transition-colors duration-300">
                          +33 1 23 45 67 89
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                        <Mail size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:contact@jouauxtraiteur.fr" className="hover:text-accent transition-colors duration-300">
                          contact@jouauxtraiteur.fr
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <Clock size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Horaires</h3>
                      <p className="text-gray-700">
                        Lundi - Vendredi: 9h - 18h<br />
                        Samedi: 10h - 16h<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-accent transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-accent transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-accent transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-500\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">Message envoyé avec succès !</h2>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary"
                  >
                    Envoyer un nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="font-display text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Votre nom et prénom"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="votre.email@exemple.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="Objet de votre message"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="Écrivez votre message ici..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer mon message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-beige">
        <div className="container-custom px-4 mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-6 text-center">Notre emplacement</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2922926156743847!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1625764841415!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Carte de notre emplacement"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Consultez les réponses aux questions que l'on nous pose souvent.
              Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="font-display text-xl font-semibold mb-2">Quelle est la zone géographique couverte par vos services ?</h3>
                <p className="text-gray-700">
                  Nous intervenons principalement à Paris et en Île-de-France. Pour des événements plus éloignés, 
                  des frais de déplacement peuvent s'appliquer. N'hésitez pas à nous consulter pour plus d'informations.
                </p>
              </div>
              
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="font-display text-xl font-semibold mb-2">Combien de temps à l'avance dois-je réserver ?</h3>
                <p className="text-gray-700">
                  Pour garantir notre disponibilité, nous recommandons de réserver au minimum 4 semaines à l'avance. 
                  Pour les événements importants comme les mariages, un délai de 3 à 6 mois est préférable. 
                  Cependant, n'hésitez pas à nous contacter même pour des demandes de dernière minute, 
                  nous ferons notre possible pour vous satisfaire.
                </p>
              </div>
              
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="font-display text-xl font-semibold mb-2">Proposez-vous des options pour régimes alimentaires spécifiques ?</h3>
                <p className="text-gray-700">
                  Absolument ! Nous adaptons nos menus aux régimes végétariens, végétaliens, sans gluten, 
                  sans lactose ou à toute autre restriction alimentaire. Merci de nous préciser vos besoins 
                  lors de votre demande de devis pour que nous puissions vous proposer des alternatives adaptées.
                </p>
              </div>
              
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="font-display text-xl font-semibold mb-2">Fournissez-vous le mobilier et la vaisselle ?</h3>
                <p className="text-gray-700">
                  Oui, nous proposons un service complet incluant la vaisselle, le nappage, les couverts et le mobilier. 
                  Ces éléments peuvent être inclus dans nos formules ou ajoutés en option selon vos besoins. 
                  Nous travaillons également avec des partenaires de confiance pour la décoration et l'aménagement de votre événement.
                </p>
              </div>
              
              <div className="bg-beige p-6 rounded-lg">
                <h3 className="font-display text-xl font-semibold mb-2">Comment se déroule le processus de dégustation ?</h3>
                <p className="text-gray-700">
                  Pour les événements importants comme les mariages ou les grands événements d'entreprise, 
                  nous proposons des sessions de dégustation sur rendez-vous. Ces séances vous permettent de goûter 
                  une sélection de plats de votre menu et d'ajuster vos choix selon vos préférences. 
                  Les dégustations sont offertes pour les événements dépassant un certain montant, 
                  sinon elles sont facturées mais déduites de votre facture finale si vous confirmez votre commande.
                </p>
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
                Besoin d'un devis personnalisé ?
              </h2>
              <p className="text-lg text-gray-600">
                Pour obtenir une proposition adaptée à votre événement,
                remplissez notre formulaire de demande de devis.
              </p>
            </div>
            <div>
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

export default ContactPage;