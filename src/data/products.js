// ============================================================
// MANNA PURE OIL — Static Product & Category Data
// Backend વગર — hardcoded data
// WhatsApp: +91 78742 39595
// ============================================================

export const WHATSAPP_NUMBER = '917874239595';

// Helper for cleaner image imports
const asset = (path) => new URL(path, import.meta.url).href;

export const categories = [
  { _id: 'cat1', name: 'Groundnut Oil',    nameGu: 'મગફળી તેલ',    image: '../assets/catagory/g1.png' },
  { _id: 'cat2', name: 'Coconut Oil',      nameGu: 'નારિયેળ તેલ',  image: '../assets/catagory/co1.png' },
  { _id: 'cat3', name: 'White Sesame Oil', nameGu: 'સફેદ તલ તેલ',  image: '../assets/catagory/w1.png' },
  { _id: 'cat4', name: 'Black Sesame Oil', nameGu: 'કાળા તલ તેલ',  image: '../assets/catagory/bl1r.png' },
  { _id: 'cat5', name: 'Mustard Oil',      nameGu: 'રાઈ તેલ',       image: '../assets/catagory/m1.png' },
  { _id: 'cat6', name: 'Sunflower Oil',    nameGu: 'સૂરજમુખી તેલ', image: '../assets/catagory/sun1.png' },
  { _id: 'cat7', name: 'Castor Oil',       nameGu: 'દિવેલ તેલ',    image: '../assets/catagory/cos04.png' },
  { _id: 'cat8', name: 'Gir Cow Ghee',     nameGu: 'ગીર ગાય ઘી',   image: '../assets/catagory/gh2.png' },
  { _id: 'cat9', name: 'Pure Natural Honey', nameGu: 'શુદ્ધ કુદરતી મધ', image: '../assets/catagory/ho.png' },
];

