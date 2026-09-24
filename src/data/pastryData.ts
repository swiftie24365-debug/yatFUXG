import { Product, CollectionCategory, PackPetiteFete, CelebrationOccasion, InstagramFeedItem } from '../types';

export const BRAND_INFO = {
  name: 'Pâtisserie Ghanem',
  acronym: 'PG',
  tagline: 'Atelier de Haute Pâtisserie & Douceurs Fines',
  headline: "L'art de sublimer vos plus doux instants",
  subheadline: 'Un héritage de savoir-faire artisanal où la tradition des douceurs tunisiennes rencontre la rigueur de la haute pâtisserie.',
  address: '9 Rue Hassen Kenani, El Menzah 9, Tunis 1013',
  city: 'Tunis, Tunisie',
  phone: '+216 29 444 888',
  phoneDisplay: '+216 29 444 888',
  whatsappNumber: '21629444888',
  email: 'contact@patisserieghanem.tn',
  instagramUrl: 'https://www.instagram.com/patisserieghanem?stkn=MTc0bTk4b2ZrbmZkNA==',
  instagramHandle: '@patisserieghanem',
  hours: 'Mardi – Dimanche : 09h00 – 20h30 | Lundi : Sur commande',
  deliveryZone: 'Livraison express Grand Tunis & expédition soignée sur toute la Tunisie',
};

export const PACKS_PETITE_FETE: PackPetiteFete[] = [
  {
    id: 'pack-gold',
    tier: 'gold',
    title: 'Pack Petite Fête',
    scriptBadge: 'Gold',
    edition: 'Édition Prestige & Cérémonie',
    tagline: "L'éclat chaleureux de l'or pour vos réceptions d'exception",
    description: 'Une composition fastueuse pensée pour illuminer vos grands mariages, fiançailles et événements d’honneur. Présentée sur plateau d’orfèvre avec finition dorée.',
    backgroundClass: 'pack-gold-bg',
    accentBorderClass: 'border-[#C5A059]/40 hover:border-[#C5A059]',
    badgeBg: 'bg-[#C5A059] text-white',
    textAccentClass: 'text-[#8C6A28]',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop',
    pieceCount: '60 à 80 pièces de prestige',
    recommendedFor: '15 à 20 convives',
    selectionItems: [
      { name: 'Baklava Royale Pistache d’Alep', description: 'Feuilletage doré au beurre clarifié, cœur pistache concassée', portion: '20 pcs' },
      { name: 'Dattes Deglet Nour Farcies Prestige', description: 'Garnies de pâte de pistache et noisettes torréfiées', portion: '15 pcs' },
      { name: 'Kaak Warka Parfumé à l’Eau de Rose', description: 'Pâte soyeuse d’amande fine sous anneau immaculé', portion: '15 pcs' },
      { name: 'Bouchées Diamant Amande & Pistache', description: 'Douceurs sculptées à la main avec éclats de pistache', portion: '18 pcs' },
    ],
    packagingDetails: 'Plateau ornementé laqué doré Pâtisserie Ghanem & ruban satin champagne',
    priceNote: 'Tarif disponible sur commande ou en boutique selon saison'
  },
  {
    id: 'pack-platinum',
    tier: 'platinum',
    title: 'Pack Petite Fête',
    scriptBadge: 'Platinum',
    edition: 'Édition Moderne & Épure',
    tagline: 'L’élégance contemporaine des nuances taupe et poudrées',
    description: 'Une symphonie moderne alliant bouchées pralinées légères, dattes d’exception et spécialités signatures dans un écrin taupe minéral d’une délicatesse absolue.',
    backgroundClass: 'pack-platinum-bg',
    accentBorderClass: 'border-[#B5A490]/40 hover:border-[#766D65]',
    badgeBg: 'bg-[#766D65] text-[#FAF8F5]',
    textAccentClass: 'text-[#53433C]',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop',
    pieceCount: '50 à 65 pièces fines',
    recommendedFor: '12 à 15 convives',
    selectionItems: [
      { name: 'Dattes Royales Pistache & Noisette', description: 'Sélection Deglet Nour avec marzipan pistache verte', portion: '16 pcs' },
      { name: 'Mlabes Amande Pure Sucre Glacé', description: 'Écrin blanc immaculé fondant en bouche', portion: '14 pcs' },
      { name: 'Samsa Dorée Feuilletée Pistache', description: 'Triangles croustillants infusés à la fleur d’oranger', portion: '16 pcs' },
      { name: 'Rochers Pistache Sablée', description: 'Cœur praliné maison et pépites de pistaches fraîches', portion: '14 pcs' },
    ],
    packagingDetails: 'Plateau contemporain taupe poudré monogrammé PG & ruban velours',
    priceNote: 'Tarif disponible sur commande ou en boutique selon saison'
  },
  {
    id: 'pack-silver',
    tier: 'silver',
    title: 'Pack Petite Fête',
    scriptBadge: 'Silver',
    edition: 'Édition Intime & Délicatesse',
    tagline: 'La pureté argentée des douceurs traditionnelles les plus fines',
    description: 'Un assortiment raffiné aux tonalités fraîches et argentées, idéal pour vos réunions familiales intimes, dîners de fête et remerciements précieux.',
    backgroundClass: 'pack-silver-bg',
    accentBorderClass: 'border-[#8F9CA4]/40 hover:border-[#5B676E]',
    badgeBg: 'bg-[#8F9CA4] text-white',
    textAccentClass: 'text-[#475258]',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    pieceCount: '40 à 50 pièces artisanales',
    recommendedFor: '8 à 12 convives',
    selectionItems: [
      { name: 'Assortiment Baklavas Traditionnelles', description: 'Fines couches croustillantes aux amandes douces', portion: '14 pcs' },
      { name: 'Kaak Warka Délicat', description: 'Anneaux d’amande parfumés au néroli artisanal', portion: '12 pcs' },
      { name: 'Samsa Croustillante Miel & Amande', description: 'Feuilleté doré délicatement miellé', portion: '12 pcs' },
      { name: 'Bouchées Pâte d’Amande Fleur d’Oranger', description: 'Formes classiques façonnées au doigt', portion: '12 pcs' },
    ],
    packagingDetails: 'Plateau argenté satiné avec cloche protectrice cristal & sceau PG',
    priceNote: 'Tarif disponible sur commande ou en boutique selon saison'
  }
];

