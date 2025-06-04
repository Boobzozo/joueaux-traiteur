import React, { useState, useEffect } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface GalleryCategory {
  id: string;
  name: string;
}

const categories: GalleryCategory[] = [
  { id: 'all', name: 'Toutes les photos' },
  { id: 'weddings', name: 'Mariages' },
  { id: 'corporate', name: 'Événements d\'entreprise' },
  { id: 'private', name: 'Fêtes privées' },
  { id: 'food', name: 'Nos créations' },
];

// Mock gallery data
const galleryImages: GalleryImage[] = [
  // Weddings
  {
    id: '1',
    src: 'https://images.pexels.com/photos/7438185/pexels-photo-7438185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Réception de mariage décorée avec élégance',
    category: 'weddings',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/7438186/pexels-photo-7438186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Table dressée pour un mariage',
    category: 'weddings',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Gâteau de mariage élégant',
    category: 'weddings',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/7438196/pexels-photo-7438196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Buffet de mariage',
    category: 'weddings',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Verres de champagne pour les mariés',
    category: 'weddings',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Canapés élégants pour mariage',
    category: 'weddings',
  },
  
  // Corporate
  {
    id: '7',
    src: 'https://images.pexels.com/photos/5778899/pexels-photo-5778899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Buffet d\'entreprise',
    category: 'corporate',
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Collation d\'affaires',
    category: 'corporate',
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Salle de conférence avec buffet',
    category: 'corporate',
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/5778997/pexels-photo-5778997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cocktail d\'entreprise',
    category: 'corporate',
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/6276182/pexels-photo-6276182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Réunion d\'affaires avec traiteur',
    category: 'corporate',
  },
  
  // Private Parties
  {
    id: '12',
    src: 'https://images.pexels.com/photos/196218/pexels-photo-196218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Fête d\'anniversaire',
    category: 'private',
  },
  {
    id: '13',
    src: 'https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Buffet pour fête privée',
    category: 'private',
  },
  {
    id: '14',
    src: 'https://images.pexels.com/photos/1267318/pexels-photo-1267318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cocktails pour fête',
    category: 'private',
  },
  {
    id: '15',
    src: 'https://images.pexels.com/photos/7438072/pexels-photo-7438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Table décorée pour anniversaire',
    category: 'private',
  },
  {
    id: '16',
    src: 'https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Décoration festive pour célébration',
    category: 'private',
  },
  
  // Food creations
  {
    id: '17',
    src: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Canapés gourmands',
    category: 'food',
  },
  {
    id: '18',
    src: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Assiette gastronomique',
    category: 'food',
  },
  {
    id: '19',
    src: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Dessert élégant',
    category: 'food',
  },
  {
    id: '20',
    src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Plateau de fromages',
    category: 'food',
  },
  {
    id: '21',
    src: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Hors d\'œuvres créatifs',
    category: 'food',
  },
  {
    id: '22',
    src: 'https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Bouchées apéritives',
    category: 'food',
  },
  {
    id: '23',
    src: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Verrines gastronomiques',
    category: 'food',
  },
  {
    id: '24',
    src: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Plat principal raffiné',
    category: 'food',
  },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    const filtered = activeCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(image => image.category === activeCategory);
    
    // Simulate loading for smoother transitions
    setTimeout(() => {
      setFilteredImages(filtered);
      setIsLoading(false);
    }, 300);
  }, [activeCategory]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container-custom px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title mb-6">Notre Galerie</h1>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez nos réalisations à travers cette sélection de photos.
              Des mariages aux événements d'entreprise, en passant par nos créations culinaires,
              laissez-vous inspirer par notre savoir-faire.
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
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-white">
        <div className="container-custom px-4 mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-slide-up"
                  style={{ animationDelay: `${0.05 * index}s` }}
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">Aucune image trouvée</h3>
              <p className="text-gray-600 mb-6">
                Nous n'avons pas trouvé d'images dans cette catégorie.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="btn btn-primary"
              >
                Voir toutes les photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => navigateImage('prev')}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <div className="relative max-w-5xl max-h-[80vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => navigateImage('next')}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-white text-center">
            <p className="text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section bg-primary-light">
        <div className="container-custom px-4 mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl mb-8 md:mb-0">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Envie de créer des moments comme ceux-ci ?
              </h2>
              <p className="text-lg text-gray-600">
                Laissez-nous vous accompagner dans l'organisation de votre événement.
                Demandez un devis personnalisé et donnez vie à vos envies.
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
    </div>
  );
};

export default GalleryPage;