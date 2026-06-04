// src/data/staticData.js
// ============================================================
// MANNA PURE OIL — Static Product & Category Data
// Optimized & Cleaned Version
// WhatsApp: +91 78742 39595
// ============================================================

export const WHATSAPP_NUMBER = '917874239595';

// Helper function for asset URLs
const asset = (path) => new URL(path, import.meta.url).href;

export const categories = [
  {
    _id: 'cat1',
    name: 'Groundnut Oil',
    nameGu: 'મગફળી તેલ',
    image: asset('../assets/catagory/g1.png'),
  },
  {
    _id: 'cat2',
    name: 'Coconut Oil',
    nameGu: 'નારિયેળ તેલ',
    image: asset('../assets/catagory/co1.png'),
  },
  {
    _id: 'cat3',
    name: 'White Sesame Oil',
    nameGu: 'સફેદ તલ તેલ',
    image: asset('../assets/catagory/w1.png'),
  },
  {
    _id: 'cat4',
    name: 'Black Sesame Oil',
    nameGu: 'કાળા તલ તેલ',
    image: asset('../assets/catagory/bl1r.png'),
  },
  {
    _id: 'cat5',
    name: 'Mustard Oil',
    nameGu: 'રાઈ તેલ',
    image: asset('../assets/catagory/m1.png'),
  },
  {
    _id: 'cat6',
    name: 'Sunflower Oil',
    nameGu: 'સૂરજમુખી તેલ',
    image: asset('../assets/catagory/sun1.png'),
  },
  {
    _id: 'cat7',
    name: 'Castor Oil',
    nameGu: 'દિવેલ તેલ',
    image: asset('../assets/catagory/cos04.png'),
  },
  {
    _id: 'cat8',
    name: 'Gir Cow Ghee',
    nameGu: 'ગીર ગાય ઘી',
    image: asset('../assets/catagory/gh2.png'),
  },
  {
    _id: 'cat9',
    name: 'Pure Natural Honey',
    nameGu: 'શુદ્ધ કુદરતી મધ',
    image: asset('../assets/catagory/ho.png'),
  },
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
    description: `🌿 Cold Pressed Groundnut Oil

Pure. Natural. Nourishing.

Crafted from the finest handpicked groundnuts, this cold pressed oil is extracted using traditional methods that preserve its natural goodness. Free from heat and chemicals, it retains its rich aroma, golden color, and essential nutrients—just as nature intended.

✨ Why Choose It

🟡 Heart-Caring Goodness
Rich in healthy fats that support a balanced and active lifestyle

🟡 Naturally Nutritious
Packed with Vitamin E and powerful antioxidants

🟡 Strengthens from Within
Helps boost immunity and overall wellness

🟡 Beauty Beyond Cooking
Nourishes skin deeply and promotes healthy, shiny hair

🟡 Gentle & Wholesome
Easy to digest, perfect for everyday family meals

🌿 Perfect For

✔ Everyday Cooking – Frying, sautéing, and traditional recipes
✔ Authentic Flavors – Enhances the taste of Indian cuisine
✔ Healthy Living – A natural choice for conscious families
✔ Skin & Hair Care – A timeless ingredient for natural care rituals`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ મગફળી તેલ

શુદ્ધ. કુદરતી. પોષણસભર.

શ્રેષ્ઠ ગુણવત્તાની મગફળીમાંથી પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવવામાં આવેલ આ તેલ તેની કુદરતી ગુણવત્તા જાળવી રાખે છે. ગરમી અને કેમિકલ વગર તૈયાર થયેલું આ તેલ તેની સુગંધ, સોનેરી રંગ અને પોષક તત્વોને સાચવે છે — બિલકુલ કુદરત પ્રમાણે.

✨ શા માટે પસંદ કરશો?

🟡 હૃદય માટે લાભદાયક
સારા ફેટથી ભરપૂર, જે હેલ્ધી લાઈફસ્ટાઈલ માટે મદદરૂપ

🟡 કુદરતી પોષણ
વિટામિન E અને એન્ટીઑક્સિડન્ટથી ભરપૂર

🟡 શરીરને મજબૂત બનાવે છે
રોગપ્રતિકારક શક્તિ વધારવામાં મદદરૂપ

🟡 સુંદરતા માટે પણ ઉપયોગી
ચામડી અને વાળને પોષણ આપે છે

🟡 હળવું અને પાચનમાં સરળ
દૈનિક ખોરાક માટે ઉત્તમ

🌿 ઉપયોગ માટે યોગ્ય

✔ દૈનિક રસોઈ
✔ પરંપરાગત વાનગીઓ
✔ સ્વસ્થ જીવનશૈલી
✔ સ્કિન અને હેર કેર`,
    benefits:
      'Heart-Caring Goodness|Naturally Nutritious|Strengthens from Within|Beauty Beyond Cooking|Gentle & Wholesome',
    benefitsGu:
      'હૃદય માટે લાભદાયક|કુદરતી પોષણ|શરીરને મજબૂત બનાવે છે|ચામડી અને વાળ માટે સારું|પાચનમાં સરળ',
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
    description: `🌿 Cold Pressed Coconut Oil

Pure. Gentle. Naturally Revitalizing.

Carefully extracted from fresh, high-quality coconuts using the traditional cold pressed method, this oil preserves its natural aroma, light texture, and essential nutrients. Free from heat and chemicals, it delivers pure nourishment and tropical freshness in every drop.

✨ Why Choose It

🟡 Natural Energy & Wellness
Contains healthy fats that support an active and balanced lifestyle

🟡 Rich in Nutrients
A natural source of antioxidants that promote overall well-being

🟡 Boosts Immunity
Known for natural antibacterial and protective properties

🟡 Deep Skin & Hair Care
Hydrates skin deeply and strengthens hair from root to tip

🟡 Light & Easy to Digest
Gentle on the stomach, perfect for daily use`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ નાળિયેર તેલ

શુદ્ધ. નરમ. કુદરતી તાજગી.

તાજા અને ઉચ્ચ ગુણવત્તાવાળા નાળિયેરમાંથી પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવવામાં આવેલ આ તેલ તેની કુદરતી સુગંધ, હળવું ટેક્સચર અને પોષક તત્વોને જાળવી રાખે છે.

✨ શા માટે પસંદ કરશો?

🟡 કુદરતી ઊર્જા અને આરોગ્ય
🟡 પોષક તત્વોથી ભરપૂર
🟡 રોગપ્રતિકારક શક્તિ વધારે છે
🟡 ચામડી અને વાળ માટે ઊંડું પોષણ
🟡 હળવું અને સરળ પાચન`,
    benefits:
      'Boosts metabolism|Skin moisturizer|Hair growth|Antimicrobial|Cooking & beauty',
    benefitsGu:
      'Metabolism વધારે|ત્વચા moisturizer|વાળ વૃદ્ધિ|Antimicrobial|રસોઈ અને beauty',
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
    description: `🌿 Cold Pressed White Sesame Oil

Pure. Traditional. Deeply Nourishing.

Carefully extracted from the finest white sesame seeds using the traditional cold pressed method, this oil retains its natural richness, nutrients, and distinct aroma.

✨ Why Choose It

🟡 Heart & Body Wellness
🟡 Naturally Rich in Nutrients
🟡 Strength from Within
🟡 Timeless Beauty Care
🟡 Warm & Easy to Digest`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ સફેદ તલનું તેલ

શુદ્ધ. પરંપરાગત. ઊંડું પોષણ.

✨ શા માટે પસંદ કરશો?

🟡 હૃદય અને શરીર માટે સારું
🟡 પોષક તત્વોથી ભરપૂર
🟡 શરીરને મજબૂત બનાવે છે
🟡 સુંદરતા માટે ઉપયોગી
🟡 ગરમ તાસીર અને પાચનમાં સરળ`,
    benefits:
      'Rich in Calcium|Anti-inflammatory|Skin nourishment|Bone health|Heart healthy',
    benefitsGu:
      'Calcium ભરપૂર|Anti-inflammatory|ત્વચા poshan|હાડકા|હૃદય',
    uses: 'Cooking|Ayurvedic massage|Skin care|Traditional medicine',
    usesGu: 'રસોઈ|આયુર્વેદ|ત્વચા|પ્રાચીન ઉપચાર',
    sizes: [
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
        size: '1 Litre',
        price: 480,
        image: asset('../assets/product all/WHITE SESAME/1l.jpg'),
        images: [
          asset('../assets/product all/WHITE SESAME/1l.jpg'),
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
    description: `🌿 Cold Pressed Black Sesame Oil

Rich. Powerful. Deeply Restorative.

Known for its intense nutrients and traditional wellness benefits.

✨ Why Choose It

🟡 Powerful Nourishment
🟡 Rich in Minerals
🟡 Supports Bone Health
🟡 Promotes Dark Healthy Hair
🟡 Deep Skin Care

🌿 Perfect For

✔ Ayurvedic Use
✔ Traditional Cooking
✔ Hair Massage
✔ Winter Wellness`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ કાળા તલનું તેલ

સમૃદ્ધ. શક્તિશાળી. ઊંડું પોષણ આપનાર.

✨ શા માટે પસંદ કરો?

🟡 શક્તિશાળી પોષણ આપે
🟡 ખનિજ તત્વોમાં સમૃદ્ધ
🟡 હાડકાંની તંદુરસ્તી માટે સહાયક
🟡 ઘાટા અને સ્વસ્થ વાળ માટે લાભદાયક
🟡 ત્વચાની ઊંડાણથી સંભાળ કરે`,
    benefits:
      'Powerful antioxidants|Hair darkening|Bone strength|Ayurvedic healing|Anti-aging',
    benefitsGu:
      'Powerful antioxidants|વાળ કાળા|હાડકા|આયુર્વેદ|Anti-aging',
    uses: 'Ayurvedic massage|Hair care|Cooking|Traditional medicine',
    usesGu: 'આયુર્વેદ|વાળ|રસોઈ|ઉપચાર',
    sizes: [
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
        size: '1 Litre',
        price: 520,
        image: asset('../assets/product all/BLACK SESAME/1l.jpg'),
        images: [
          asset('../assets/product all/BLACK SESAME/1l.jpg'),
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
    description: `🌿 Cold Pressed Black Mustard Oil

Bold. Pure. Traditionally Powerful.

Extracted from the finest black mustard seeds using the traditional cold pressed method.

✨ Why Choose It

🟡 Heart & Circulation Support
🟡 Naturally Rich & Potent
🟡 Boosts Immunity
🟡 Strengthens Skin & Hair
🟡 Warming & Digestive-Friendly`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ કાળી સરસવનું તેલ

મજબૂત. શુદ્ધ. પરંપરાગત શક્તિ.

✨ શા માટે પસંદ કરશો?

🟡 હૃદય અને રક્તપ્રવાહ માટે સારું
🟡 કુદરતી રીતે શક્તિશાળી
🟡 રોગપ્રતિકારક શક્તિ વધારે છે
🟡 ચામડી અને વાળ મજબૂત બનાવે છે
🟡 ગરમ તાસીર અને પાચન માટે સારું`,
    benefits:
      'Rich in Omega-3|Antibacterial|Stimulates hair growth|Improves digestion|Cold & cough remedy',
    benefitsGu:
      'Omega-3 ભરપૂર|Antibacterial|વાળ વૃદ્ધિ|પાચન|શરદી ઉપચાર',
    uses: 'Cooking|Pickles|Body massage|Hair care|Ayurvedic treatment',
    usesGu: 'રસોઈ|Pickles|Body massage|વાળ|આયુર્વેદ',
    sizes: [
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
        size: '1 Litre',
        price: 280,
        image: asset('../assets/product all/MUSTARD/1l.jpg'),
        images: [
          asset('../assets/product all/MUSTARD/1l.jpg'),
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
    description: `🌿 Cold Pressed Sunflower Oil

Light. Pure. Naturally Nourishing.

✨ Why Choose It

🟡 Heart-Loving Lightness
🟡 Rich in Vitamin E
🟡 Supports Daily Wellness
🟡 Glow from Within
🟡 Light & Easy to Digest`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ સનફ્લાવર તેલ

હળવું. શુદ્ધ. કુદરતી પોષણ.

✨ શા માટે પસંદ કરશો?

🟡 હૃદય માટે હળવું અને સારું
🟡 વિટામિન E થી ભરપૂર
🟡 દૈનિક આરોગ્ય માટે ઉપયોગી
🟡 અંદરથી સુંદરતા આપે છે
🟡 હળવું અને સરળ પાચન`,
    benefits:
      'High Vitamin E|Light texture|High smoke point|Heart healthy|Chemical free',
    benefitsGu:
      'Vitamin E ભરપૂર|Light texture|High smoke point|હૃદય|Chemical free',
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
    description: `🌿 Cold Pressed Castor Oil

Pure. Intensive. Deeply Restorative.

✨ Why Choose It

🟡 Deep Nourishment
🟡 Supports Hair Growth
🟡 Skin Repair & Care
🟡 Natural Cleansing Properties
🟡 Powerful & Long-Lasting`,
    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ અરીંડાનું તેલ

શુદ્ધ. તીવ્ર પોષણ. ઊંડું પુનઃસ્થાપન.

✨ શા માટે પસંદ કરશો?

🟡 ઊંડું પોષણ આપે છે
🟡 વાળ વૃદ્ધિ માટે મદદરૂપ
🟡 ચામડી માટે રિપેર અને કેર
🟡 કુદરતી ક્લેન્સિંગ ગુણધર્મો
🟡 શક્તિશાળી અને લાંબા સમય સુધી ચાલે`,
    benefits:
      'Hair growth stimulator|Skin hydration|Joint pain relief|Natural laxative|Anti-fungal',
    benefitsGu:
      'વાળ વૃદ્ધિ|ત્વચા hydration|સાંધા|કબજિયાત|Anti-fungal',
    uses: 'Hair care|Skin care|Joint massage|Ayurvedic medicine',
    usesGu: 'વાળ|ત્વચા|સાંધા|આયુર્વેદ',
    sizes: [
      {
        size: '250 ML',
        price: 70,
        image: asset('../assets/product all/castor/250ml.jpeg'),
        images: [
          asset('../assets/product all/castor/250ml.jpeg'),
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
        size: '1 Litre',
        price: 250,
        image: asset('../assets/product all/castor/ca1l.jpeg'),
        images: [
          asset('../assets/product all/castor/ca1l.jpeg'),
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
    description: `🌿 Gir Cow Ghee (Bilona Method)

Pure. Sacred. Traditionally Nourishing.

✨ Why Choose It

🟡 A2 Goodness
🟡 Rich in Nutrients
🟡 Boosts Immunity
🟡 Enhances Digestion
🟡 Holistic Wellness`,
    descriptionGu: `🌿 ગીર ગાયનું ઘી

શુદ્ધ. પવિત્ર. પરંપરાગત પોષણ.

✨ શા માટે પસંદ કરશો?

🟡 A2 ગુણવત્તા
🟡 પોષક તત્વોથી ભરપૂર
🟡 રોગપ્રતિકારક શક્તિ વધારશે
🟡 પાચન સુધારે છે
🟡 આયુર્વેદિક લાભ`,
    benefits:
      'A2 protein|Boosts immunity|Improves digestion|Rich in vitamins|Traditional Bilona method',
    benefitsGu:
      'A2 protein|Immunity|Digestion|Vitamins|Bilona method',
    uses: 'Cooking|Dal tadka|Chapati|Ayurvedic medicine|Baby food',
    usesGu: 'રસોઈ|Dal tadka|ચપાટી|આયુર્વેદ|Baby food',
    sizes: [
      {
        size: '500 GRAM',
        price: 1250,
        image: asset('../assets/product all/GIR COW/1l.png'),
        images: [
          asset('../assets/product all/GIR COW/1l.png'),
        ],
      },
      {
        size: '1 KG',
        price: 2400,
        image: asset('../assets/product all/GIR COW/1l.jpeg'),
        images: [
          asset('../assets/product all/GIR COW/1l.jpeg'),
        ],
      },
    ],
    inStock: true,
    featured: false,
  },
];

// Helper: WhatsApp order message
export const getWhatsAppOrderUrl = (product, size, quantity = 1) => {
  const msg = `Hello! I want to order:\n*${product.name}*\nSize: ${size?.size || ''}\nPrice: ₹${size?.price || product.sizes?.[0]?.price}\nQty: ${quantity}\n\nPlease confirm my order.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