export const SIGNATURE_COLLECTIONS: CollectionCategory[] = [
  {
    id: 'baklava',
    name: 'Baklava de Prestige',
    scriptAccent: 'Feuilleté d’or',
    tagline: 'Millefeuille de soie et pistaches concassées',
    description: 'Un travail d’orfèvre où chaque feuille de pâte est étirée à la main jusqu’à la translucidité, beurrée au smen pur et garnie de pistaches royales.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop',
    productCount: 6,
    featuredItem: 'Baklava Royale Pistache'
  },
  {
    id: 'kaak-warka',
    name: 'Kaak Warka & Douceurs Blanches',
    scriptAccent: 'Pureté',
    tagline: 'L’emblème de la finesse tunisienne',
    description: 'La blancheur immaculée d’une pâte d’amande d’une finesse absolue, délicatement parfumée à l’eau distillée d’églantier et de rose de Zaghouan.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    productCount: 4,
    featuredItem: 'Kaak Warka Pur Amande'
  },
  {
    id: 'dattes',
    name: 'Dattes Farcies Impériales',
    scriptAccent: 'Joyaux du Sahara',
    tagline: 'Deglet Nour d’excellence & pralinés nobles',
    description: 'Sélectionnées une à une dans les palmeraies du sud tunisien, dénoyautées avec soin et garnies de ganaches aux pistaches, marzipan et noisettes caramélisées.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop',
    productCount: 5,
    featuredItem: 'Datte Farcie Pistache & Noisette'
  },
  {
    id: 'amande-pistache',
    name: 'Mignardises & Bouchées Fines',
    scriptAccent: 'Haute Précision',
    tagline: 'Bijoux de pâtisserie à partager',
    description: 'Mlabes précieux, Samsas triangulaires au miel sauvage, pyramides de pistaches et bouchées sculptées pour les palais les plus exigeants.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    productCount: 8,
    featuredItem: 'Mlabes Impérial & Rocher Pistache'
  },
  {
    id: 'coffrets',
    name: 'Coffrets & Gifting Prestige',
    scriptAccent: 'L’Art d’Offrir',
    tagline: 'Écrins de luxe habillés d’or et de rubans',
    description: 'Boîtes rigides aux finitions dorées à chaud, garnies d’un éventail harmonieux des créations signatures de Pâtisserie Ghanem.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    productCount: 4,
    featuredItem: 'Coffret Carré Prestige 1kg'
  }
];

