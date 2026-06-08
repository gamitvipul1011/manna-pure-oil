// ============================================================
// MANNA PURE OIL — Static Product & Category Data
// Backend વગર — hardcoded data
// WhatsApp: +91 78742 39595
// ============================================================

export const WHATSAPP_NUMBER = '917874239595';

// ──────────────────────────────────────────────
// CATEGORIES
// ──────────────────────────────────────────────
export const categories = [
  { _id: 'cat1', name: 'Groundnut Oil',      nameGu: 'મગફળી તેલ',      image: '../assets/catagory/g1.png' },
  { _id: 'cat2', name: 'Coconut Oil',        nameGu: 'નારિયેળ તેલ',    image: '../assets/catagory/co1.png' },
  { _id: 'cat3', name: 'White Sesame Oil',   nameGu: 'સફેદ તલ તેલ',    image: '../assets/catagory/w1.png' },
  { _id: 'cat4', name: 'Black Sesame Oil',   nameGu: 'કાળા તલ તેલ',    image: '../assets/catagory/bl1r.png' },
  { _id: 'cat5', name: 'Mustard Oil',        nameGu: 'રાઈ તેલ',         image: '../assets/catagory/m1.png' },
  { _id: 'cat6', name: 'Sunflower Oil',      nameGu: 'સૂરજમુખી તેલ',   image: '../assets/catagory/sun1.png' },
  { _id: 'cat7', name: 'Castor Oil',         nameGu: 'દિવેલ તેલ',      image: '../assets/catagory/cos04.png' },
  { _id: 'cat8', name: 'Gir Cow Ghee',       nameGu: 'ગીર ગાય ઘી',     image: '../assets/catagory/gh2.png' },
  { _id: 'cat9', name: 'Pure Natural Honey', nameGu: 'શુદ્ધ કુદરતી મધ', image: '../assets/catagory/ho.png' },
];

// ──────────────────────────────────────────────
// IMAGE HELPERS  (pre-resolve URLs once)
// ──────────────────────────────────────────────

// Groundnut
const GO_1L      = new URL('../assets/product all/groundnut/1l.jpg',       import.meta.url).href;
const GO_1LB     = new URL('../assets/product all/groundnut/1lbac.jpg',    import.meta.url).href;
const GO_5LF     = new URL('../assets/product all/groundnut/GO5LF.jpeg',   import.meta.url).href;
const GO_5LB     = new URL('../assets/product all/groundnut/5lb.jpg',      import.meta.url).href;
const GO_15L     = new URL('../assets/product all/groundnut/15l.jpg',      import.meta.url).href;

// Coconut
const CO_1L      = new URL('../assets/product all/coconut/1l.jpg',    import.meta.url).href;
const CO_1LB     = new URL('../assets/product all/coconut/1lb.jpg',   import.meta.url).href;
const CO_250     = new URL('../assets/product all/coconut/250ml.jpg', import.meta.url).href;
const CO_500     = new URL('../assets/product all/coconut/500ml.jpg', import.meta.url).href;

// White Sesame
const WS_1L      = new URL('../assets/product all/WHITE SESAME/1l.jpg',    import.meta.url).href;
const WS_BACK    = new URL('../assets/product all/WHITE SESAME/back.jpg',  import.meta.url).href;
const WS_250     = new URL('../assets/product all/WHITE SESAME/250ml.jpg', import.meta.url).href;
const WS_500     = new URL('../assets/product all/WHITE SESAME/500ml.jpg', import.meta.url).href;
const WS_5L      = new URL('../assets/product all/WHITE SESAME/5l.jpg',    import.meta.url).href;
const WS_5BACK   = new URL('../assets/product all/WHITE SESAME/5back.jpg', import.meta.url).href;

// Black Sesame
const BS_1L      = new URL('../assets/product all/BLACK SESAME/1l.jpg',    import.meta.url).href;
const BS_BACK    = new URL('../assets/product all/BLACK SESAME/back.jpg',  import.meta.url).href;
const BS_250     = new URL('../assets/product all/BLACK SESAME/250ml.jpg', import.meta.url).href;
const BS_500     = new URL('../assets/product all/BLACK SESAME/500ml.jpg', import.meta.url).href;

// Mustard
const MU_1L      = new URL('../assets/product all/MUSTARD/1l.jpg',     import.meta.url).href;
const MU_BACK    = new URL('../assets/product all/MUSTARD/back.jpg',   import.meta.url).href;
const MU_500     = new URL('../assets/product all/MUSTARD/500ml.png',  import.meta.url).href;

