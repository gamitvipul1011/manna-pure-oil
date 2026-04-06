// ============================================================
// MANNA PURE OIL — Static Product & Category Data
// Backend વગર — hardcoded data
// WhatsApp: +91 78742 39595
// ============================================================

export const WHATSAPP_NUMBER = '917874239595';

export const categories = [
  { _id: 'cat1', name: 'Groundnut Oil',    nameGu: 'મગફળી તેલ',    image: '/images/cat_groundnut.jpg' },
  { _id: 'cat2', name: 'Coconut Oil',      nameGu: 'નારિયેળ તેલ',  image: '/images/cat_coconut.jpg' },
  { _id: 'cat3', name: 'White Sesame Oil', nameGu: 'સફેદ તલ તેલ',  image: '/images/cat_white_sesame.jpg' },
  { _id: 'cat4', name: 'Black Sesame Oil', nameGu: 'કાળા તલ તેલ',  image: '/images/cat_black_sesame.jpg' },
  { _id: 'cat5', name: 'Mustard Oil',      nameGu: 'રાઈ તેલ',       image: '/images/cat_mustard.jpg' },
  { _id: 'cat6', name: 'Sunflower Oil',    nameGu: 'સૂરજમુખી તેલ', image: '/images/cat_sunflower.jpg' },
  { _id: 'cat7', name: 'Castor Oil',       nameGu: 'દિવેલ',          image: '/images/cat_castor.jpg' },
  { _id: 'cat8', name: 'Gir Cow Ghee',    nameGu: 'ગીર ગાય ઘી',   image: '/images/cat_ghee.jpg' },
  { _id: 'cat9', name: 'Pure Natural Honey',nameGu: 'શુદ્ધ કુદરતી મધ', image: '../assets/catagory/ho.png' },
];

