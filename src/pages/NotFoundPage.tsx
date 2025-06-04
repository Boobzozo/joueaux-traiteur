import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="p-8 text-center">
    <h1 className="text-3xl font-bold mb-4">Page non trouvée</h1>
    <p className="mb-4">Désolé, la page que vous cherchez n'existe pas.</p>
    <Link to="/" className="text-blue-500 underline">Retour à l'accueil</Link>
  </div>
);

export default NotFoundPage;
