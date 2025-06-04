import React, { useState } from 'react';
import { formulas } from '../data/formulas';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  formulaId: string;
  message: string;
  acceptTerms: boolean;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  formulaId: '',
  message: '',
  acceptTerms: false,
};

const QuotePage = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Ce champ est requis';
    }

    if (!formData.eventDate.trim()) {
      newErrors.eventDate = 'Ce champ est requis';
    }

    if (!formData.guestCount.trim()) {
      newErrors.guestCount = 'Ce champ est requis';
    } else if (isNaN(Number(formData.guestCount)) || Number(formData.guestCount) < 1) {
      newErrors.guestCount = 'Veuillez entrer un nombre valide';
    }

    if (!formData.formulaId.trim()) {
      newErrors.formulaId = 'Veuillez sélectionner une formule';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions';
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
      
      // Scroll to top after submission
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-custom px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title mb-6">Demande de Devis</h1>
            <p className="text-lg text-gray-700 mb-8">
              Complétez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre événement.
              Notre équipe vous contactera sous 48h avec une proposition adaptée à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 md:p-10 text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-500\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">Demande envoyée avec succès !</h2>
                <p className="text-gray-600 mb-6">
                  Merci pour votre demande de devis. Notre équipe va l'étudier et vous contactera dans les plus brefs délais.
                  Un email de confirmation a été envoyé à l'adresse que vous avez indiquée.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
                  <h2 className="text-2xl font-display font-semibold mb-6">Vos coordonnées</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="06 12 34 56 78"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-display font-semibold mb-6">Détails de l'événement</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Date de l'événement <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={`input ${errors.eventDate ? 'border-red-500 focus:ring-red-500' : ''}`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {errors.eventDate && <p className="mt-1 text-sm text-red-500">{errors.eventDate}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre d'invités <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className={`input ${errors.guestCount ? 'border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Nombre de personnes"
                        min="1"
                      />
                      {errors.guestCount && <p className="mt-1 text-sm text-red-500">{errors.guestCount}</p>}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="formulaId" className="block text-sm font-medium text-gray-700 mb-1">
                        Formule souhaitée <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="formulaId"
                        name="formulaId"
                        value={formData.formulaId}
                        onChange={handleChange}
                        className={`input ${errors.formulaId ? 'border-red-500 focus:ring-red-500' : ''}`}
                      >
                        <option value="">Sélectionnez une formule</option>
                        {formulas.map((formula) => (
                          <option key={formula.id} value={formula.id}>
                            {formula.title} - À partir de {formula.startingPrice}€
                          </option>
                        ))}
                        <option value="custom">Formule sur mesure</option>
                      </select>
                      {errors.formulaId && <p className="mt-1 text-sm text-red-500">{errors.formulaId}</p>}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message ou précisions supplémentaires
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="input resize-none"
                        placeholder="Précisez vos besoins spécifiques, questions ou contraintes particulières..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="acceptTerms"
                        name="acceptTerms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="acceptTerms" className={`font-medium ${errors.acceptTerms ? 'text-red-500' : 'text-gray-700'}`}>
                        J'accepte que mes données soient utilisées pour traiter ma demande <span className="text-red-500">*</span>
                      </label>
                      {errors.acceptTerms && <p className="mt-1 text-sm text-red-500">{errors.acceptTerms}</p>}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
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
                      'Envoyer ma demande de devis'
                    )}
                  </button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Comment ça marche ?</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">1</span>
                      <div>
                        <p className="font-medium">Vous remplissez ce formulaire</p>
                        <p className="text-gray-600 text-sm">Avec toutes les informations nécessaires concernant votre événement.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">2</span>
                      <div>
                        <p className="font-medium">Notre équipe étudie votre demande</p>
                        <p className="text-gray-600 text-sm">Et prépare une proposition adaptée à vos besoins spécifiques.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">3</span>
                      <div>
                        <p className="font-medium">Vous recevez votre devis par email</p>
                        <p className="text-gray-600 text-sm">Sous 48h maximum avec tous les détails de notre proposition.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;