export const products = [
  // ──────── GROUNDNUT OIL ────────
  {
    _id: 'p1',
    name: 'Cold Pressed Groundnut Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ મગફળી તેલ',
    category: { _id: 'cat1', name: 'Groundnut Oil' },
    image: new URL('../assets/manna 1l/groundunt1l.jpeg', import.meta.url).href,
    images: [
      new URL('../assets/manna 1l/groundunt1l.jpeg', import.meta.url).href,
      new URL('../assets/GROUNDNUT BACK.jpg', import.meta.url).href,
    ],
    description: 'Pure cold pressed groundnut oil extracted using traditional wooden press. Rich in Vitamin E and natural antioxidants. No chemicals, no heat.',
    descriptionGu: 'પ્રાચીન લાકડાની ઘાણી વડે કઢેલું શુદ્ધ મગફળી તેલ. Vitamin E અને antioxidants ભરપૂર. કોઈ રસાયણ નહીં.',
    benefits: 'Heart healthy|Rich in Vitamin E|Improves immunity|Traditional taste|Chemical free',
    benefitsGu: 'હૃદય માટે સ્વસ્થ|Vitamin E ભરપૂર|રોગ પ્રતિકારક|પ્રાચીન સ્વાદ|કેમિકલ મુક્ત',
    uses: 'Daily cooking|Deep frying|Ayurvedic massage|Hair care',
    usesGu: 'રોજ રસોઈ|Deep frying|આયુર્વેદિક મસાજ|વાળ સ્વાસ્થ્ય',
    sizes: [
      { size: '500ml', price: 220, images: [new URL('../assets/GROUND NUTOIL.jpg', import.meta.url).href] },
      { size: '1 Litre', price: 400, images: [new URL('../assets/GROUND NUTOIL.jpg', import.meta.url).href] },
      { size: '5 Litre', price: 1800, images: [new URL('../assets/GROUND NUTOIL.jpg', import.meta.url).href] },
    ],
    inStock: true,
    featured: true,
  },

  // ──────── COCONUT OIL ────────
  {
    _id: 'p2',
    name: 'Cold Pressed Coconut Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ નારિયેળ તેલ',
    category: { _id: 'cat2', name: 'Coconut Oil' },
    image: new URL('../assets/manna 1l/coconut1l.jpeg', import.meta.url).href,
    images: [
      new URL('../assets/manna 1l/coconut1l.jpeg', import.meta.url).href,
      new URL('../assets/COCONUT_250.jpg', import.meta.url).href,
      new URL('../assets/COCONUT_500.jpg', import.meta.url).href,
      new URL('../assets/COCONUT_BACK.jpg', import.meta.url).href,
    ],
    description: 'Pure virgin coconut oil cold pressed without any heat. Ideal for cooking, skin care and hair care. Natural coconut fragrance preserved.',
    descriptionGu: 'શુદ્ધ Virgin Coconut Oil — heat વગર cold press. રસોઈ, ત્વચા અને વાળ માટે ઉત્તમ. કુદરતી સુગંધ preserved.',
    benefits: 'Boosts metabolism|Skin moisturizer|Hair growth|Antimicrobial|Cooking & beauty',
    benefitsGu: 'Metabolism વધારે|ત્વચા moisturizer|વાળ વૃદ્ધિ|Antimicrobial|રસોઈ અને beauty',
    uses: 'Cooking|Skin care|Hair oil|Baby massage|Oil pulling',
    usesGu: 'રસોઈ|ત્વચા|વાળ|બાળ મસાજ|Oil pulling',
    sizes: [
      { size: '250ml', price: 180, images: [new URL('../assets/COCONUT_250.jpg', import.meta.url).href] },
      { size: '500ml', price: 320, images: [new URL('../assets/COCONUT_500.jpg', import.meta.url).href] },
      { size: '1 Litre', price: 580, images: [new URL('../assets/manna 1l/coconut1l.jpeg', import.meta.url).href] },
    ],
    inStock: true,
    featured: true,
  },

  // ──────── WHITE SESAME OIL ────────
  {
    _id: 'p3',
    name: 'Cold Pressed White Sesame Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ સફેદ તલ તેલ',
    category: { _id: 'cat3', name: 'White Sesame Oil' },
    image: new URL('../assets/manna 1l/whitesesame1l.jpeg', import.meta.url).href,
    images: [
      new URL('../assets/manna 1l/whitesesame1l.jpeg', import.meta.url).href,
      new URL('../assets/WHITE_500.jpg', import.meta.url).href,
      new URL('../assets/WHITE_250.jpg', import.meta.url).href,
      new URL('../assets/WHITE_BACK.jpg', import.meta.url).href,
    ],
    description: 'Premium white sesame oil cold pressed using traditional methods. Rich in calcium, zinc and antioxidants. Perfect for cooking and massage.',
    descriptionGu: 'Premium સફેદ તલ તેલ — traditional cold press. Calcium, Zinc ભરપૂર. રસોઈ અને massage.',
    benefits: 'Rich in Calcium|Anti-inflammatory|Skin nourishment|Bone health|Heart healthy',
    benefitsGu: 'Calcium ભરપૂર|Anti-inflammatory|ત્વચા poshan|હાડકા|હૃદય',
    uses: 'Cooking|Ayurvedic massage|Skin care|Traditional medicine',
    usesGu: 'રસોઈ|આયુર્વેદ|ત્વચા|પ્રાચીન ઉપચાર',
    sizes: [
      { size: '250ml', price: 200, images: [new URL('../assets/manna 1l/whitesesame1l.jpeg', import.meta.url).href] },
      { size: '500ml', price: 370, images: [new URL('../assets/WHITE_500.jpg', import.meta.url).href] },
      { size: '1 Litre', price: 700, images: [new URL('../assets/WHITE_Ltr.jpg', import.meta.url).href] },
      { size: '5 Litre', price: 3200, images: [new URL('../assets/WHITE_5L.jpg', import.meta.url).href] },
    ],
    inStock: true,
    featured: false,
  },

  // ──────── BLACK SESAME OIL ────────
  {
    _id: 'p4',
    name: 'Cold Pressed Black Sesame Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ કાળા તલ તેલ',
    category: { _id: 'cat4', name: 'Black Sesame Oil' },
    image: new URL('../assets/manna 1l/blacksesame1l.jpeg', import.meta.url).href,
    images: [
      new URL('../assets/blacksesame1l.jpeg', import.meta.url).href,
      new URL('../assets/bl_s500m.jpeg', import.meta.url).href,
      new URL('../assets/bl_back.jpeg', import.meta.url).href,
    ],
    description: 'Pure black sesame oil with powerful antioxidants. Traditional cold press method preserves all nutrients. Ideal for Ayurvedic use and cooking.',
    descriptionGu: 'શુદ્ધ કાળા તલ તેલ — powerful antioxidants. Traditional cold press. આયુર્વેદ અને રસોઈ.',
    benefits: 'Powerful antioxidants|Hair darkening|Bone strength|Ayurvedic healing|Anti-aging',
    benefitsGu: 'Powerful antioxidants|વાળ કાળા|હાડકા|આયુર્વેદ|Anti-aging',
    uses: 'Ayurvedic massage|Hair care|Cooking|Traditional medicine',
    usesGu: 'આયુર્વેદ|વાળ|રસોઈ|ઉપચાર',
    sizes: [
      { size: '250ml', price: 240, images: [new URL('../assets/bl250m.jpeg', import.meta.url).href] },
      { size: '500ml', price: 430, images: [new URL('../assets/bl_s500m.jpeg', import.meta.url).href] },
      { size: '1 Litre', price: 800, images: [new URL('../assets/bl_sesam1l.jpeg', import.meta.url).href] },
    ],
    inStock: true,
    featured: false,
  },

  // ──────── MUSTARD OIL ────────
  {
    _id: 'p5',
    name: 'Cold Pressed Mustard Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ રાઈ તેલ',
    category: { _id: 'cat5', name: 'Mustard Oil' },
    image: new URL('../assets/manna 1l/mustard1l.jpeg', import.meta.url).href,
    images: [
      new URL('../assets/manna 1l/mustard1l.jpeg', import.meta.url).href,
      new URL('../assets/musterd oil 500.jpg', import.meta.url).href,
      new URL('../assets/musterd oil back.jpg', import.meta.url).href,
    ],
    description: 'Traditional cold pressed mustard oil with natural pungent flavour. Rich in omega-3 fatty acids. Ideal for pickles, cooking and body massage.',
    descriptionGu: 'Traditional cold press રાઈ તેલ — natural pungent flavour. Omega-3 ભરપૂર. Pickles, રસોઈ અને massage.',
    benefits: 'Rich in Omega-3|Antibacterial|Stimulates hair growth|Improves digestion|Cold & cough remedy',
    benefitsGu: 'Omega-3 ભરપૂર|Antibacterial|વાળ વૃદ્ધિ|પાચન|શરદી ઉપચાર',
    uses: 'Cooking|Pickles|Body massage|Hair care|Ayurvedic treatment',
    usesGu: 'રસોઈ|Pickles|Body massage|વાળ|આયુર્વેદ',
    sizes: [
      { size: '500ml', price: 180, images: [new URL('../assets/musterd oil 500.jpg', import.meta.url).href] },
      { size: '1 Litre', price: 330, images: [new URL('../assets/musterd oil 1l.jpg', import.meta.url).href] },
    ],
    inStock: true,
    featured: false,
  },

  // ──────── SUNFLOWER OIL ────────
  {
    _id: 'p6',
    name: 'Cold Pressed Sunflower Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ સૂરજમુખી તેલ',
    category: { _id: 'cat6', name: 'Sunflower Oil' },
    image: new URL('../assets/manna 1l/sunflower1l.jpeg', import.meta.url).href,
    images: [
      new URL('../assets/manna 1l/sunflower1l.jpeg', import.meta.url).href,
      new URL('../assets/sun flower 5Ltr.jpg', import.meta.url).href,
      new URL('../assets/sun flower back.jpg', import.meta.url).href,
    ],
    description: 'Pure cold pressed sunflower oil. Light texture with high smoke point. Rich in Vitamin E. Ideal for daily cooking and frying.',
    descriptionGu: 'શુદ્ધ cold pressed સૂરજમુખી તેલ. Light texture, high smoke point. Vitamin E ભરપૂર.',
    benefits: 'High Vitamin E|Light texture|High smoke point|Heart healthy|Chemical free',
    benefitsGu: 'Vitamin E ભરપૂર|Light texture|High smoke point|હૃદય|Chemical free',
    uses: 'Daily cooking|Frying|Salad dressing|Skin care',
    usesGu: 'રોજ રસોઈ|Frying|Salad|ત્વચા',
    sizes: [
      { size: '1 Litre', price: 280, images: [new URL('../assets/sun flower 1l.jpg', import.meta.url).href] },
      { size: '5 Litre', price: 1300, images: [new URL('../assets/sun flower 5Ltr.jpg', import.meta.url).href] },
    ],
    inStock: true,
    featured: false,
  },

  // ──────── CASTOR OIL ────────
  {
    _id: 'p7',
    name: 'Cold Pressed Castor Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ દિવેલ',
    category: { _id: 'cat7', name: 'Castor Oil' },
    image: new URL('../assets/castor.jpeg', import.meta.url).href,
    images: [new URL('../assets/castor.jpeg', import.meta.url).href],
    description: 'Pure cold pressed castor oil. Thick and nutrient-rich. Ideal for hair growth, skin care, joint pain and constipation.',
    descriptionGu: 'શુદ્ધ cold pressed દિવેલ. Thick અને nutrient-rich. વાળ, ત્વચા, સાંધા અને કબજિયાત.',
    benefits: 'Hair growth stimulator|Skin hydration|Joint pain relief|Natural laxative|Anti-fungal',
    benefitsGu: 'વાળ વૃદ્ધિ|ત્વચા hydration|સાંધા|કબજિયાત|Anti-fungal',
    uses: 'Hair care|Skin care|Joint massage|Ayurvedic medicine',
    usesGu: 'વાળ|ત્વચા|સાંધા|આયુર્વેદ',
    sizes: [
      { size: '200ml', price: 150, images: [new URL('../assets/castor.jpeg', import.meta.url).href] },
      { size: '500ml', price: 320, images: [new URL('../assets/castor.jpeg', import.meta.url).href] },
    ],
    inStock: true,
    featured: false,
  },

  // ──────── GIR COW GHEE ────────
  {
    _id: 'p8',
    name: 'Gir Cow Ghee (A2)',
    nameGu: 'ગીર ગાય ઘી (A2)',
    category: { _id: 'cat8', name: 'Gir Cow Ghee' },
    image: new URL('../assets/../assets/ghee1.jpeg', import.meta.url).href,
    images: [
      new URL('../assets/ghee1.jpeg', import.meta.url).href,
      new URL('../assets/ghee 2.jpeg', import.meta.url).href,
      new URL('../assets/ghee3.jpeg', import.meta.url).href,
      new URL('../assets/ghee4.jpeg', import.meta.url).href,
    ],
    description: 'Pure A2 Gir Cow Ghee made using traditional Bilona method. Rich golden colour, divine aroma. Boosts immunity and aids digestion.',
    descriptionGu: 'શુદ્ધ A2 ગીર ગાય ઘી — Bilona method. Golden colour, divine aroma. Immunity અને digestion.',
    benefits: 'A2 protein|Boosts immunity|Improves digestion|Rich in vitamins|Traditional Bilona method',
    benefitsGu: 'A2 protein|Immunity|Digestion|Vitamins|Bilona method',
    uses: 'Cooking|Dal tadka|Chapati|Ayurvedic medicine|Baby food',
    usesGu: 'રસોઈ|Dal tadka|ચપાટી|આયુર્વેદ|Baby food',
    sizes: [
      { size: '250ml', price: 480, images: [new URL('../assets/ghee 2.jpeg', import.meta.url).href] },
      { size: '500ml', price: 900, images: [new URL('../assets/ghee1.jpeg', import.meta.url).href] },
      { size: '1 Litre', price: 1700, images: [new URL('../assets/ghee3.jpeg', import.meta.url).href] },
    ],
    inStock: true,
    featured: true,
  },
];

// Helper: WhatsApp order message
export const getWhatsAppOrderUrl = (product, size, quantity = 1) => {
  const msg = `Hello! I want to order:\n*${product.name}*\nSize: ${size?.size || ''}\nPrice: ₹${size?.price || product.sizes?.[0]?.price}\nQty: ${quantity}\n\nPlease confirm my order.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