export const PRODUCTS_LIST: Product[] = [
  {
    id: 'baklava-pistache-royale',
    name: 'Baklava Pistache Royale',
    subtitle: 'Feuilletage artisanal & pistaches sélection d’Alep',
    category: 'baklava',
    categoryLabel: 'Baklava',
    description: 'Une harmonie céleste entre des dizaines de couches de pâte phyllo artisanale ultra-fine, beurrée délicatement et garnie de pistaches pures croustillantes.',
    details: 'Chaque pièce est découpée en losange géométrique parfait et parfumée d’un trait de sirop de fleur d’oranger tiède.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop',
    ingredients: ['Farine de blé supérieure', 'Pistaches sélectionnées', 'Beurre clarifié (Smen)', 'Sucre de canne', 'Eau de fleur d’oranger'],
    allergens: ['Gluten', 'Fruits à coque (Pistaches)', 'Lactose'],
    piecesOrWeight: 'Plateaux de 500g, 1kg ou plateau fête',
    startingPrice: 'Sur commande',
    isSignature: true,
    featuredInPack: ['gold', 'platinum']
  },
  {
    id: 'kaak-warka-rose',
    name: 'Kaak Warka d’Églantier',
    subtitle: 'L’anneau d’or blanc tunisien',
    category: 'kaak-warka',
    categoryLabel: 'Kaak Warka',
    description: 'L’incontournable symbole de raffinement. Un anneau d’une pâleur immaculée enveloppant un cœur d’amandes douces mondées, parfumées à l’eau distillée d’églantier.',
    details: 'Texture d’une douceur incomparable qui fond instantanément sous le palais avec une note florale très subtile.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    ingredients: ['Amandes blanches de Méditerranée', 'Farine fine', 'Eau d’églantier distillée', 'Sucre glace'],
    allergens: ['Fruits à coque (Amandes)', 'Gluten'],
    piecesOrWeight: 'Boîte de 24 pièces ou au kilogramme',
    startingPrice: 'Sur commande',
    isSignature: true,
    featuredInPack: ['gold', 'silver']
  },
  {
    id: 'datte-farcie-pistache',
    name: 'Dattes Impériales à la Pistache',
    subtitle: 'Deglet Nour du Sud & Marzipan de pistache émeraude',
    category: 'dattes',
    categoryLabel: 'Dattes & Bouchées',
    description: 'Dattes Deglet Nour mûries sous le soleil de Tozeur, ouvertes délicatement et fourrées d’une onctueuse pâte de pistache crue et éclats de pistaches grillées.',
    details: 'Agrémentées d’une touche de feuille d’or alimentaire pour sublimer vos tables de réception.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop',
    ingredients: ['Dattes Deglet Nour bio', 'Pistaches fraîches', 'Sirop d’agave pur', 'Feuille d’or'],
    allergens: ['Fruits à coque (Pistaches)'],
    piecesOrWeight: 'Coffrets de 16, 24 ou 36 pièces',
    startingPrice: 'Sur commande',
    isSignature: true,
    featuredInPack: ['gold', 'platinum']
  },
  {
    id: 'datte-farcie-noisette',
    name: 'Dattes Farcies Noisette Pralinée',
    subtitle: 'Cœur gianduja noisette & croustillant feuilletine',
    category: 'dattes',
    categoryLabel: 'Dattes & Bouchées',
    description: 'Une alliance gourmande entre le moelleux naturel de la datte tunisienne et un praliné croustillant de noisettes du Piémont torréfiées au chaudron.',
    details: 'Décorées d’une noisette entière dorée à la main.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop',
    ingredients: ['Dattes Deglet Nour', 'Noisettes torréfiées', 'Praliné noisette maison', 'Chocolat noir fin'],
    allergens: ['Fruits à coque (Noisettes)'],
    piecesOrWeight: 'Assortiment coffret ou plateau',
    startingPrice: 'Sur commande',
    isSignature: false,
    featuredInPack: ['platinum']
  },
  {
    id: 'mlabes-amande-imperial',
    name: 'Mlabes Amande de Prestige',
    subtitle: 'Glaçage royal immaculé & amandes mondées',
    category: 'amande-pistache',
    categoryLabel: 'Douceurs Fines',
    description: 'Petits dômes d’amandes fines parfumées au zeste d’agrumes et eau de rose, recouverts d’un glaçage royal croquant d’un blanc de porcelaine.',
    details: 'Rehaussés d’un sceau monogramme et d’une pointe argentée.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    ingredients: ['Amandes douces de Tunisie', 'Blanc d’œuf pasteurisé', 'Sucre glace', 'Eau de rose'],
    allergens: ['Fruits à coque (Amandes)', 'Œuf'],
    piecesOrWeight: 'À la pièce ou en plateau assorti',
    startingPrice: 'Sur commande',
    isSignature: true,
    featuredInPack: ['platinum', 'silver']
  },
  {
    id: 'samsa-pistache-miel',
    name: 'Samsa Dorée aux Pistaches',
    subtitle: 'Pâte brik croustillante & miel de thym',
    category: 'amande-pistache',
    categoryLabel: 'Douceurs Fines',
    description: 'Le croustillant incomparable du triangle de pâte dorée au four, renfermant une farce généreuse de pistaches et d’amandes torréfiées, plongé dans un sirop au miel.',
    details: 'Graines de sésame blanc ou pistache râpée en garniture.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop',
    ingredients: ['Feuille de brik artisanale', 'Pistaches', 'Miel naturel', 'Cannelle douce', 'Sésame doré'],
    allergens: ['Gluten', 'Fruits à coque (Pistaches)', 'Graines de sésame'],
    piecesOrWeight: 'Plateau de 20 ou 40 pièces',
    startingPrice: 'Sur commande',
    isSignature: false,
    featuredInPack: ['gold', 'platinum', 'silver']
  },
  {
    id: 'coffret-prestige-or',
    name: 'Coffret Grand Cadeau Ghanem',
    subtitle: 'Écrin rigide orné du monogramme PG doré à chaud',
    category: 'coffrets',
    categoryLabel: 'Coffrets & Cadeaux',
    description: 'L’expression ultime du cadeau d’affaires ou de courtoisie. Un coffret compartimenté garni des plus prestigieuses créations de notre atelier.',
    details: 'Comprend nos baklavas signature, dattes d’exception, Kaak Warka et bouchées diamant.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    ingredients: ['Assortiment des recettes signatures Pâtisserie Ghanem'],
    allergens: ['Fruits à coque', 'Gluten', 'Lactose'],
    piecesOrWeight: '1.2 kg net (environ 55 pièces)',
    startingPrice: 'Sur commande',
    isSignature: true,
    featuredInPack: ['gold']
  }
];