// Sunflower
const SF_1L      = new URL('../assets/product all/SUNFLOWER/1l.jpg',    import.meta.url).href;
const SF_BACK    = new URL('../assets/product all/SUNFLOWER/back.jpg',  import.meta.url).href;
const SF_5L      = new URL('../assets/product all/SUNFLOWER/5l.jpg',    import.meta.url).href;
const SF_5BACK   = new URL('../assets/product all/SUNFLOWER/back5.jpg', import.meta.url).href;

// Castor
const CA_1L      = new URL('../assets/product all/castor/ca1l.jpeg',  import.meta.url).href;
const CA_BACK    = new URL('../assets/product all/castor/back.jpeg',  import.meta.url).href;
const CA_500     = new URL('../assets/product all/castor/500ml.jpeg', import.meta.url).href;
const CA_250     = new URL('../assets/product all/castor/250ml.jpeg', import.meta.url).href;

// Gir Cow Ghee
const GH_1L      = new URL('../assets/product all/GIR COW/1l.jpeg', import.meta.url).href;
const GH_500     = new URL('../assets/product all/GIR COW/1l.png',  import.meta.url).href;

// Honey1.jpeg
const HN_250      = new URL('../assets/product all/Honey/Honey1.jpeg', import.meta.url).href;
const HN_500l      = new URL('../assets/product all/Honey/Honey1.jpeg', import.meta.url).href;

