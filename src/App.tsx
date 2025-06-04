import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import ScrollToTop from './components/ScrollToTop';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const FormulasPage = lazy(() => import('./pages/FormulasPage'));
const FormulaDetailPage = lazy(() => import('./pages/FormulaDetailPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="p-8 text-center">Chargement...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/formules" element={<FormulasPage />} />
              <Route path="/formules/:id" element={<FormulaDetailPage />} />
              <Route path="/devis" element={<QuotePage />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
}

export default App;