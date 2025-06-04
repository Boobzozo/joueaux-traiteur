export interface Formula {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'cocktail' | 'buffet' | 'menu' | 'special';
  startingPrice: number;
  pricePerPerson: number;
  minPeople: number;
  image: string;
  gallery: string[];
  details: {
    appetizers?: string[];
    mains?: string[];
    desserts?: string[];
    drinks?: string[];
    pieces?: string[];
    sides?: string[];
  };
  options: {
    title: string;
    description: string;
    price: number;
  }[];
  popular: boolean;
}

export const formulas: Formula[] = [
  {
    id: '1',
    title: 'Cocktail Dînatoire',
    shortDescription: 'Une sélection de pièces élégantes pour un événement où vos invités pourront se déplacer librement.',
    description: 'Notre formule Cocktail Dînatoire est idéale pour les événements où vos invités souhaitent socialiser tout en dégustant de délicieuses bouchées. Composée de pièces froides et chaudes, sucrées et salées, cette formule s\'adapte parfaitement aux réceptions en entreprise, lancements de produits ou cocktails de mariage.',
    category: 'cocktail',
    startingPrice: 25,
    pricePerPerson: 28,
    minPeople: 20,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      pieces: [
        'Verrines de gaspacho et sa brunoise de légumes',
        'Cuillères de tartare de saumon aux agrumes',
        'Mini-burgers au comté et confit d\'oignons',
        'Crostinis d\'avocat et crevettes épicées',
        'Brochettes de poulet teriyaki',
        'Gougères au fromage',
        'Arancini à la truffe',
        'Mini tartelettes aux fruits frais',
        'Choux à la crème de pistache',
        'Macarons assortis'
      ],
      drinks: [
        'Vin blanc et rouge sélectionnés par notre sommelier',
        'Jus de fruits frais',
        'Eaux plates et gazeuses',
        'Café et thé'
      ]
    },
    options: [
      {
        title: 'Bar à champagne',
        description: 'Ajoutez un service de champagne premium pour vos invités',
        price: 12
      },
      {
        title: 'Pièces supplémentaires',
        description: '4 pièces supplémentaires par personne (2 salées, 2 sucrées)',
        price: 8
      },
      {
        title: 'Animations culinaires',
        description: 'Chef en salle réalisant des pièces devant vos invités',
        price: 350
      }
    ],
    popular: true
  },
  {
    id: '2',
    title: 'Buffet Champêtre',
    shortDescription: 'Des produits frais et de saison, présentés sous forme de buffet généreux et convivial.',
    description: 'Notre Buffet Champêtre met à l\'honneur les produits locaux et de saison dans une présentation généreuse et conviviale. Idéal pour les événements en extérieur, les fêtes de famille ou les célébrations décontractées, ce buffet permet à vos invités de se servir selon leurs envies tout en profitant d\'une cuisine authentique et savoureuse.',
    category: 'buffet',
    startingPrice: 30,
    pricePerPerson: 32,
    minPeople: 30,
    image: 'https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/5677332/pexels-photo-5677332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5677335/pexels-photo-5677335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5677342/pexels-photo-5677342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      appetizers: [
        'Assortiment de charcuteries artisanales',
        'Plateau de fromages régionaux',
        'Salades composées de saison',
        'Terrines maison',
        'Pain de campagne et focaccia aux herbes'
      ],
      mains: [
        'Rôti de bœuf aux herbes',
        'Suprême de volaille fermière, sauce au cidre',
        'Filet de poisson du marché, crème d\'agrumes'
      ],
      sides: [
        'Gratin dauphinois',
        'Légumes rôtis de saison',
        'Riz pilaf aux petits légumes'
      ],
      desserts: [
        'Tarte aux fruits de saison',
        'Mousse au chocolat',
        'Salade de fruits frais',
        'Crème brûlée à la vanille'
      ],
      drinks: [
        'Vin blanc et rouge sélectionnés par notre sommelier',
        'Jus de fruits frais',
        'Eaux plates et gazeuses',
        'Café et thé'
      ]
    },
    options: [
      {
        title: 'Station de découpe',
        description: 'Jambon cru découpé devant vos invités',
        price: 280
      },
      {
        title: 'Bar à salades',
        description: 'Assortiment de salades supplémentaires avec vinaigrettes maison',
        price: 7
      },
      {
        title: 'Buffet de desserts supplémentaires',
        description: 'Ajout de mignardises, petits fours et verrines sucrées',
        price: 9
      }
    ],
    popular: true
  },
  {
    id: '3',
    title: 'Menu Prestige',
    shortDescription: 'Une expérience gastronomique complète avec service à table pour vos événements les plus raffinés.',
    description: 'Notre Menu Prestige offre une expérience gastronomique complète avec service à table pour vos événements les plus raffinés. Chaque plat est soigneusement élaboré par notre chef pour créer un menu cohérent et équilibré qui éveillera les sens de vos convives. Idéal pour les mariages, dîners d\'affaires ou célébrations importantes.',
    category: 'menu',
    startingPrice: 45,
    pricePerPerson: 48,
    minPeople: 20,
    image: 'https://images.pexels.com/photos/5175537/pexels-photo-5175537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      appetizers: [
        'Foie gras maison et son chutney de figues',
        'Tartare de Saint-Jacques aux agrumes',
        'Velouté de champignons et son espuma à la truffe'
      ],
      mains: [
        'Filet de bœuf Wellington, sauce au Porto',
        'Dos de cabillaud en croûte d\'herbes, beurre blanc',
        'Magret de canard laqué au miel et épices'
      ],
      sides: [
        'Purée truffée',
        'Légumes glacés de saison',
        'Risotto aux champignons'
      ],
      desserts: [
        'Sphère au chocolat et son cœur coulant',
        'Pavlova aux fruits rouges',
        'Assiette de mignardises'
      ],
      drinks: [
        'Vin blanc et rouge sélectionnés par notre sommelier',
        'Champagne pour le dessert',
        'Eaux plates et gazeuses',
        'Café et thé',
        'Mignardises'
      ]
    },
    options: [
      {
        title: 'Accord mets et vins',
        description: 'Sélection de vins pour accompagner chaque plat',
        price: 18
      },
      {
        title: 'Amuse-bouches',
        description: 'Assortiment d\'amuse-bouches servis à l\'apéritif',
        price: 12
      },
      {
        title: 'Service de fromages',
        description: 'Plateau de fromages affinés servi avant le dessert',
        price: 9
      }
    ],
    popular: true
  },
  {
    id: '4',
    title: 'Brunch Gourmand',
    shortDescription: 'Un assortiment complet de plats sucrés et salés pour un moment convivial en journée.',
    description: 'Notre formule Brunch Gourmand est parfaite pour les événements en journée comme les lendemains de mariage, baby showers ou réunions familiales. Combinant des éléments sucrés et salés, cette formule offre un large choix pour satisfaire tous les goûts et permettre à vos invités de profiter d\'un moment de détente et de convivialité.',
    category: 'buffet',
    startingPrice: 28,
    pricePerPerson: 30,
    minPeople: 20,
    image: 'https://images.pexels.com/photos/5638727/pexels-photo-5638727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      appetizers: [
        'Plateau de saumon fumé et ses blinis',
        'Assortiment de charcuteries fines',
        'Sélection de fromages',
        'Œufs brouillés aux fines herbes',
        'Avocado toast'
      ],
      mains: [
        'Quiches variées',
        'Poulet rôti aux herbes',
        'Croque-monsieur maison'
      ],
      sides: [
        'Salade de fruits frais',
        'Assortiment de viennoiseries',
        'Pancakes et accompagnements',
        'Granola et yaourts'
      ],
      drinks: [
        'Jus de fruits frais pressés',
        'Sélection de thés et infusions',
        'Café et chocolat chaud',
        'Eaux aromatisées aux fruits'
      ]
    },
    options: [
      {
        title: 'Bar à smoothies',
        description: 'Assortiment de smoothies frais préparés sur place',
        price: 8
      },
      {
        title: 'Champagne',
        description: 'Service de champagne pour un brunch festif',
        price: 15
      },
      {
        title: 'Crêpes minute',
        description: 'Station de crêpes préparées devant vos invités',
        price: 7
      }
    ],
    popular: false
  },
  {
    id: '5',
    title: 'Buffet Italien',
    shortDescription: 'Les saveurs ensoleillées de l\'Italie réunies dans un buffet convivial et généreux.',
    description: 'Notre Buffet Italien met à l\'honneur les saveurs emblématiques de la cuisine italienne dans une présentation généreuse et conviviale. Des antipasti aux desserts, en passant par les pâtes fraîches et les plats mijotés, ce buffet thématique ravira vos invités amateurs de cuisine méditerranéenne lors de vos événements professionnels ou privés.',
    category: 'buffet',
    startingPrice: 32,
    pricePerPerson: 35,
    minPeople: 30,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      appetizers: [
        'Antipasti variés (légumes grillés, olives marinées)',
        'Planches de charcuteries italiennes (jambon de Parme, mortadelle, salami)',
        'Mozzarella di bufala et tomates',
        'Bruschetta assortie'
      ],
      mains: [
        'Lasagnes à la bolognaise',
        'Risotto aux champignons',
        'Escalopes de veau à la milanaise',
        'Pennes à la sauce tomate et basilic'
      ],
      sides: [
        'Légumes grillés à l\'huile d\'olive',
        'Salade caprese',
        'Focaccia maison aux herbes'
      ],
      desserts: [
        'Tiramisu traditionnel',
        'Panna cotta aux fruits rouges',
        'Cannoli siciliens'
      ],
      drinks: [
        'Vins italiens (blanc et rouge)',
        'Eau gazeuse et plate',
        'Café expresso'
      ]
    },
    options: [
      {
        title: 'Station de pâtes fraîches',
        description: 'Chef préparant des pâtes fraîches devant vos invités',
        price: 10
      },
      {
        title: 'Bar à Prosecco',
        description: 'Service de Prosecco avec divers accompagnements',
        price: 12
      },
      {
        title: 'Gelato',
        description: 'Assortiment de glaces italiennes artisanales',
        price: 8
      }
    ],
    popular: false
  },
  {
    id: '6',
    title: 'Cocktail Déjeunatoire',
    shortDescription: 'Une formule légère et festive, parfaite pour les événements en journée.',
    description: 'Notre formule Cocktail Déjeunatoire est idéale pour les événements professionnels en journée, comme les séminaires, conférences ou inaugurations. Plus légère que le cocktail dînatoire, cette formule propose une sélection de pièces salées et sucrées faciles à déguster debout, permettant à vos invités de réseauter tout en profitant d\'un repas qualitatif.',
    category: 'cocktail',
    startingPrice: 22,
    pricePerPerson: 25,
    minPeople: 20,
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      pieces: [
        'Mini-clubs sandwichs variés',
        'Wraps de légumes et poulet curry',
        'Verrines de quinoa aux légumes croquants',
        'Brochettes de mozzarella et tomates cerise',
        'Mini quiches assorties',
        'Bouchées de saumon fumé et fromage frais',
        'Petits fours sucrés',
        'Brochettes de fruits frais',
        'Mignardises chocolatées'
      ],
      drinks: [
        'Eaux aromatisées aux fruits',
        'Jus de fruits frais',
        'Vin blanc et rosé',
        'Café et thé'
      ]
    },
    options: [
      {
        title: 'Verrines supplémentaires',
        description: '2 verrines supplémentaires par personne',
        price: 6
      },
      {
        title: 'Boissons soft premium',
        description: 'Limonades artisanales et thés glacés maison',
        price: 5
      },
      {
        title: 'Station café gourmand',
        description: 'Café barista avec mignardises associées',
        price: 8
      }
    ],
    popular: false
  },
  {
    id: '7',
    title: 'Menu Mariage',
    shortDescription: 'Une formule complète pour le plus beau jour de votre vie, alliant élégance et gastronomie.',
    description: 'Notre Menu Mariage est spécialement conçu pour faire de votre réception un moment inoubliable. De l\'apéritif au dessert, en passant par les mises en bouche et le repas, chaque détail est pensé pour offrir une expérience gastronomique à la hauteur de cet événement unique. Notre équipe s\'occupe de tout pour que vous puissiez profiter pleinement de votre journée.',
    category: 'special',
    startingPrice: 65,
    pricePerPerson: 68,
    minPeople: 50,
    image: 'https://images.pexels.com/photos/16599391/pexels-photo-16599391/free-photo-of-a-white-decorative-plate-with-utensils-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/7438189/pexels-photo-7438189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2642842/pexels-photo-2642842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7061454/pexels-photo-7061454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      appetizers: [
        'Vin d\'honneur avec 8 pièces cocktail par personne',
        'Mise en bouche du chef',
        'Terrine de foie gras maison et son chutney de saison',
        'Noix de Saint-Jacques poêlées, purée de céleri et chips de pancetta'
      ],
      mains: [
        'Filet de bœuf Wellington, sauce au vin rouge',
        'Suprême de volaille farci aux morilles',
        'Pavé de bar rôti, émulsion au champagne'
      ],
      sides: [
        'Assortiment de légumes de saison',
        'Gratin dauphinois',
        'Risotto crémeux aux asperges'
      ],
      desserts: [
        'Pièce montée ou wedding cake',
        'Buffet de desserts (4 mignardises par personne)',
        'Fontaine de champagne'
      ],
      drinks: [
        'Vins sélectionnés par notre sommelier',
        'Champagne pour le dessert',
        'Eaux minérales plates et gazeuses',
        'Café et thé',
        'Open bar après le dîner (en option)'
      ]
    },
    options: [
      {
        title: 'Menu enfant',
        description: 'Menu adapté pour les enfants (jusqu\'à 12 ans)',
        price: 25
      },
      {
        title: 'Open bar',
        description: '3 heures de bar à cocktails après le dîner',
        price: 25
      },
      {
        title: 'Brunch du lendemain',
        description: 'Formule brunch pour le lendemain de mariage',
        price: 28
      }
    ],
    popular: true
  },
  {
    id: '8',
    title: 'Menu Végétarien',
    shortDescription: 'Une expérience gastronomique végétarienne élaborée avec des produits frais et de saison.',
    description: 'Notre Menu Végétarien propose une alternative créative et savoureuse pour vos invités ne consommant pas de viande ou de poisson. Loin des clichés sur la cuisine végétarienne, ce menu met à l\'honneur les légumes, céréales et protéines végétales dans des plats raffinés et gourmands qui satisferont même les palais les plus exigeants.',
    category: 'menu',
    startingPrice: 38,
    pricePerPerson: 40,
    minPeople: 10,
    image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gallery: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    details: {
      appetizers: [
        'Tartare d\'avocat aux agrumes et herbes fraîches',
        'Velouté de légumes de saison et son espuma aux herbes',
        'Tatin de légumes confits et son mesclun'
      ],
      mains: [
        'Risotto aux champignons et truffe',
        'Wellington aux légumes et lentilles',
        'Curry de légumes au lait de coco et riz basmati'
      ],
      sides: [
        'Purée de patates douces',
        'Légumes rôtis au four',
        'Quinoa aux herbes fraîches'
      ],
      desserts: [
        'Tarte fine aux fruits de saison',
        'Mousse au chocolat végétale',
        'Crumble aux fruits rouges'
      ],
      drinks: [
        'Vins biologiques (blanc et rouge)',
        'Jus de fruits frais',
        'Eaux plates et gazeuses',
        'Café et thé'
      ]
    },
    options: [
      {
        title: 'Option vegan',
        description: 'Adaptation complète du menu en version vegan',
        price: 0
      },
      {
        title: 'Fromages végétaux',
        description: 'Assortiment de fromages végétaux avant le dessert',
        price: 8
      },
      {
        title: 'Amuse-bouches',
        description: 'Sélection de 4 amuse-bouches végétariens par personne',
        price: 9
      }
    ],
    popular: false
  }
];

export const getFormulaById = (id: string): Formula | undefined => {
  return formulas.find((formula) => formula.id === id);
};

export const getFormulasByCategory = (category: Formula['category']): Formula[] => {
  return formulas.filter((formula) => formula.category === category);
};

export const getPopularFormulas = (): Formula[] => {
  return formulas.filter((formula) => formula.popular);
};