export const CELEBRATIONS_DATA: CelebrationOccasion[] = [
  {
    id: 'mariages-fiancailles',
    title: 'Mariages & Fiançailles',
    scriptLabel: 'Cérémonie d’Exception',
    subtitle: 'L’élégance gourmande de votre plus beau jour',
    description: 'Parce que votre union mérite la perfection, Pâtisserie Ghanem compose des tables de desserts monumentales, des plateaux d’accueil d’orfèvre et des dragées d’exception aux couleurs de votre fête.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
    curatedOfferings: [
      'Plateaux d’accueil Pack Petite Fête personnalisés',
      'Assortiments prestige pour corbeilles de mariée',
      'Mini-bouchées individuelles pour service au cocktail',
      'Coffrets cadeaux invités sur-mesure'
    ]
  },
  {
    id: 'receptions-privees',
    title: 'Réceptions & Soirées Privées',
    scriptLabel: 'Hospitalité Haute Couture',
    subtitle: 'Sublimer vos réceptions familiales & dîners mondains',
    description: 'Anniversaires, dîners de gala ou retrouvailles intimes : nos créations apportent cette touche de noblesse artisanale qui marque les esprits de vos convives.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop',
    curatedOfferings: [
      'Packs Gold, Platinum et Silver prêts à servir',
      'Conseil en accords thés de prestige & douceurs',
      'Livraison soignée le jour même sur le lieu de l’événement'
    ]
  },
  {
    id: 'corporate-gifting',
    title: 'Cadeaux d’Entreprise & VIP',
    scriptLabel: 'Prestige Professionnel',
    subtitle: 'L’art du cadeau d’affaires à l’image de votre exigence',
    description: 'Remerciez vos partenaires, collaborateurs et clients de prestige avec nos coffrets hauts de gamme marqués de votre identité ou du sceau Pâtisserie Ghanem.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop',
    curatedOfferings: [
      'Coffrets monogrammés avec personnalisation possible',
      'Gestion logistique groupée et expéditions nationales',
      'Devis pro & facturation entreprises dédiée'
    ]
  }
];