// ──────────────────────────────────────────────
// PRODUCTS
// ──────────────────────────────────────────────
export const products = [

  // ════════════════════════════════════════════
  // 1. GROUNDNUT OIL
  // ════════════════════════════════════════════
  {
    _id: 'p1',
    name: 'Cold Pressed Groundnut Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ મગફળી તેલ',
    category: { _id: 'cat1', name: 'Groundnut Oil' },
    image: GO_1L,
    images: [GO_1L, GO_1LB],

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
દૈનિક ખોરાક માટે ઉત્તમ.

🌿 ઉપયોગ માટે યોગ્ય

✔ દૈનિક રસોઈ
✔ પરંપરાગત વાનગીઓ
✔ સ્વસ્થ જીવનશૈલી
✔ સ્કિન અને હેર કેર`,

    benefits: 'Heart-Caring Goodness|Naturally Nutritious|Strengthens from Within|Beauty Beyond Cooking|Gentle & Wholesome',
    benefitsGu: 'હૃદય માટે લાભદાયક|કુદરતી પોષણ|શરીરને મજબૂત બનાવે છે|ચામડી અને વાળ માટે સારું|પાચનમાં સરળ',
    uses: 'Everyday Cooking|Frying & Sautéing|Traditional Recipes|Skin Care|Hair Care',
    usesGu: 'દૈનિક રસોઈ|તળવું અને સાંતળવું|પરંપરાગત વાનગીઓ|સ્કિન કેર|હેર કેર',

    sizes: [
      {
        size: '1 Litre',
        price: 300,
        image: GO_1L,
        images: [GO_1L, GO_1LB],
      },
      {
        size: '5 Litre',
        price: 1400,
        image: GO_5LF,
        images: [GO_5LF, GO_5LB],
      },
      {
        size: '15 Litre',
        price: 3850,
        image: GO_15L,
        images: [GO_15L],
      },
    ],

    inStock: true,
    featured: true,
  },

  // ════════════════════════════════════════════
  // 2. COCONUT OIL
  // ════════════════════════════════════════════
  {
    _id: 'p2',
    name: 'Cold Pressed Coconut Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ નારિયેળ તેલ',
    category: { _id: 'cat2', name: 'Coconut Oil' },
    image: CO_1L,
    images: [CO_1L, CO_1LB],

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

તાજા અને ઉચ્ચ ગુણવત્તાવાળા નાળિયેરમાંથી પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવવામાં આવેલ આ તેલ તેની કુદરતી સુગંધ, હળવું ટેક્સચર અને પોષક તત્વોને જાળવી રાખે છે. ગરમી અને કેમિકલ વગર તૈયાર થયેલું આ તેલ દરેક ટીપામાં શુદ્ધ પોષણ અને તાજગી આપે છે.

✨ શા માટે પસંદ કરશો?

🟡 કુદરતી ઊર્જા અને આરોગ્ય
સારા ફેટથી ભરપૂર, જે સક્રિય જીવનશૈલી માટે મદદરૂપ

🟡 પોષક તત્વોથી ભરપૂર
એન્ટીઑક્સિડન્ટથી ભરપૂર, આરોગ્ય માટે લાભદાયક

🟡 રોગપ્રતિકારક શક્તિ વધારે છે
કુદરતી એન્ટિબેક્ટેરિયલ ગુણ ધરાવે છે

🟡 ચામડી અને વાળ માટે ઊંડું પોષણ
ચામડીને હાઇડ્રેટ કરે છે અને વાળ મજબૂત બનાવે છે

🟡 હળવું અને સરળ પાચન
દૈનિક ઉપયોગ માટે યોગ્ય અને પેટ માટે હળવું`,

    benefits: 'Boosts metabolism|Skin moisturizer|Hair growth|Antimicrobial|Cooking & beauty',
    benefitsGu: 'Metabolism વધારે|ત્વચા moisturizer|વાળ વૃદ્ધિ|Antimicrobial|રસોઈ અને beauty',
    uses: 'Cooking|Skin care|Hair oil|Baby massage|Oil pulling',
    usesGu: 'રસોઈ|ત્વચા|વાળ|બાળ મસાજ|Oil pulling',

    sizes: [
      {
        size: '250ml',
        price: 180,
        image: CO_250,
        images: [CO_250, CO_1LB],
      },
      {
        size: '500ml',
        price: 320,
        image: CO_500,
        images: [CO_500, CO_1LB],
      },
      {
        size: '1 Litre',
        price: 600,
        image: CO_1L,
        images: [CO_1L, CO_1LB],
      },
    ],

    inStock: true,
    featured: true,
  },

  // ════════════════════════════════════════════
  // 3. WHITE SESAME OIL
  // ════════════════════════════════════════════
  {
    _id: 'p3',
    name: 'Cold Pressed White Sesame Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ સફેદ તલ તેલ',
    category: { _id: 'cat3', name: 'White Sesame Oil' },
    image: WS_1L,
    images: [WS_1L, WS_BACK],

    description: `🌿 Cold Pressed White Sesame Oil

Pure. Traditional. Deeply Nourishing.

Carefully extracted from the finest white sesame seeds using the traditional cold pressed method, this oil retains its natural richness, nutrients, and distinct aroma. Free from heat and chemicals, it delivers authentic taste and wholesome goodness—just as it has been trusted for generations.

✨ Why Choose It

🟡 Heart & Body Wellness
Supports overall health with healthy fats

🟡 Naturally Rich in Nutrients
Packed with antioxidants, calcium, and essential vitamins

🟡 Strength from Within
Boosts immunity and supports strong bones

🟡 Timeless Beauty Care
Deeply nourishes skin and promotes healthy hair

🟡 Warm & Easy to Digest
Comforting in nature and supports smooth digestion`,

    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ સફેદ તલનું તેલ

શુદ્ધ. પરંપરાગત. ઊંડું પોષણ.

શ્રેષ્ઠ ગુણવત્તાના સફેદ તલમાંથી પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવવામાં આવેલ આ તેલ તેની કુદરતી સમૃદ્ધિ, પોષક તત્વો અને ખાસ સુગંધ જાળવી રાખે છે. ગરમી અને કેમિકલ વગર તૈયાર થયેલું આ તેલ અસલી સ્વાદ અને સંપૂર્ણ પોષણ આપે છે — જે પેઢીઓથી વિશ્વાસપાત્ર રહ્યું છે.

✨ શા માટે પસંદ કરશો?

🟡 હૃદય અને શરીર માટે સારું
સારા ફેટથી ભરપૂર, જે સમગ્ર આરોગ્ય માટે મદદરૂપ

🟡 પોષક તત્વોથી ભરપૂર
એન્ટીઑક્સિડન્ટ, કેલ્શિયમ અને વિટામિનથી સમૃદ્ધ

🟡 શરીરને મજબૂત બનાવે છે
રોગપ્રતિકારક શક્તિ અને હાડકાં માટે લાભદાયક

🟡 સુંદરતા માટે ઉપયોગી
ચામડી અને વાળને ઊંડું પોષણ આપે છે

🟡 ગરમ તાસીર અને પાચનમાં સરળ
પાચન સુધારે છે અને શરીરને આરામ આપે છે`,

    benefits: 'Rich in Calcium|Anti-inflammatory|Skin nourishment|Bone health|Heart healthy',
    benefitsGu: 'Calcium ભરપૂર|Anti-inflammatory|ત્વચા poshan|હાડકા|હૃદય',
    uses: 'Cooking|Ayurvedic massage|Skin care|Traditional medicine',
    usesGu: 'રસોઈ|આયુર્વેદ|ત્વચા|પ્રાચીન ઉપચાર',

    sizes: [
      {
        size: '250ml',
        price: 130,
        image: WS_250,
        images: [WS_250, WS_BACK],
      },
      {
        size: '500ml',
        price: 250,
        image: WS_500,
        images: [WS_500, WS_BACK],
      },
      {
        size: '1 Litre',
        price: 480,
        image: WS_1L,
        images: [WS_1L, WS_BACK],
      },
      {
        size: '5 Litre',
        price: 2250,
        image: WS_5L,
        images: [WS_5L, WS_5BACK],
      },
    ],

    inStock: true,
    featured: false,
  },

  // ════════════════════════════════════════════
  // 4. BLACK SESAME OIL
  // ════════════════════════════════════════════
  {
    _id: 'p4',
    name: 'Cold Pressed Black Sesame Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ કાળા તલ તેલ',
    category: { _id: 'cat4', name: 'Black Sesame Oil' },
    image: BS_1L,
    images: [BS_1L, BS_BACK],

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

તેમાં ભરપૂર પોષક તત્વો અને પરંપરાગત આરોગ્ય લાભો છે.

✨ શા માટે પસંદ કરો?

🟡 શક્તિશાળી પોષણ આપે  
🟡 ખનિજ તત્વોમાં સમૃદ્ધ  
🟡 હાડકાંની તંદુરસ્તી માટે સહાયક  
🟡 ઘાટા અને સ્વસ્થ વાળ માટે લાભદાયક  
🟡 ત્વચાની ઊંડાણથી સંભાળ કરે  

🌿 માટે સંપૂર્ણ

✔ આયુર્વેદિક ઉપયોગ માટે  
✔ પરંપરાગત રસોઈ માટે  
✔ વાળની મસાજ માટે  
✔ શિયાળામાં આરોગ્ય માટે`,

    benefits: 'Powerful antioxidants|Hair darkening|Bone strength|Ayurvedic healing|Anti-aging',
    benefitsGu: 'Powerful antioxidants|વાળ કાળા|હાડકા|આયુર્વેદ|Anti-aging',
    uses: 'Ayurvedic massage|Hair care|Cooking|Traditional medicine',
    usesGu: 'આયુર્વેદ|વાળ|રસોઈ|ઉપચાર',

    sizes: [
      {
        size: '250ml',
        price: 140,
        image: BS_250,
        images: [BS_250, BS_BACK],
      },
      {
        size: '500ml',
        price: 270,
        image: BS_500,
        images: [BS_500, BS_BACK],
      },
      {
        size: '1 Litre',
        price: 520,
        image: BS_1L,
        images: [BS_1L, BS_BACK],
      },
      {
        size: '5 Litre',
        price: 2450,
        image: BS_1L,
        images: [BS_1L, BS_BACK],
      },
    ],

    inStock: true,
    featured: false,
  },

  // ════════════════════════════════════════════
  // 5. MUSTARD OIL
  // ════════════════════════════════════════════
  {
    _id: 'p5',
    name: 'Cold Pressed Mustard Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ રાઈ તેલ',
    category: { _id: 'cat5', name: 'Mustard Oil' },
    image: MU_1L,
    images: [MU_1L, MU_BACK],

    description: `🌿 Cold Pressed Black Mustard Oil

Bold. Pure. Traditionally Powerful.

Extracted from the finest black mustard seeds using the traditional cold pressed method, this oil retains its natural pungency, rich color, and powerful nutrients. Free from heat and chemicals, it delivers an authentic taste and deep-rooted wellness trusted across generations.

✨ Why Choose It

🟡 Heart & Circulation Support
Supports heart health and improves blood circulation

🟡 Naturally Rich & Potent
Packed with antioxidants and essential nutrients

🟡 Boosts Immunity
Known for natural antibacterial and warming properties

🟡 Strengthens Skin & Hair
Nourishes scalp, promotes strong hair, and healthy skin

🟡 Warming & Digestive-Friendly
Stimulates appetite and supports better digestion`,

    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ કાળી સરસવનું તેલ

મજબૂત. શુદ્ધ. પરંપરાગત શક્તિ.

શ્રેષ્ઠ ગુણવત્તાની કાળી સરસવમાંથી પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવવામાં આવેલ આ તેલ તેની કુદરતી તીખાશ, ગાઢ રંગ અને પોષક તત્વોને જાળવી રાખે છે. ગરમી અને કેમિકલ વગર તૈયાર થયેલું આ તેલ અસલી સ્વાદ અને પરંપરાગત આરોગ્યનો અનુભવ આપે છે.

✨ શા માટે પસંદ કરશો?

🟡 હૃદય અને રક્તપ્રવાહ માટે સારું
હૃદય આરોગ્ય અને બ્લડ સર્ક્યુલેશન સુધારે છે

🟡 કુદરતી રીતે શક્તિશાળી
એન્ટીઑક્સિડન્ટ અને પોષક તત્વોથી ભરપૂર

🟡 રોગપ્રતિકારક શક્તિ વધારે છે
કુદરતી એન્ટિબેક્ટેરિયલ અને ગરમ તાસીર ધરાવે છે

🟡 ચામડી અને વાળ મજબૂત બનાવે છે
સ્કાલ્પને પોષણ આપે છે અને વાળ મજબૂત કરે છે

🟡 ગરમ તાસીર અને પાચન માટે સારું
ભૂખ વધારવામાં અને પાચન સુધારવામાં મદદરૂપ`,

    benefits: 'Rich in Omega-3|Antibacterial|Stimulates hair growth|Improves digestion|Cold & cough remedy',
    benefitsGu: 'Omega-3 ભરપૂર|Antibacterial|વાળ વૃદ્ધિ|પાચન|શરદી ઉપચાર',
    uses: 'Cooking|Pickles|Body massage|Hair care|Ayurvedic treatment',
    usesGu: 'રસોઈ|Pickles|Body massage|વાળ|આયુર્વેદ',

    sizes: [
      {
        size: '500ml',
        price: 150,
        image: MU_500,
        images: [MU_500, MU_BACK],
      },
      {
        size: '1 Litre',
        price: 280,
        image: MU_1L,
        images: [MU_1L, MU_BACK],
      },
      {
        size: '5 Litre',
        price: 1250,
        image: MU_500,
        images: [MU_500, MU_BACK],
      },
    ],

    inStock: true,
    featured: false,
  },

  // ════════════════════════════════════════════
  // 6. SUNFLOWER OIL
  // ════════════════════════════════════════════
  {
    _id: 'p6',
    name: 'Cold Pressed Sunflower Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ સૂરજમુખી તેલ',
    category: { _id: 'cat6', name: 'Sunflower Oil' },
    image: SF_1L,
    images: [SF_1L, SF_BACK],

    description: `🌿 Cold Pressed Sunflower Oil

Light. Pure. Naturally Nourishing.

Extracted from the finest quality sunflower seeds using the traditional cold pressed method, this oil preserves its natural nutrients, light texture, and delicate aroma. Free from heat and chemicals, it delivers purity and freshness in every drop—just the way nature intended.

✨ Why Choose It

🟡 Heart-Loving Lightness
Rich in healthy fats that support heart wellness

🟡 Rich in Vitamin E
Helps protect cells and nourish the body

🟡 Supports Daily Wellness
Boosts immunity and promotes overall health

🟡 Glow from Within
Nourishes skin and helps maintain healthy hair

🟡 Light & Easy to Digest
Perfect for everyday cooking without heaviness`,

    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ સનફ્લાવર તેલ

હળવું. શુદ્ધ. કુદરતી પોષણ.

શ્રેષ્ઠ ગુણવત્તાના સનફ્લાવર બીજમાંથી પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવવામાં આવેલ આ તેલ તેની કુદરતી પોષકતા, હળવું ટેક્સચર અને સુગંધ જાળવી રાખે છે. ગરમી અને કેમિકલ વગર તૈયાર થયેલું આ તેલ દરેક ટીપામાં શુદ્ધતા અને તાજગી આપે છે — બિલકુલ કુદરત પ્રમાણે.

✨ શા માટે પસંદ કરશો?

🟡 હૃદય માટે હળવું અને સારું
સારા ફેટથી ભરપૂર, જે હૃદય આરોગ્ય માટે મદદરૂપ

🟡 વિટામિન E થી ભરપૂર
શરીરને પોષણ આપે છે અને કોષોને સુરક્ષિત રાખે છે

🟡 દૈનિક આરોગ્ય માટે ઉપયોગી
રોગપ્રતિકારક શક્તિ વધારવામાં મદદરૂપ

🟡 અંદરથી સુંદરતા આપે છે
ચામડી અને વાળને પોષણ આપે છે

🟡 હળવું અને સરળ પાચન
દૈનિક રસોઈ માટે યોગ્ય અને પેટ માટે હળવું`,

    benefits: 'High Vitamin E|Light texture|High smoke point|Heart healthy|Chemical free',
    benefitsGu: 'Vitamin E ભરપૂર|Light texture|High smoke point|હૃદય|Chemical free',
    uses: 'Daily cooking|Frying|Salad dressing|Skin care',
    usesGu: 'રોજ રસોઈ|Frying|Salad|ત્વચા',

    sizes: [
      {
        size: '1 Litre',
        price: 270,
        image: SF_1L,
        images: [SF_1L, SF_BACK],
      },
      {
        size: '5 Litre',
        price: 1250,
        image: SF_5L,
        images: [SF_5L, SF_5BACK],
      },
      {
        size: '15 Litre',
        price: 3450,
        image: SF_5L,
        images: [SF_5L, SF_5BACK],
      },
    ],

    inStock: true,
    featured: false,
  },

  // ════════════════════════════════════════════
  // 7. CASTOR OIL
  // ════════════════════════════════════════════
  {
    _id: 'p7',
    name: 'Cold Pressed Castor Oil',
    nameGu: 'કોલ્ડ પ્રેસ્ડ દિવેલ તેલ',
    category: { _id: 'cat7', name: 'Castor Oil' },
    image: CA_1L,
    images: [CA_1L, CA_BACK],

    description: `🌿 Cold Pressed Castor Oil

Pure. Intensive. Deeply Restorative.

Extracted from the finest castor seeds using the traditional cold pressed method, this oil retains its natural thickness, richness, and powerful nutrients. Free from heat and chemicals, it offers deep nourishment and time-tested care for your body, hair, and skin.

✨ Why Choose It

🟡 Deep Nourishment
Rich in essential fatty acids that provide intense hydration

🟡 Supports Hair Growth
Strengthens roots, reduces hair fall, and promotes thicker hair

🟡 Skin Repair & Care
Deeply moisturizes dry skin and improves texture

🟡 Natural Cleansing Properties
Helps in detoxifying and purifying naturally

🟡 Powerful & Long-Lasting
Highly concentrated, so a small amount is enough`,

    descriptionGu: `🌿 કોલ્ડ પ્રેસ્ડ અરીંડાનું તેલ (Castor Oil)

શુદ્ધ. તીવ્ર પોષણ. ઊંડું પુનઃસ્થાપન.

શ્રેષ્ઠ ગુણવત્તાના અરીંડા બીજમાંથી પરંપરાગત કોલ્ડ પ્રેસ પદ્ધતિથી બનાવવામાં આવેલ આ તેલ તેની ગાઢતા, સમૃદ્ધિ અને શક્તિશાળી પોષક તત્વોને જાળવી રાખે છે. ગરમી અને કેમિકલ વગર તૈયાર થયેલું આ તેલ શરીર, વાળ અને ચામડી માટે ઊંડું પોષણ આપે છે.

✨ શા માટે પસંદ કરશો?

🟡 ઊંડું પોષણ આપે છે
આવશ્યક ફેટી એસિડથી ભરપૂર, જે ગાઢ હાઇડ્રેશન આપે છે

🟡 વાળ વૃદ્ધિ માટે મદદરૂપ
વાળના મૂળ મજબૂત કરે છે અને વાળ ખરવાનું ઓછું કરે છે

🟡 ચામડી માટે રિપેર અને કેર
સૂકી ચામડીને ઊંડું મોઇશ્ચરાઇઝ કરે છે

🟡 કુદરતી ક્લેન્સિંગ ગુણધર્મો
શરીરને શુદ્ધ અને ડિટોક્સ કરવામાં મદદરૂપ

🟡 શક્તિશાળી અને લાંબા સમય સુધી ચાલે
થોડી માત્રામાં વધુ અસરકારક`,

    benefits: 'Hair growth stimulator|Skin hydration|Joint pain relief|Natural laxative|Anti-fungal',
    benefitsGu: 'વાળ વૃદ્ધિ|ત્વચા hydration|સાંધા|કબજિયાત|Anti-fungal',
    uses: 'Hair care|Skin care|Joint massage|Ayurvedic medicine',
    usesGu: 'વાળ|ત્વચા|સાંધા|આયુર્વેદ',

    sizes: [
      {
        size: '250 ML',
        price: 80,
        image: CA_250,
        images: [CA_250, CA_BACK],
      },
      {
        size: '500 ML',
        price: 130,
        image: CA_500,
        images: [CA_500, CA_BACK],
      },
      {
        size: '1 Litre',
        price: 250,
        image: CA_1L,
        images: [CA_1L, CA_BACK],
      },
    ],

    inStock: true,
    featured: false,
  },

  // ════════════════════════════════════════════
  // 8. GIR COW GHEE
  // ════════════════════════════════════════════
  {
    _id: 'p8',
    name: 'Gir Cow Ghee',
    nameGu: 'ગીર ગાય ઘી',
    category: { _id: 'cat8', name: 'Gir Cow Ghee' },
    image: GH_1L,
    images: [GH_1L],

    description: `🌿 Gir Cow Ghee (Bilona Method)

Pure. Sacred. Traditionally Nourishing.

Crafted from the milk of indigenous Gir cows using the ancient bilona method, this ghee represents purity, tradition, and authentic nutrition. Prepared by churning curd and slowly heating it to perfection, it preserves its natural aroma, rich golden texture, and essential nutrients—just like it has been made in Indian homes for generations.

✨ Why Choose It

🟡 A2 Goodness
Made from A2 milk, known for easy digestion and natural health benefits

🟡 Rich in Nutrients
Loaded with healthy fats, vitamins, and essential nourishment

🟡 Boosts Immunity
Helps strengthen the body and supports overall wellness

🟡 Enhances Digestion
Improves metabolism and helps better absorption of nutrients

🟡 Holistic Wellness
Highly valued in Ayurveda for balance, strength, and vitality`,

    descriptionGu: `🌿 ગીર ગાયનું ઘી 

શુદ્ધ. પવિત્ર. પરંપરાગત પોષણ.

દેશી ગીર ગાયના દૂધમાંથી પ્રાચીન બિલોના પદ્ધતિ દ્વારા તૈયાર કરાયેલ આ ઘી શુદ્ધતા અને પરંપરાનું પ્રતિક છે. દહીંને મથારીને અને ધીમે ધીમે ગરમ કરીને બનાવવામાં આવતું આ ઘી તેની કુદરતી સુગંધ, સોનેરી રંગ અને પોષક તત્વોને જાળવી રાખે છે — બિલકુલ એ રીતે જેમ આપણા ઘરમાં પેઢીઓથી બનાવવામાં આવતું આવ્યું છે.

✨ શા માટે પસંદ કરશો?

🟡 A2 ગુણવત્તા
A2 દૂધમાંથી બનેલું, જે સરળ પચન અને આરોગ્ય માટે લાભદાયક છે

🟡 પોષક તત્વોથી ભરપૂર
સારા ફેટ, વિટામિન અને જરૂરી પોષણથી ભરેલું

🟡 રોગપ્રતિકારક શક્તિ વધારશે
શરીરને મજબૂત બનાવે છે અને આરોગ્યમાં મદદરૂપ થાય છે

🟡 પાચન સુધારે છે
મેટાબોલિઝમ સુધારે છે અને પોષક તત્વોના શોષણમાં મદદ કરે છે

🟡 આયુર્વેદિક લાભ
આયુર્વેદમાં સંતુલન અને તંદુરસ્તી માટે મહત્વપૂર્ણ માનવામાં આવે છે`,

    benefits: 'A2 protein|Boosts immunity|Improves digestion|Rich in vitamins|Traditional Bilona method',
    benefitsGu: 'A2 protein|Immunity|Digestion|Vitamins|Bilona method',
    uses: 'Cooking|Dal tadka|Chapati|Ayurvedic medicine|Baby food',
    usesGu: 'રસોઈ|Dal tadka|ચપાટી|આયુર્વેદ|Baby food',

    sizes: [
      {
        size: '500 GRAM',
        price: 1250,
        image: GH_500,
        images: [GH_500],
      },
      {
        size: '1 KG',
        price: 2400,
        image: GH_1L,
        images: [GH_1L],
      },
    ],

    inStock: true,
    featured: false,
  },
];
 // ════════════════════════════════════════════