export const products = [
  // ──────── GROUNDNUT OIL ────────
  {
    _id: 'p1',
    name: 'Cold Pressed Groundnut Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ મગફળી તેલ',
    category: { _id: 'cat1', name: 'Groundnut Oil' },
    image: asset('../assets/product all/groundnut/1l.jpg'),
    images: [
      asset('../assets/product all/groundnut/1l.jpg'),
      asset('../assets/product all/groundnut/1lbac.jpg'),
    ],
    description: `🌿 Cold Pressed Groundnut Oil\n\nPure. Natural. Nourishing.\n\nCrafted from the finest handpicked groundnuts...`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ મગફળી તેલ\n\nશુદ્ધ. કુદરતી. પોષણસભર...`,
    benefits: 'Heart-Caring Goodness|Naturally Nutritious|Strengthens from Within|Beauty Beyond Cooking|Gentle & Wholesome',
    benefitsGu: 'હૃદય માટે લાભદાયક|કુદરતી પોષણ|શરીરને મજબૂત બનાવે છે|ચામડી અને વાળ માટે સારું|પાચનમાં સરળ',
    uses: 'Everyday Cooking|Frying & Sautéing|Traditional Recipes|Skin Care|Hair Care',
    usesGu: 'દૈનિક રસોઈ|તળવું અને સાંતળવું|પરંપરાગત વાનગીઓ|સ્કિન કેર|હેર કેર',
    sizes: [
      {
        size: '1 Litre',
        price: 300,
        image: asset('../assets/product all/groundnut/1l.jpg'),
        images: [
          asset('../assets/product all/groundnut/1l.jpg'),
          asset('../assets/product all/groundnut/1lbac.jpg'),
        ],
      },
      {
        size: '5 Litre',
        price: 1350,
        image: asset('../assets/product all/groundnut/GO5LF.jpeg'),
        images: [
          asset('../assets/product all/groundnut/GO5LF.jpeg'),
          asset('../assets/product all/groundnut/5lb.jpg'),
        ],
      },
      {
        size: '15 Litre',
        price: 3750,
        image: asset('../assets/product all/groundnut/15l.jpg'),
        images: [
          asset('../assets/product all/groundnut/15l.jpg'),
        ],
      },
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
    image: asset('../assets/product all/coconut/1l.jpg'),
    images: [
      asset('../assets/product all/coconut/1l.jpg'),
      asset('../assets/product all/coconut/1lb.jpg'),
    ],
    description: `🌿 Cold Pressed Coconut Oil\n\nPure. Gentle. Naturally Revitalizing...`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ નાળિયેર તેલ\n\nશુદ્ધ. નરમ. કુદરતી તાજગી...`,
    benefits: 'Boosts metabolism|Skin moisturizer|Hair growth|Antimicrobial|Cooking & beauty',
    benefitsGu: 'Metabolism વધારે|ત્વચા moisturizer|વાળ વૃદ્ધિ|Antimicrobial|રસોઈ અને beauty',
    uses: 'Cooking|Skin care|Hair oil|Baby massage|Oil pulling',
    usesGu: 'રસોઈ|ત્વચા|વાળ|બાળ મસાજ|Oil pulling',
    sizes: [
      {
        size: '1 Litre',
        price: 600,
        image: asset('../assets/product all/coconut/1l.jpg'),
        images: [
          asset('../assets/product all/coconut/1l.jpg'),
          asset('../assets/product all/coconut/1lb.jpg'),
        ],
      },
      {
        size: '250ml',
        price: 170,
        image: asset('../assets/product all/coconut/250ml.jpg'),
        images: [
          asset('../assets/product all/coconut/250ml.jpg'),
          asset('../assets/product all/coconut/1lb.jpg'),
        ],
      },
      {
        size: '500ml',
        price: 320,
        image: asset('../assets/product all/coconut/500ml.jpg'),
        images: [
          asset('../assets/product all/coconut/500ml.jpg'),
          asset('../assets/product all/coconut/1lb.jpg'),
        ],
      },
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
    image: asset('../assets/product all/WHITE SESAME/1l.jpg'),
    images: [
      asset('../assets/product all/WHITE SESAME/1l.jpg'),
      asset('../assets/product all/WHITE SESAME/back.jpg'),
    ],
    description: `🌿 Cold Pressed White Sesame Oil\n\nPure. Traditional. Deeply Nourishing...`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ સફેદ તલનું તેલ\n\nશુદ્ધ. પરંપરાગત. ઊંડું પોષણ...`,
    benefits: 'Rich in Calcium|Anti-inflammatory|Skin nourishment|Bone health|Heart healthy',
    benefitsGu: 'Calcium ભરપૂર|Anti-inflammatory|ત્વચા poshan|હાડકા|હૃદય',
    uses: 'Cooking|Ayurvedic massage|Skin care|Traditional medicine',
    usesGu: 'રસોઈ|આયુર્વેદ|ત્વચા|પ્રાચીન ઉપચાર',
    sizes: [
      {
        size: '1 Litre',
        price: 480,
        image: asset('../assets/product all/WHITE SESAME/1l.jpg'),
        images: [
          asset('../assets/product all/WHITE SESAME/1l.jpg'),
          asset('../assets/product all/WHITE SESAME/back.jpg'),
        ],
      },
      {
        size: '250ml',
        price: 130,
        image: asset('../assets/product all/WHITE SESAME/250ml.jpg'),
        images: [
          asset('../assets/product all/WHITE SESAME/250ml.jpg'),
          asset('../assets/product all/WHITE SESAME/back.jpg'),
        ],
      },
      {
        size: '500ml',
        price: 250,
        image: asset('../assets/product all/WHITE SESAME/500ml.jpg'),
        images: [
          asset('../assets/product all/WHITE SESAME/500ml.jpg'),
          asset('../assets/product all/WHITE SESAME/back.jpg'),
        ],
      },
      {
        size: '5 Litre',
        price: 2250,
        image: asset('../assets/product all/WHITE SESAME/5l.jpg'),
        images: [
          asset('../assets/product all/WHITE SESAME/5l.jpg'),
          asset('../assets/product all/WHITE SESAME/5back.jpg'),
        ],
      },
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
    image: asset('../assets/product all/BLACK SESAME/1l.jpg'),
    images: [
      asset('../assets/product all/BLACK SESAME/1l.jpg'),
      asset('../assets/product all/BLACK SESAME/back.jpg'),
    ],
    description: `🌿 Cold Pressed Black Sesame Oil\n\nRich. Powerful. Deeply Restorative...`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ કાળા તલનું તેલ\n\nસમૃદ્ધ. શક્તિશાળી. ઊંડું પોષણ આપનાર...`,
    benefits: 'Powerful antioxidants|Hair darkening|Bone strength|Ayurvedic healing|Anti-aging',
    benefitsGu: 'Powerful antioxidants|વાળ કાળા|હાડકા|આયુર્વેદ|Anti-aging',
    uses: 'Ayurvedic massage|Hair care|Cooking|Traditional medicine',
    usesGu: 'આયુર્વેદ|વાળ|રસોઈ|ઉપચાર',
    sizes: [
      {
        size: '1 Litre',
        price: 520,
        image: asset('../assets/product all/BLACK SESAME/1l.jpg'),
        images: [
          asset('../assets/product all/BLACK SESAME/1l.jpg'),
          asset('../assets/product all/BLACK SESAME/back.jpg'),
        ],
      },
      {
        size: '250ml',
        price: 140,
        image: asset('../assets/product all/BLACK SESAME/250ml.jpg'),
        images: [
          asset('../assets/product all/BLACK SESAME/250ml.jpg'),
          asset('../assets/product all/BLACK SESAME/back.jpg'),
        ],
      },
      {
        size: '500ml',
        price: 270,
        image: asset('../assets/product all/BLACK SESAME/500ml.jpg'),
        images: [
          asset('../assets/product all/BLACK SESAME/500ml.jpg'),
          asset('../assets/product all/BLACK SESAME/back.jpg'),
        ],
      },
      {
        size: '5 Litre',
        price: 2450,
        image: asset('../assets/product all/BLACK SESAME/1l.jpg'),
        images: [
          asset('../assets/product all/BLACK SESAME/1l.jpg'),
          asset('../assets/product all/BLACK SESAME/back.jpg'),
        ],
      },
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
    image: asset('../assets/product all/MUSTARD/1l.jpg'),
    images: [
      asset('../assets/product all/MUSTARD/1l.jpg'),
      asset('../assets/product all/MUSTARD/back.jpg'),
    ],
    description: `🌿 Cold Pressed Black Mustard Oil\n\nBold. Pure. Traditionally Powerful...`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ કાળી સરસવનું તેલ\n\nમજબૂત. શુદ્ધ. પરંપરાગત શક્તિ...`,
    benefits: 'Rich in Omega-3|Antibacterial|Stimulates hair growth|Improves digestion|Cold & cough remedy',
    benefitsGu: 'Omega-3 ભરપૂર|Antibacterial|વાળ વૃદ્ધિ|પાચન|શરદી ઉપચાર',
    uses: 'Cooking|Pickles|Body massage|Hair care|Ayurvedic treatment',
    usesGu: 'રસોઈ|Pickles|Body massage|વાળ|આયુર્વેદ',
    sizes: [
      {
        size: '1 Litre',
        price: 280,
        image: asset('../assets/product all/MUSTARD/1l.jpg'),
        images: [
          asset('../assets/product all/MUSTARD/1l.jpg'),
          asset('../assets/product all/MUSTARD/back.jpg'),
        ],
      },
      {
        size: '500ml',
        price: 150,
        image: asset('../assets/product all/MUSTARD/500ml.png'),
        images: [
          asset('../assets/product all/MUSTARD/500ml.png'),
          asset('../assets/product all/MUSTARD/back.jpg'),
        ],
      },
      {
        size: '5 Litre',
        price: 1250,
        image: asset('../assets/product all/MUSTARD/500ml.png'),
        images: [
          asset('../assets/product all/MUSTARD/500ml.png'),
          asset('../assets/product all/MUSTARD/back.jpg'),
        ],
      },
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
    image: asset('../assets/product all/SUNFLOWER/1l.jpg'),
    images: [
      asset('../assets/product all/SUNFLOWER/1l.jpg'),
      asset('../assets/product all/SUNFLOWER/back.jpg'),
    ],
    description: `🌿 Cold Pressed Sunflower Oil\n\nLight. Pure. Naturally Nourishing...`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ સનફ્લાવર તેલ\n\nહળવું. શુદ્ધ. કુદરતી પોષણ...`,
    benefits: 'High Vitamin E|Light texture|High smoke point|Heart healthy|Chemical free',
    benefitsGu: 'Vitamin E ભરપૂર|Light texture|High smoke point|હૃદય|Chemical free',
    uses: 'Daily cooking|Frying|Salad dressing|Skin care',
    usesGu: 'રોજ રસોઈ|Frying|Salad|ત્વચા',
    sizes: [
      {
        size: '1 Litre',
        price: 270,
        image: asset('../assets/product all/SUNFLOWER/1l.jpg'),
        images: [
          asset('../assets/product all/SUNFLOWER/1l.jpg'),
          asset('../assets/product all/SUNFLOWER/back.jpg'),
        ],
      },
      {
        size: '5 Litre',
        price: 1230,
        image: asset('../assets/product all/SUNFLOWER/5l.jpg'),
        images: [
          asset('../assets/product all/SUNFLOWER/5l.jpg'),
          asset('../assets/product all/SUNFLOWER/back5.jpg'),
        ],
      },
      {
        size: '15 Litre',
        price: 3450,
        image: asset('../assets/product all/SUNFLOWER/5l.jpg'),
        images: [
          asset('../assets/product all/SUNFLOWER/5l.jpg'),
          asset('../assets/product all/SUNFLOWER/back5.jpg'),
        ],
      },
    ],
    inStock: true,
    featured: false,
  },

  // ──────── CASTOR OIL ────────
  {
    _id: 'p7',
    name: 'Cold Pressed Castor Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ દિવેલ તેલ',
    category: { _id: 'cat7', name: 'Castor Oil' },
    image: asset('../assets/product all/castor/ca1l.jpeg'),
    images: [
      asset('../assets/product all/castor/ca1l.jpeg'),
      asset('../assets/product all/castor/back.jpeg'),
    ],
    description: `🌿 Cold Pressed Castor Oil\n\nPure. Intensive. Deeply Restorative...`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ અરીંડાનું તેલ (Castor Oil)\n\nશુદ્ધ. તીવ્ર પોષણ...`,
    benefits: 'Hair growth stimulator|Skin hydration|Joint pain relief|Natural laxative|Anti-fungal',
    benefitsGu: 'વાળ વૃદ્ધિ|ત્વચા hydration|સાંધા|કબજિયાત|Anti-fungal',
    uses: 'Hair care|Skin care|Joint massage|Ayurvedic medicine',
    usesGu: 'વાળ|ત્વચા|સાંધા|આયુર્વેદ',
    sizes: [
      {
        size: '1 Litre',
        price: 250,
        image: asset('../assets/product all/castor/ca1l.jpeg'),
        images: [
          asset('../assets/product all/castor/ca1l.jpeg'),
          asset('../assets/product all/castor/back.jpeg'),
        ],
      },
      {
        size: '500 ML',
        price: 130,
        image: asset('../assets/product all/castor/500ml.jpeg'),
        images: [
          asset('../assets/product all/castor/500ml.jpeg'),
          asset('../assets/product all/castor/back.jpeg'),
        ],
      },
      {
        size: '250 ML',
        price: 70,
        image: asset('../assets/product all/castor/250ml.jpeg'),
        images: [
          asset('../assets/product all/castor/250ml.jpeg'),
          asset('../assets/product all/castor/back.jpeg'),
        ],
      },
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
    image: asset('../assets/product all/GIR COW/1l.jpeg'),
    images: [
      asset('../assets/product all/GIR COW/1l.jpeg'),
    ],
    description: `🌿 Gir Cow Ghee (Bilona Method)\n\nPure. Sacred. Traditionally Nourishing...`,
    descriptionGu: `🌿 ગીર ગાયનું ઘી\n\nશુદ્ધ. પવિત્ર. પરંપરાગત પોષણ...`,
    benefits: 'A2 protein|Boosts immunity|Improves digestion|Rich in vitamins|Traditional Bilona method',
    benefitsGu: 'A2 protein|Immunity|Digestion|Vitamins|Bilona method',
    uses: 'Cooking|Dal tadka|Chapati|Ayurvedic medicine|Baby food',
    usesGu: 'રસોઈ|Dal tadka|ચપાટી|આયુર્વેદ|Baby food',
    sizes: [
      {
        size: '1 KG',
        price: 2400,
        image: asset('../assets/product all/GIR COW/1l.jpeg'),
        images: [asset('../assets/product all/GIR COW/1l.jpeg')],
      },
      {
        size: '500 GRAM',
        price: 1250,
        image: asset('../assets/product all/GIR COW/1l.png'),
        images: [
          asset('../assets/product all/GIR COW/1l.png'),
        ],
      },
    ],
    inStock: true,
    featured: false,
  },
];

// WhatsApp Order Function
export const getWhatsAppOrderUrl = (product, size, quantity = 1) => {
  const msg = `Hello! I want to order:\n*${product.name}*\nSize: ${size?.size || ''}\nPrice: ₹${size?.price}\nQty: ${quantity}\n\nPlease confirm my order.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
```

---

### આ Code ને કેવી રીતે વાપરવું?

**Product Card માં આ રીતે img ટેગ વાપરો** (આ ખૂબ જરૂરી છે load speed માટે):

```jsx
<img
  src={product.image}
  alt={product.name}
  loading="lazy"
  decoding="async"
  width="280"
  height="280"
  style={{ objectFit: 'cover' }}
/>
```

જો તમે આ પણ જોઈએ તો હું **OptimizedImage Component** પણ આપી શકું છું.

કોઈ પ્રોબ્લેમ હોય તો કહેજો!