export const INSTAGRAM_POSTS: InstagramFeedItem[] = [
  {
    id: 'post-1',
    postUrl: 'https://www.instagram.com/patisserieghanem?stkn=MTc0bTk4b2ZrbmZkNA==',
    imageUrl: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop',
    caption: 'L’incomparable Baklava Royale. Un jeu de texture entre croustillant et fondant, sublimé par la pistache d’Alep concassée.',
    likes: '1.4k',
    tag: '#PatisserieGhanem #Baklava #HautePatisserie',
    date: 'Cette semaine'
  },
  {
    id: 'post-2',
    postUrl: 'https://www.instagram.com/patisserieghanem?stkn=MTc0bTk4b2ZrbmZkNA==',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop',
    caption: 'Pack Petite Fête — Collection Platinum. Harmonie des teintes minérales, dattes royales et douceurs pralinées.',
    likes: '2.1k',
    tag: '#PackPetiteFete #Platinum #Artisanat',
    date: 'Il y a 3 jours'
  },
  {
    id: 'post-3',
    postUrl: 'https://www.instagram.com/patisserieghanem?stkn=MTc0bTk4b2ZrbmZkNA==',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    caption: 'Kaak Warka d’une blancheur immaculée. Parfum délicat d’eau d’églantier et amandes sélectionnées avec ferveur.',
    likes: '1.8k',
    tag: '#KaakWarka #Tunis #TraditionGourmande',
    date: 'Il y a 5 jours'
  },
  {
    id: 'post-4',
    postUrl: 'https://www.instagram.com/patisserieghanem?stkn=MTc0bTk4b2ZrbmZkNA==',
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
    caption: 'L’art du coffret cadeau. Des finitions or sur papier grainé ivoire pour transmettre vos émotions les plus sincères.',
    likes: '960',
    tag: '#CoffretCadeau #Prestige #Ghanem',
    date: 'Il y a 1 semaine'
  },
  {
    id: 'post-5',
    postUrl: 'https://www.instagram.com/patisserieghanem?stkn=MTc0bTk4b2ZrbmZkNA==',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
    caption: 'Pack Petite Fête — Collection Gold. La splendeur festive pour célébrer la vie et ses doux instants partagés.',
    likes: '3.2k',
    tag: '#PackGold #Celebrations #MariageTunisie',
    date: 'Il y a 1 semaine'
  },
  {
    id: 'post-6',
    postUrl: 'https://www.instagram.com/patisserieghanem?stkn=MTc0bTk4b2ZrbmZkNA==',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
    caption: 'Dans le secret de notre atelier à El Menzah 9. Chaque geste est mesuré, chaque douceur est une promesse de délice.',
    likes: '1.6k',
    tag: '#AtelierGhanem #Menzah9 #SavoirFaire',
    date: 'Il y a 2 semaines'
  }
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    title: 'Matières Nobles & Terroirs',
    scriptSubtitle: 'La Pureté du Goût',
    description: 'Pistaches d’Alep et de Bronte d’un vert émeraude vibrant, amandes douces de vergers méditerranéens, beurre clarifié noble et miels bruts de montagne.'
  },
  {
    title: 'Geste d’Artisanat & Précision',
    scriptSubtitle: 'L’Héritage Vivant',
    description: 'Chaque feuille de pâte est étirée à la main avec une infinie délicatesse. Rien n’est mécanisé : la main du maître pâtissier insuffle l’âme à chaque bouchée.'
  },
  {
    title: 'Parfums Floraux d’Alambic',
    scriptSubtitle: 'L’Essence Délicate',
    description: 'Distillats artisanaux d’eau de rose de Zaghouan, fleur d’oranger du Cap Bon et eau d’églantier pure. Des notes subtiles qui enveloppent le palais sans jamais l’alourdir.'
  },
  {
    title: 'Packaging Haute Parfumerie',
    scriptSubtitle: 'L’Écrin Précieux',
    description: 'Papiers texturés ivoire, dorures à chaud or champagne, rubans satinés ou velours. Le plaisir commence dès le regard et le toucher du coffret.'
  }
];