// 9. Pure Natural Honey
// ════════════════════════════════════════════
{
  _id: 'p9',
  name: 'Pure Natural Honey',
  nameGu: 'મન્ના શુદ્ધ કુદરતી મધ',
  category: { _id: 'cat9', name: 'Pure Natural Honey' },

  image: HN_250,
  images: [HN_500L],

  description: `🍯Pure Natural Honey

Pure. Natural. Unfiltered Goodness.

Harvested with care and minimally processed to preserve its natural nutrients, Manna Pure Raw Honey brings you the authentic sweetness of nature. Unheated, unfiltered, and free from additives, it retains its rich flavor, natural enzymes, and wholesome goodness—just as the bees intended.

✨ Why Choose It

🟡 100% Pure & Natural
Collected from trusted sources without added sugar, preservatives, or artificial ingredients

🟡 Rich in Natural Nutrients
Contains naturally occurring enzymes, antioxidants, vitamins, and minerals

🟡 Supports Daily Wellness
Helps promote overall health and supports a balanced lifestyle

🟡 Natural Energy Source
Provides a quick and natural source of energy for active days

🟡 Soothes & Nourishes
Traditionally valued for its soothing properties and everyday wellness benefits`,

  descriptionGu: `🍯 મન્ના શુદ્ધ કુદરતી મધ

શુદ્ધ. કુદરતી. ગાળણ વગરની સારી ગુણવત્તાની મીઠાશ.

કાળજીપૂર્વક એકત્રિત કરાયેલ અને તેના કુદરતી પોષક તત્વો જળવાઈ રહે તે માટે ઓછામાં ઓછું પ્રોસેસ કરાયેલ મન્ના શુદ્ધ કાચું મધ તમને કુદરતની અસલી મીઠાશ આપે છે. તેને ગરમ કરવામાં આવ્યું નથી, ગાળવામાં આવ્યું નથી અને તેમાં કોઈપણ ઉમેરણો નથી. તેથી તેનો ગાઢ સ્વાદ, કુદરતી એન્ઝાઇમ્સ અને પૌષ્ટિક ગુણધર્મો યથાવત્ રહે છે — બિલકુલ જેમ મધમાખીઓએ બનાવ્યું હોય તેમ.

✨ શા માટે પસંદ કરશો?

🟡 100% શુદ્ધ અને કુદરતી
વિશ્વસનીય સ્ત્રોતોમાંથી મેળવેલું, જેમાં વધારાની ખાંડ, પ્રિઝર્વેટિવ્સ અથવા કૃત્રિમ ઘટકો નથી

🟡 કુદરતી પોષક તત્વોથી ભરપૂર
કુદરતી એન્ઝાઇમ્સ, એન્ટીઓક્સિડન્ટ્સ, વિટામિન્સ અને ખનિજ તત્વો ધરાવે છે

🟡 રોજિંદી તંદુરસ્તીને સહારો
સંતુલિત જીવનશૈલી અને સામાન્ય સુખાકારીમાં મદદરૂપ

🟡 કુદરતી ઊર્જાનો સ્ત્રોત
સક્રિય દિવસોમાં ઝડપી અને કુદરતી ઊર્જા આપે છે

🟡 શાંતિદાયક અને પોષક
પરંપરાગત રીતે ગળાને શાંતિ આપવા અને રોજિંદી આરોગ્ય માટે ઉપયોગી માનવામાં આવે છે`,

  benefits: '100% Pure & Natural|Rich in antioxidants|Natural enzymes|Supports daily wellness|Natural energy source',
  benefitsGu: '100% શુદ્ધ અને કુદરતી|એન્ટીઓક્સિડન્ટથી ભરપૂર|કુદરતી એન્ઝાઇમ્સ|રોજિંદી તંદુરસ્તી|કુદરતી ઊર્જા',

  uses: 'Warm water & lemon|Tea & milk|Breakfast & desserts|Healthy recipes|Natural sweetener',
  usesGu: 'ગરમ પાણી અને લીંબુ|ચા અને દૂધ|નાસ્તો અને ડેઝર્ટ|હેલ્ધી રેસીપી|કુદરતી મીઠાસ',

  sizes: [
    {
      size: '250 GRAM',
      price: 350, // update price
      image: HN_250,
      images: [HN_250],
    },
    {
      size: '500 GRAM',
      price: 650, // update price
      image: HN_500L,
      images: [HN_500L],
    },
  ],

  inStock: true,
  featured: false,
},
];

// ──────────────────────────────────────────────
// HELPER: WhatsApp order URL
// ──────────────────────────────────────────────
export const getWhatsAppOrderUrl = (product, size, quantity = 1) => {
  const msg = `Hello! I want to order:\n*${product.name}*\nSize: ${size?.size || ''}\nPrice: ₹${size?.price || product.sizes?.[0]?.price}\nQty: ${quantity}\n\nPlease confirm my order.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
