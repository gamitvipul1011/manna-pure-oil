import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';

import blog1 from "../assets/blog1 900.jpeg";
import blog2 from "../assets/Cold Pressed vs Refinend 1600 x 900.jpg";
import blog3 from "../assets/journey of oil 1600 x 900.jpg";
import blog4 from "../assets/History of Oil 1600 x 900.jpg";
import blog5 from "../assets/blog5 900.jpeg";
import blog6 from "../assets/different oil 1600 x 900.jpg";
import blog7 from "../assets/Bilona Ghee 1600 x 900 .jpg";

const blogData = [
  {
    id: 1,
    title: 'Cold Pressed Oil Benefits: Why Every Indian Kitchen is Switching Today',
    titleGu: 'ઠંડા દબાણના તેલના ફાયદા: કેમ આજે દરેક ભારતીય રસોડું તેની તરફ વળી રહ્યું છે',
    image: blog1,
    date: '06 Apr 2026',
    dateGu: '૦૬ એપ્રિલ ૨૦૨૬',
    category: 'Health',
    categoryGu: 'આરોગ્ય',
    content: `In today's fast-moving world, Indian families are slowly returning to natural and healthier choices. One major shift is the use of cold pressed oils in daily cooking.
At Manna Pure Oil, we believe what you cook with matters as much as what you cook.

**What is Cold Pressed Oil?**

Cold pressed oil is extracted at low temperatures without heat or chemicals:

- No refining
- No chemicals
- No nutrient loss

👉 Keeps oil natural, pure, and nutritious

**1. Rich in Nutrients & Antioxidants**

Cold pressed oils contain:

- Vitamin E
- Omega fatty acids
- Natural antioxidants

Benefits:
- Boosts immunity
- Improves skin health
- Supports heart health

👉 Every drop is pure and powerful

**2. Supports Heart Health**

Cold pressed oils contain good fats (MUFA & PUFA) that:

- Reduce bad cholesterol (LDL)
- Increase good cholesterol (HDL)
- Improve blood circulation

👉 A simple step toward a healthy heart

**3. Free from Harmful Chemicals**

Refined oils undergo chemical processing.

Cold pressed oils are:
- Chemical-free
- Preservative-free
- Naturally processed

👉 Pure and safe for consumption

**4. Safe for Your Family**

Cooking with cold pressed oil ensures:

- Safe for children
- Easy to digest
- Supports overall health

👉 Nourishes your loved ones daily

**5. Enhances Taste & Aroma**

Cold pressed oils bring authentic flavor:

- Natural aroma
- Rich taste
- Perfect for Indian cooking

👉 Makes every dish more delicious

**6. Eco-Friendly Choice**

Cold pressed oils are:

- Minimally processed
- Energy efficient
- Support local farmers

👉 Better for you and the environment

**Why People Are Switching**

People now prefer:
- Natural over processed
- Nutrition over convenience
- Health over shortcuts

👉 Cold pressed oils are becoming essential

**Final Thoughts**

Your cooking oil impacts your health daily.

Switching to cold pressed oil means:
- Better health
- Better taste
- Better lifestyle

Make the smart choice today.`,

    contentGu: `આજના ઝડપી જીવનમાં ભારતીય પરિવારો ફરીથી કુદરતી અને વધુ આરોગ્યપ્રદ પસંદગીઓ તરફ વળી રહ્યા છે. રોજિંદી રસોઈમાં ઠંડા દબાણનું તેલ વાપરવાનો વધતો વલણ એમાંનો એક મોટો બદલાવ છે.

મન્ના પ્યોર ઓઇલમાં અમે માનીએ છીએ કે તમે શું રાંધો છો એટલું જ મહત્વનું છે કે તમે કયા તેલમાં રાંધો છો.

**ઠંડા દબાણનું તેલ શું છે?**

ઠંડા દબાણનું તેલ નીચા તાપમાને, ઉષ્ણતા અને રસાયણ વગર કાઢવામાં આવે છે:

- કોઈ શુદ્ધિકરણ નહીં
- કોઈ રસાયણ નહીં
- પોષક તત્ત્વોની હાનિ નહીં

👉 તેલને કુદરતી, શુદ્ધ અને પૌષ્ટિક રાખે છે

**૧. પોષક તત્ત્વો અને ઑક્સીકરણ વિરોધી તત્ત્વોથી ભરપૂર**

ઠંડા દબાણના તેલમાં હોય છે:

- વિટામિન ઇ
- ઓમેગા ચરબીય અમ્લો
- કુદરતી ઑક્સીકરણ વિરોધી તત્ત્વો

ફાયદા:
- રોગપ્રતિકારક શક્તિ વધારે
- ત્વચા આરોગ્ય સુધારે
- હૃદય આરોગ્યને ટેકો આપે

👉 દરેક બુંદમાં શુદ્ધ શક્તિ સમાયેલી છે

**૨. હૃદય આરોગ્યને ટેકો આપે છે**

ઠંડા દબાણના તેલમાં સારા ચરબીય તત્ત્વો હોય છે જે:

- હાનિકારક કોલેસ્ટેરોલ ઘટાડે
- લાભદાયક કોલેસ્ટેરોલ વધારવામાં મદદ કરે
- રક્તપ્રવાહ સુધારે

👉 સ્વસ્થ હૃદય તરફનું એક સરળ પગલું

**૩. હાનિકારક રસાયણોથી મુક્ત**

શુદ્ધિકૃત તેલમાં રસાયણિક પ્રક્રિયા થતી હોય છે.

ઠંડા દબાણનું તેલ હોય છે:
- રસાયણમુક્ત
- સંરક્ષકમુક્ત
- કુદરતી રીતે તૈયાર થયેલું

👉 ખાવા માટે વધુ સુરક્ષિત અને શુદ્ધ

**૪. તમારા પરિવાર માટે સુરક્ષિત**

ઠંડા દબાણનું તેલ:
- બાળકો માટે સુરક્ષિત
- સહેલાઈથી પચી જાય એવું
- સમગ્ર આરોગ્યને ટેકો આપનાર

👉 તમારા પ્રિયજનોને રોજ પોષણ આપતું

**૫. સ્વાદ અને સુગંધ વધારે છે**

ઠંડા દબાણનું તેલ ભોજનમાં અસલી લહેજો લાવે છે:

- કુદરતી સુગંધ
- સમૃદ્ધ સ્વાદ
- ભારતીય રસોઈ માટે ઉત્તમ

👉 દરેક વાનગીને વધુ સ્વાદિષ્ટ બનાવે છે

**૬. પર્યાવરણમૈત્રી પસંદગી**

ઠંડા દબાણના તેલ:
- ઓછી પ્રક્રિયા ધરાવે છે
- ઊર્જાનો બચતભર્યો ઉપયોગ કરે છે
- સ્થાનિક ખેડૂતોને સહારો આપે છે

👉 તમારા માટે પણ સારું અને પર્યાવરણ માટે પણ

**લોકો કેમ બદલાઈ રહ્યા છે**

આજે લોકો પસંદ કરી રહ્યા છે:
- પ્રક્રિયિત વસ્તુઓ કરતાં કુદરતી વસ્તુઓ
- સહેલાઈ કરતાં પોષણ
- ટૂંકા રસ્તા કરતાં આરોગ્ય

👉 ઠંડા દબાણનું તેલ હવે આવશ્યક બનતું જાય છે

**અંતિમ વિચાર**

તમે રસોઈમાં જે તેલ વાપરો છો તે રોજ તમારા આરોગ્ય પર અસર કરે છે.

ઠંડા દબાણનું તેલ અપનાવવાનો અર્થ:
- વધુ સારું આરોગ્ય
- વધુ સારો સ્વાદ
- વધુ સારી જીવનશૈલી

આજે જ સમજદારીભરી પસંદગી કરો.`,
  },
  {
    id: 2,
    title: 'Cold Pressed Oil vs Refined Oil: What You Must Know',
    titleGu: 'ઠંડા દબાણનું તેલ અને શુદ્ધિકૃત તેલ: શું જાણવું જરૂરી છે',
    image: blog2,
    date: '06 Apr 2026',
    dateGu: '૦૬ એપ્રિલ ૨૦૨૬',
    category: 'Awareness',
    categoryGu: 'જાગૃતિ',
    content: `In today's health-conscious world, choosing the right cooking oil is very important. Many Indian households are now becoming aware of what they consume daily.

The biggest question is: Cold Pressed Oil vs Refined Oil.

**What is Cold Pressed Oil?**

Cold pressed oil is extracted using traditional wooden or mechanical methods at low temperatures:

- No heat
- No chemicals
- No refining

👉 This keeps the oil pure and natural

**What is Refined Oil?**

Refined oil goes through industrial processing:

- High heat treatment
- Chemical processing
- Bleaching and deodorizing

👉 Improves shelf life but reduces quality

**Key Differences**

**1. Nutritional Value**

Cold Pressed Oil:
- Rich in vitamins and antioxidants
- Retains natural nutrients
- Contains healthy fats

Refined Oil:
- Nutrients lost during processing
- Lower nutritional value

**2. Health Impact**

Cold Pressed Oil:
- Supports heart health
- Balances cholesterol
- Boosts immunity

Refined Oil:
- May increase bad cholesterol
- Linked to lifestyle diseases

**3. Processing Method**

Cold Pressed Oil:
- Minimal processing
- Traditional extraction

Refined Oil:
- Heavy industrial processing
- Use of chemicals

**4. Taste & Aroma**

Cold Pressed Oil:
- Natural aroma
- Enhances food taste

Refined Oil:
- Odorless and tasteless
- Less authentic

**5. Environmental Impact**

Cold Pressed Oil:
- Eco-friendly
- Supports farmers

Refined Oil:
- High energy usage
- Industrial impact

**Hidden Truth About Refined Oils**

Many believe refined oils are healthier, but:

- Chemical residues may remain
- Natural nutrients are lost
- Long-term use may harm health

**Why People Are Switching**

Modern families are choosing:

- Purity over processing
- Nutrition over appearance
- Health over convenience

👉 Cold pressed oils are becoming the preferred choice

**Final Thoughts**

Cooking oil is a daily health decision.

Choose wisely:
- Natural vs Processed
- Nourishing vs Empty
- Traditional vs Industrial

Make the switch to cold pressed oils for a healthier life.`,

    contentGu: `આજના આરોગ્યજાગૃત સમયમાં યોગ્ય રસોઈ તેલ પસંદ કરવું ખૂબ જ મહત્વનું બની ગયું છે. ઘણા ભારતીય પરિવારો હવે તેઓ રોજ શું ખાય છે તેની વધુ જાગૃતિ રાખવા લાગ્યા છે.

સૌથી મોટો પ્રશ્ન છે: ઠંડા દબાણનું તેલ કે શુદ્ધિકૃત તેલ?

**ઠંડા દબાણનું તેલ શું છે?**

ઠંડા દબાણનું તેલ પરંપરાગત લાકડાની ઘાણી અથવા યાંત્રિક દબાણ પદ્ધતિથી નીચા તાપમાને કાઢવામાં આવે છે:

- કોઈ ઉષ્ણતા નહીં
- કોઈ રસાયણ નહીં
- કોઈ શુદ્ધિકરણ નહીં

👉 આ તેલને શુદ્ધ, કુદરતી અને પૌષ્ટિક રાખે છે

**શુદ્ધિકૃત તેલ શું છે?**

શુદ્ધિકૃત તેલ ઔદ્યોગિક પ્રક્રિયામાંથી પસાર થાય છે:

- ઊંચા તાપ પર પ્રક્રિયા
- રસાયણિક પ્રક્રિયા
- રંગ અને ગંધ દૂર કરવાની પ્રક્રિયા

👉 તેનો સંગ્રહકાળ વધે છે, પરંતુ ગુણવત્તા ઘટે છે

**મુખ્ય તફાવતો**

**૧. પોષણમૂલ્ય**

ઠંડા દબાણનું તેલ:
- વિટામિન અને ઑક્સીકરણ વિરોધી તત્ત્વોથી સમૃદ્ધ
- કુદરતી પોષક તત્ત્વો જાળવી રાખે છે
- સારા ચરબીય તત્ત્વો ધરાવે છે

શુદ્ધિકૃત તેલ:
- પ્રક્રિયા દરમ્યાન પોષક તત્ત્વોમાં ઘટાડો થાય છે
- પોષણમૂલ્ય ઓછું રહે છે

**૨. આરોગ્ય પર અસર**

ઠંડા દબાણનું તેલ:
- હૃદય આરોગ્યને ટેકો આપે છે
- કોલેસ્ટેરોલનું સંતુલન જાળવવામાં મદદ કરે છે
- રોગપ્રતિકારક શક્તિ વધારે છે

શુદ્ધિકૃત તેલ:
- હાનિકારક કોલેસ્ટેરોલ વધારી શકે છે
- જીવનશૈલી સંબંધિત રોગો સાથે જોડાઈ શકે છે

**૩. બનાવવાની પદ્ધતિ**

ઠંડા દબાણનું તેલ:
- ઓછી પ્રક્રિયા ધરાવે છે
- પરંપરાગત રીતે કાઢવામાં આવે છે

શુદ્ધિકૃત તેલ:
- ભારે ઔદ્યોગિક પ્રક્રિયામાંથી પસાર થાય છે
- રસાયણોનો ઉપયોગ થાય છે

**૪. સ્વાદ અને સુગંધ**

ઠંડા દબાણનું તેલ:
- કુદરતી સુગંધ ધરાવે છે
- ભોજનનો સ્વાદ વધારે છે

શુદ્ધિકૃત તેલ:
- લગભગ ગંધરહિત અને સ્વાદરહિત હોય છે
- અસલી લહેજો ઓછો આપે છે

**૫. પર્યાવરણ પર અસર**

ઠંડા દબાણનું તેલ:
- પર્યાવરણમૈત્રી છે
- ખેડૂતોને સહારો આપે છે

શુદ્ધિકૃત તેલ:
- વધુ ઊર્જાનો ઉપયોગ કરે છે
- ઔદ્યોગિક અસર વધારે પાડે છે

**શુદ્ધિકૃત તેલ વિશેનું છુપાયેલું સત્ય**

ઘણા લોકો માને છે કે શુદ્ધિકૃત તેલ વધુ સારું હોય છે, પરંતુ:

- તેમાં રસાયણના અશેષ અંશો રહી શકે છે
- કુદરતી પોષક તત્ત્વો નષ્ટ થાય છે
- લાંબા ગાળે તે આરોગ્યને નુકસાન પહોંચાડી શકે છે

**લોકો કેમ બદલાઈ રહ્યા છે**

આધુનિક પરિવારો હવે પસંદ કરી રહ્યા છે:

- પ્રક્રિયા કરતાં શુદ્ધતા
- દેખાવ કરતાં પોષણ
- સહેલાઈ કરતાં આરોગ્ય

👉 ઠંડા દબાણના તેલો હવે વધુ પસંદ બન્યા છે

**અંતિમ વિચાર**

રસોઈનું તેલ રોજનું આરોગ્ય સંબંધિત એક મહત્વપૂર્ણ નિર્ણય છે.

સમજદારીથી પસંદ કરો:
- કુદરતી કે પ્રક્રિયિત
- પોષક કે ખાલી
- પરંપરાગત કે ઔદ્યોગિક

વધુ આરોગ્યપ્રદ જીવન માટે આજે જ ઠંડા દબાણના તેલ તરફ વળો.`,
  },
  {
    id: 3,
    title: 'From Seed to Bottle: The Journey of Wooden Cold-Pressed Oils',
    titleGu: 'બીજથી બોટલ સુધી: લાકડાની ઘાણીમાં બનેલા ઠંડા દબાણના તેલની સફર',
    image: blog3,
    date: '06 Apr 2026',
    dateGu: '૦૬ એપ્રિલ ૨૦૨૬',
    category: 'Process',
    categoryGu: 'પ્રક્રિયા',
    content: `Every drop of oil you use tells a story — a story of nature, care, and tradition.

In today's world of fast processing, wooden cold-pressed oils stand as a symbol of purity and authenticity.

At Manna Pure Oil, we bring this journey to your kitchen — just the way it was meant to be.

**Step 1: Sourcing the Finest Seeds**

The journey begins with selecting high-quality natural seeds:

- Groundnuts, sesame, mustard, coconut, and more
- Carefully chosen for freshness and purity
- Sourced from trusted farmers

👉 Great oil always starts with great seeds

**Step 2: Cleaning & Natural Preparation**

Before extraction, seeds are properly prepared:

- Dust and impurities removed
- Sun-dried naturally
- No chemicals used

👉 Ensures purity from the beginning

**Step 3: Wooden Cold Pressing (Ghani Method)**

The most important step:

- Seeds are crushed slowly using wooden press
- No heat generated
- No chemicals used
- Slow and natural extraction

👉 Preserves nutrients, aroma, and taste

**Step 4: Natural Settling & Filtration**

After extraction:

- Oil is left to settle naturally
- Impurities separate without chemicals
- Light filtration for clarity

👉 No refining, only pure oil

**Step 5: Hygienic Packaging**

Final step ensures safety:

- Stored in food-safe bottles
- Protected from contamination
- Sealed to maintain freshness

👉 Same purity reaches your home

**What Makes Cold Pressed Oil Special?**

- Retains natural nutrients
- Rich in healthy fats
- Strong aroma and authentic taste
- Chemical-free and unrefined

👉 It is health in its purest form

**Traditional vs Modern Oils**

Wooden Cold Pressed Oil:
- Natural and slow process
- Nutrient-rich
- No chemicals
- Full flavor

Refined Oil:
- High heat processing
- Chemical treatments
- Loss of nutrients
- Artificial changes

**Why It Matters**

Choosing the right oil means:

- Better health
- Safer cooking
- Natural nutrition
- Connection to tradition

**Final Thoughts**

From seed to bottle, every step matters.

Choosing cold-pressed oil means choosing purity, health, and tradition.`,

    contentGu: `તમે જે તેલ વાપરો છો તેની દરેક બુંદ એક વાર્તા કહે છે — કુદરત, કાળજી અને પરંપરાની વાર્તા.

આજની ઝડપી પ્રક્રિયાવાળી દુનિયામાં લાકડાની ઘાણીમાં બનેલું ઠંડા દબાણનું તેલ શુદ્ધતા અને અસલિયતનું પ્રતિક છે.

મન્ના પ્યોર ઓઇલ આ સફર તમારા રસોડા સુધી લાવે છે — જેમ તે ખરેખર હોવું જોઈએ તેમ.

**પગલું ૧: શ્રેષ્ઠ બીજની પસંદગી**

આ સફર ઊંચી ગુણવત્તાવાળા કુદરતી બીજોની પસંદગીથી શરૂ થાય છે:

- મગફળી, તલ, સરસવ, નાળિયેર અને બીજા બીજ
- તાજગી અને શુદ્ધતા માટે કાળજીપૂર્વક પસંદ કરેલા
- વિશ્વસનીય ખેડૂતો પાસેથી મેળવેલા

👉 સારું તેલ હંમેશાં સારા બીજોથી જ બને છે

**પગલું ૨: સફાઈ અને કુદરતી તૈયારી**

તેલ કાઢતાં પહેલાં બીજોને યોગ્ય રીતે તૈયાર કરવામાં આવે છે:

- ધૂળ અને અશુદ્ધિઓ દૂર કરવામાં આવે છે
- કુદરતી રીતે સૂર્યપ્રકાશમાં સુકવવામાં આવે છે
- કોઈ રસાયણનો ઉપયોગ થતો નથી

👉 શરૂઆતથી જ શુદ્ધતા જાળવવામાં આવે છે

**પગલું ૩: લાકડાની ઘાણીમાં ઠંડું દબાણ**

આ સૌથી મહત્વપૂર્ણ પગલું છે:

- બીજને લાકડાની ઘાણીમાં ધીમે ધીમે દબાવવામાં આવે છે
- વધારાની ઉષ્ણતા ઉત્પન્ન થતી નથી
- કોઈ રસાયણ ઉમેરાતું નથી
- ધીમી અને કુદરતી રીતે તેલ બહાર કાઢવામાં આવે છે

👉 આ રીતે પોષક તત્ત્વો, સુગંધ અને સ્વાદ જળવાઈ રહે છે

**પગલું ૪: કુદરતી સ્થિરતા અને ગાળણી**

તેલ કાઢ્યા પછી:

- તેલને કુદરતી રીતે સ્થિર થવા દેવામાં આવે છે
- અશુદ્ધિઓ રસાયણ વગર અલગ પડે છે
- સ્વચ્છતા માટે હળવી ગાળણી કરવામાં આવે છે

👉 કોઈ શુદ્ધિકરણ નહીં, ફક્ત શુદ્ધ તેલ

**પગલું ૫: સ્વચ્છ અને સુરક્ષિત ભરણ**

છેલ્લું પગલું સુરક્ષા સુનિશ્ચિત કરે છે:

- ખાદ્યપદાર્થ માટે સુરક્ષિત બોટલોમાં ભરવામાં આવે છે
- પ્રદૂષણથી સુરક્ષિત રાખવામાં આવે છે
- તાજગી જાળવવા માટે સીલ કરવામાં આવે છે

👉 એ જ શુદ્ધતા તમારા ઘરે પહોંચે છે

**ઠંડા દબાણનું તેલ વિશેષ કેમ છે?**

- કુદરતી પોષક તત્ત્વો જળવાઈ રહે છે
- સારા ચરબીય તત્ત્વોથી સમૃદ્ધ હોય છે
- તેજસ્વી સુગંધ અને અસલી સ્વાદ ધરાવે છે
- રસાયણમુક્ત અને શુદ્ધિકરણ વિના હોય છે

👉 આ આરોગ્યનું સૌથી શુદ્ધ સ્વરૂપ છે

**પરંપરાગત અને આધુનિક તેલ વચ્ચેનો ફરક**

લાકડાની ઘાણીમાં બનેલું ઠંડા દબાણનું તેલ:
- કુદરતી અને ધીમી પ્રક્રિયા
- પોષક તત્ત્વોથી સમૃદ્ધ
- કોઈ રસાયણ નહીં
- સંપૂર્ણ સ્વાદ

શુદ્ધિકૃત તેલ:
- ઊંચા તાપની પ્રક્રિયા
- રસાયણિક ઉપચાર
- પોષક તત્ત્વોની હાનિ
- કૃત્રિમ ફેરફારો

**આ કેમ મહત્વનું છે**

યોગ્ય તેલ પસંદ કરવાનો અર્થ:

- વધુ સારું આરોગ્ય
- વધુ સુરક્ષિત રસોઈ
- કુદરતી પોષણ
- પરંપરા સાથે જોડાણ

**અંતિમ વિચાર**

બીજથી બોટલ સુધી દરેક પગલું મહત્વ ધરાવે છે.

ઠંડા દબાણનું તેલ પસંદ કરવાનો અર્થ છે શુદ્ધતા, આરોગ્ય અને પરંપરા પસંદ કરવી.`,
  },
  {
    id: 4,
    title: 'The History of Indian Cooking Oils: From Tradition to Today',
    titleGu: 'ભારતીય રસોઈના તેલોનો ઇતિહાસ: પરંપરાથી આજ સુધી',
    image: blog4,
    date: '06 Apr 2026',
    dateGu: '૦૬ એપ્રિલ ૨૦૨૬',
    category: 'Awareness',
    categoryGu: 'જાગૃતિ',
    content: `In every Indian kitchen, oil is not just an ingredient—it's a story of culture, tradition, health, and generations of wisdom.

**Ancient India: The Beginning of Pure Oils**

Thousands of years ago, Indian cooking was rooted in Ayurveda and natural living. Oils were used not just for cooking but also for healing and rituals.

- Groundnut Oil was popular in western India for its rich taste and high heat tolerance
- Mustard Oil was widely used in northern and eastern regions for its strong flavor
- Sesame Oil was considered sacred and used in cooking and rituals
- Coconut Oil was a staple in southern coastal regions

These oils were extracted using traditional wood-pressed methods, preserving purity and nutrition.

**Traditional Wisdom: Regional Oils**

India's diversity influenced oil choices based on climate and lifestyle:

- South India → Coconut Oil for cooling
- North India → Mustard Oil for warmth
- Central & Western India → Groundnut & Sesame Oil for balance

This was not random—it was science backed by tradition.

**The Shift to Refined Oils**

With industrialization, refined oils became popular due to longer shelf life and mass production.

However, this led to:
- Loss of nutrients
- Use of chemicals and high heat processing
- Disconnection from traditional practices

**The Revival of Cold Pressed Oils**

Today, people are returning to cold pressed oils.

**Why Choose Cold Pressed Oils?**
- Retains natural nutrients
- No chemicals or refining
- Supports digestion and health
- Brings authentic taste

**Why It Matters**

The oil you use daily impacts your health:

- Better heart health
- Stronger immunity
- More natural lifestyle

**Final Thought**

India always had healthy cooking solutions.

Sometimes, the best way forward is to go back.`,

    contentGu: `દરેક ભારતીય રસોડામાં તેલ માત્ર એક ઘટક નથી — તે સંસ્કૃતિ, પરંપરા, આરોગ્ય અને પેઢીઓની સમજણની જીવંત વાર્તા છે.

**પ્રાચીન ભારત: શુદ્ધ તેલની શરૂઆત**

હજારો વર્ષ પહેલાં ભારતીય રસોઈ આયુર્વેદ અને કુદરતી જીવનશૈલી પર આધારિત હતી. તેલનો ઉપયોગ માત્ર રસોઈ માટે જ નહીં, પરંતુ આરોગ્યલાભ અને ધાર્મિક વિધિઓ માટે પણ થતો હતો.

- મગફળીનું તેલ પશ્ચિમ ભારતમાં તેના સમૃદ્ધ સ્વાદ અને ઊંચા તાપને સહન કરવાની ક્ષમતા માટે લોકપ્રિય હતું
- સરસવનું તેલ ઉત્તર અને પૂર્વ ભારતના વિસ્તારોમાં તેના તીવ્ર સ્વાદ માટે વ્યાપકપણે વપરાતું હતું
- તલનું તેલ પવિત્ર માનવામાં આવતું અને રસોઈ સાથે વિધિમાં પણ વપરાતું હતું
- નાળિયેરનું તેલ દક્ષિણના દરિયાકાંઠા વિસ્તારોમાં મુખ્ય સ્થાન ધરાવતું હતું

આ બધાં તેલ પરંપરાગત લાકડાની ઘાણીની પદ્ધતિથી કાઢવામાં આવતા હતા, જેથી શુદ્ધતા અને પોષણ જળવાતું.

**વિસ્તાર મુજબ તેલની પસંદગી**

ભારતની વિવિધતા પ્રમાણે હવામાન, જીવનશૈલી અને પરંપરા મુજબ તેલ પસંદ થતું હતું:

- દક્ષિણ ભારત → નાળિયેરનું તેલ શીતળતા માટે
- ઉત્તર ભારત → સરસવનું તેલ ઉષ્ણતા માટે
- મધ્ય અને પશ્ચિમ ભારત → મગફળી અને તલનું તેલ સંતુલન માટે

આ કોઈ આળસ ન હતી — આ પરંપરા દ્વારા સમર્થિત વિજ્ઞાન હતું.

**શુદ્ધિકૃત તેલ તરફનો વળાંક**

ઔદ્યોગિકીકરણ પછી શુદ્ધિકૃત તેલો વધુ લોકપ્રિય બન્યા, કારણ કે તેઓ લાંબા સમય સુધી ટકી શકતા અને મોટા પાયે બનતા હતા.

પરંતુ તેના કારણે આ નુકસાન થયું:
- પોષક તત્ત્વોમાં ઘટાડો
- રસાયણો અને ઊંચા તાપનો ઉપયોગ
- પરંપરાગત પદ્ધતિઓથી દૂરાવ

**ઠંડા દબાણના તેલનો પુનરાગમન**

આજે લોકો ફરીથી ઠંડા દબાણના તેલ તરફ વળી રહ્યા છે.

**ઠંડા દબાણનું તેલ કેમ પસંદ કરવું?**
- કુદરતી પોષક તત્ત્વો જળવાઈ રહે છે
- રસાયણ અને શુદ્ધિકરણ વગર બને છે
- પાચન અને આરોગ્યને ટેકો આપે છે
- અસલી સ્વાદ અને સુગંધ આપે છે

**આ કેમ મહત્વનું છે**

તમે રોજ જે તેલ વાપરો છો તે તમારા આરોગ્ય પર સીધી અસર કરે છે:

- વધુ સારું હૃદય આરોગ્ય
- વધુ મજબૂત રોગપ્રતિકારક શક્તિ
- વધુ કુદરતી જીવનશૈલી

**અંતિમ વિચાર**

ભારત પાસે હંમેશાં આરોગ્યપ્રદ રસોઈના સારા માર્ગો હતા.

ક્યારેક આગળ વધવાનો શ્રેષ્ઠ રસ્તો એ હોય છે કે આપણે સારા મૂળ તરફ ફરી પાછા વળીએ.`,
  },
  {
    id: 5,
    title: 'Understanding Good Fats vs Bad Fats in Cooking Oil',
    titleGu: 'રસોઈના તેલમાં સારા અને હાનિકારક ચરબીય તત્ત્વોને સમજીએ',
    image: blog5,
    date: '06 Apr 2026',
    dateGu: '૦૬ એપ્રિલ ૨૦૨૬',
    category: 'Health',
    categoryGu: 'આરોગ્ય',
    content: `In every Indian kitchen, oil is the foundation of every meal. But not all fats are the same. Understanding good fats and bad fats can improve your family's health.

**What Are Fats in Cooking Oil?**

Fats are essential nutrients needed for:

- Energy
- Cell growth
- Nutrient absorption

👉 The type of fat you consume matters most

**What Are Good Fats?**

Good fats support overall health.

**Types of Good Fats**

Monounsaturated Fats (MUFA):
- Helps reduce bad cholesterol
- Supports heart health
- Found in groundnut oil and mustard oil

Polyunsaturated Fats (PUFA):
- Contains Omega-3 and Omega-6
- Supports brain function
- Helps body development

**Benefits of Good Fats**

- Keeps heart healthy
- Improves cholesterol balance
- Boosts immunity
- Supports skin and hair health

👉 Cold pressed oils are rich in good fats

**What Are Bad Fats?**

Bad fats can harm your health if consumed regularly.

**Types of Bad Fats**

Trans Fats:
- Found in processed and refined oils
- Created during industrial processing

Excess Saturated Fats:
- Can increase bad cholesterol
- Linked to heart problems

**Effects of Bad Fats**

- Increases risk of heart disease
- Raises LDL cholesterol
- Causes weight gain
- Leads to lifestyle diseases

**Cold Pressed Oil vs Refined Oil**

Cold Pressed Oil:
- Naturally extracted
- Retains nutrients and antioxidants
- Rich in good fats
- Chemical-free

Refined Oil:
- Processed with chemicals
- Nutrients lost
- May contain trans fats
- Less natural value

**Why It Matters**

Oil is used daily in cooking, frying, and dressing.

👉 Small changes in oil can create big health impacts over time

**Tips for Choosing the Right Oil**

- Choose cold pressed oils
- Avoid refined oils
- Use in balanced quantity
- Rotate oils for better nutrition

**Final Thoughts**

Not all fats are bad — the right fats are essential.

Choose wisely:
- Good fats → Better health
- Bad fats → Health risks

Make the switch to healthier oils today.`,

    contentGu: `દરેક ભારતીય રસોડામાં તેલ દરેક ભોજનનો આધાર છે. પરંતુ બધી ચરબી એકસરખી નથી. સારા અને હાનિકારક ચરબીય તત્ત્વોને સમજવાથી તમારા પરિવારનું આરોગ્ય વધુ સારું બની શકે છે.

**રસોઈના તેલમાં ચરબી શું છે?**

ચરબી એ શરીરને જરૂરી પોષક તત્ત્વ છે, જે માટે મદદરૂપ બને છે:

- ઊર્જા
- કોષોની વૃદ્ધિ
- બીજા પોષક તત્ત્વોના શોષણમાં

👉 સૌથી મહત્વનું એ છે કે તમે કઈ ચરબી લો છો

**સારા ચરબીય તત્ત્વો શું છે?**

સારા ચરબીય તત્ત્વો સમગ્ર આરોગ્યને ટેકો આપે છે.

**સારા ચરબીય તત્ત્વોના પ્રકાર**

એકલ અસંતૃપ્ત ચરબી:
- હાનિકારક કોલેસ્ટેરોલ ઘટાડવામાં મદદ કરે છે
- હૃદય આરોગ્યને ટેકો આપે છે
- મગફળીના તેલ અને સરસવના તેલમાં મળે છે

બહુલ અસંતૃપ્ત ચરબી:
- ઓમેગા-૩ અને ઓમેગા-૬ ધરાવે છે
- મગજની કાર્યક્ષમતાને ટેકો આપે છે
- શરીરના વિકાસમાં મદદ કરે છે

**સારા ચરબીય તત્ત્વોના ફાયદા**

- હૃદયને તંદુરસ્ત રાખે છે
- કોલેસ્ટેરોલનું સંતુલન સુધારે છે
- રોગપ્રતિકારક શક્તિ વધારે છે
- ત્વચા અને વાળ માટે લાભદાયક છે

👉 ઠંડા દબાણના તેલમાં આવા સારા ચરબીય તત્ત્વો વધુ હોય છે

**હાનિકારક ચરબીય તત્ત્વો શું છે?**

હાનિકારક ચરબીય તત્ત્વોનું નિયમિત સેવન આરોગ્યને નુકસાન પહોંચાડી શકે છે.

**હાનિકારક ચરબીય તત્ત્વોના પ્રકાર**

કૃત્રિમ રૂપાંતરિત ચરબી:
- પ્રક્રિયિત અને શુદ્ધિકૃત તેલમાં મળી શકે છે
- ઔદ્યોગિક પ્રક્રિયા દરમિયાન બને છે

અતિશય સંતૃપ્ત ચરબી:
- હાનિકારક કોલેસ્ટેરોલ વધારી શકે છે
- હૃદય સંબંધિત સમસ્યાઓ સાથે જોડાયેલી છે

**હાનિકારક ચરબીના પ્રભાવ**

- હૃદયરોગનો જોખમ વધારે છે
- હાનિકારક કોલેસ્ટેરોલ વધારે છે
- વજન વધારો કરે છે
- જીવનશૈલી સંબંધિત રોગોને પ્રોત્સાહન આપે છે

**ઠંડા દબાણનું તેલ અને શુદ્ધિકૃત તેલ**

ઠંડા દબાણનું તેલ:
- કુદરતી રીતે કાઢવામાં આવે છે
- પોષક તત્ત્વો અને ઑક્સીકરણ વિરોધી તત્ત્વો જાળવી રાખે છે
- સારા ચરબીય તત્ત્વોથી સમૃદ્ધ હોય છે
- રસાયણમુક્ત હોય છે

શુદ્ધિકૃત તેલ:
- રસાયણોથી પ્રક્રિયિત થાય છે
- પોષક તત્ત્વોમાં ઘટાડો થાય છે
- હાનિકારક ચરબી ઉત્પન્ન થઈ શકે છે
- કુદરતી મૂલ્ય ઓછું રહે છે

**આ કેમ મહત્વનું છે**

તેલનો ઉપયોગ રોજ રસોઈ, તળવા અને બીજી ઘણી વાનગીઓમાં થાય છે.

👉 તેલમાં કરેલો નાનો બદલાવ પણ લાંબા ગાળે આરોગ્યમાં મોટો ફેરફાર લાવી શકે છે

**યોગ્ય તેલ પસંદ કરવાની સૂચનાઓ**

- ઠંડા દબાણનું તેલ પસંદ કરો
- શુદ્ધિકૃત તેલ ટાળો
- સંતુલિત પ્રમાણમાં વાપરો
- વધુ સારા પોષણ માટે તેલ ફેરવીને વાપરો

**અંતિમ વિચાર**

બધી ચરબી નુકસાનકારક નથી — યોગ્ય ચરબી શરીર માટે જરૂરી છે.

સમજદારીથી પસંદ કરો:
- સારા ચરબીય તત્ત્વો → વધુ સારું આરોગ્ય
- હાનિકારક ચરબીય તત્ત્વો → આરોગ્ય જોખમ

આજે જ વધુ આરોગ્યપ્રદ તેલ પસંદ કરો.`,
  },
  {
    id: 6,
    title: 'Different Uses of Oils: Choose the Right Oil for the Right Purpose',
    titleGu: 'વિવિધ તેલોના ઉપયોગ: યોગ્ય કામ માટે યોગ્ય તેલ પસંદ કરો',
    image: blog6,
    date: '06 Apr 2026',
    dateGu: '૦૬ એપ્રિલ ૨૦૨૬',
    category: 'Guide',
    categoryGu: 'માર્ગદર્શન',
    content: `In every Indian kitchen, oil is not just an ingredient — it plays a key role in taste, nutrition, and tradition. Each oil has unique properties and specific uses.

At Manna Pure Oil, we help you choose the right oil for the right purpose.

**Cold Pressed Groundnut Oil**

What makes it special:
- Rich in healthy fats
- Mild flavor
- Good heat stability

Best uses:
- Deep frying
- Everyday cooking
- Snacks and namkeen

👉 A perfect all-rounder oil

**Cold Pressed Sunflower Oil**

What makes it special:
- Light and easy to digest
- Rich in Vitamin E
- Neutral taste

Best uses:
- Daily cooking
- Light frying
- Baking

👉 Ideal for light meals

**Cold Pressed Mustard Oil**

What makes it special:
- Strong natural flavor
- Antibacterial properties
- Rich in omega fats

Best uses:
- Traditional cooking
- Pickles
- Frying and tadka

👉 Perfect for authentic taste

**Cold Pressed Coconut Oil**

What makes it special:
- Healthy saturated fats
- Natural aroma
- Cooling properties

Best uses:
- South Indian dishes
- Light cooking
- Baking and desserts

👉 Also useful for skin and hair

**Cold Pressed White Sesame Oil**

What makes it special:
- Mild nutty flavor
- Rich in calcium and antioxidants
- Light texture

Best uses:
- Salad dressing
- Light cooking
- Fusion dishes

👉 Adds subtle flavor

**Cold Pressed Black Sesame Oil**

What makes it special:
- Strong aroma
- High in nutrients
- Traditionally valued

Best uses:
- Traditional recipes
- Wellness uses
- Seasonal cooking

👉 Known for deep nourishment

**Why Using Different Oils Matters**

- Different oils provide different nutrients
- Improves taste variety
- Supports balanced nutrition

👉 Rotating oils is a healthy practice

**Smart Kitchen Practice**

- Use groundnut oil for frying
- Use sunflower oil for light cooking
- Use mustard oil for traditional dishes
- Use coconut oil for specific recipes
- Use sesame oils for flavor and health

**Why Choose Manna Pure Oil?**

- 100% cold pressed oils
- No chemicals or refining
- Rich in natural nutrients
- Made with care

**Final Thoughts**

Every oil has its own strength — using it correctly makes all the difference.

Choose:
- Right oil
- Right use
- Right health`,

    contentGu: `દરેક ભારતીય રસોડામાં તેલ માત્ર એક ઘટક નથી — તે સ્વાદ, પોષણ અને પરંપરાનો મહત્વપૂર્ણ ભાગ છે. દરેક તેલની પોતાની વિશેષતા અને યોગ્ય ઉપયોગ હોય છે.

મન્ના પ્યોર ઓઇલ તમને યોગ્ય કામ માટે યોગ્ય તેલ પસંદ કરવામાં મદદ કરે છે.

**ઠંડા દબાણનું મગફળીનું તેલ**

એને ખાસ શું બનાવે છે:
- સારા ચરબીય તત્ત્વોથી સમૃદ્ધ
- મધ્યમ સ્વાદ
- ઊંચા તાપમાં સ્થિર રહે છે

કયા ઉપયોગ માટે યોગ્ય:
- ઊંડું તળવું
- રોજિંદી રસોઈ
- નાસ્તા અને નમકીન

👉 દરેક કામ માટે ઉપયોગી તેલ

**ઠંડા દબાણનું સૂર્યમુખી તેલ**

એને ખાસ શું બનાવે છે:
- હળવું અને સહેલાઈથી પચાય એવું
- વિટામિન ઇથી સમૃદ્ધ
- સૌમ્ય સ્વાદ

કયા ઉપયોગ માટે યોગ્ય:
- રોજિંદી રસોઈ
- હળવું તળવું
- ભઠ્ઠીમાં બનતી વાનગીઓ

👉 હળવા ભોજન માટે ઉત્તમ

**ઠંડા દબાણનું સરસવનું તેલ**

એને ખાસ શું બનાવે છે:
- તીવ્ર કુદરતી સ્વાદ
- જંતુનિવારક ગુણધર્મો
- ઓમેગા ચરબીય અમ્લોથી સમૃદ્ધ

કયા ઉપયોગ માટે યોગ્ય:
- પરંપરાગત રસોઈ
- અથાણા
- તળવું અને વઘાર

👉 અસલી સ્વાદ માટે ઉત્તમ

**ઠંડા દબાણનું નાળિયેર તેલ**

એને ખાસ શું બનાવે છે:
- આરોગ્યપ્રદ સંતૃપ્ત ચરબી
- કુદરતી સુગંધ
- શીતળતા આપનાર ગુણ

કયા ઉપયોગ માટે યોગ્ય:
- દક્ષિણ ભારતીય વાનગીઓ
- હળવી રસોઈ
- મીઠાઈ અને ભઠ્ઠીમાં બનતી વાનગીઓ

👉 ત્વચા અને વાળ માટે પણ લાભદાયક

**ઠંડા દબાણનું સફેદ તલનું તેલ**

એને ખાસ શું બનાવે છે:
- હળવો દાણા જેવો સ્વાદ
- કેલ્શિયમ અને ઑક્સીકરણ વિરોધી તત્ત્વોથી સમૃદ્ધ
- હળવું ગાઢપણ

કયા ઉપયોગ માટે યોગ્ય:
- સલાડ પર વાપરવા
- હળવી રસોઈ
- મિશ્ર સ્વાદવાળી વાનગીઓ

👉 ભોજનમાં નાજુક લહેજો ઉમેરે છે

**ઠંડા દબાણનું કાળા તલનું તેલ**

એને ખાસ શું બનાવે છે:
- ગાઢ સુગંધ
- પોષક તત્ત્વોથી સમૃદ્ધ
- પરંપરાગત રીતે ખૂબ માન્ય

કયા ઉપયોગ માટે યોગ્ય:
- પરંપરાગત વાનગીઓ
- આરોગ્યલક્ષી ઉપયોગ
- ઋતુ અનુસાર બનતી રસોઈ

👉 ઊંડું પોષણ આપે છે

**વિવિધ તેલ વાપરવું કેમ જરૂરી છે**

- દરેક તેલ અલગ પ્રકારના પોષક તત્ત્વો આપે છે
- સ્વાદમાં વૈવિધ્ય લાવે છે
- સંતુલિત પોષણને ટેકો આપે છે

👉 તેલ ફેરવીને વાપરવાની ટેવ આરોગ્યપ્રદ છે

**સમજદારીભરી રસોડાની રીત**

- તળવા માટે મગફળીનું તેલ વાપરો
- હળવી રસોઈ માટે સૂર્યમુખી તેલ વાપરો
- પરંપરાગત વાનગીઓ માટે સરસવનું તેલ વાપરો
- ખાસ વાનગીઓ માટે નાળિયેર તેલ વાપરો
- સ્વાદ અને આરોગ્ય માટે તલના તેલો વાપરો

**મન્ના પ્યોર ઓઇલ કેમ પસંદ કરવું?**

- સો ટકા ઠંડા દબાણના તેલો
- કોઈ રસાયણ અથવા શુદ્ધિકરણ નહીં
- કુદરતી પોષક તત્ત્વોથી સમૃદ્ધ
- કાળજીપૂર્વક બનાવેલા

**અંતિમ વિચાર**

દરેક તેલની પોતાની ખાસ શક્તિ છે — એને યોગ્ય રીતે વાપરશો તો સાચો લાભ મળશે.

પસંદ કરો:
- યોગ્ય તેલ
- યોગ્ય ઉપયોગ
- યોગ્ય આરોગ્ય`,
  },
  {
    id: 7,
    title: 'Why Gir Cow Bilona Ghee is the Healthiest Choice for Your Family',
    titleGu: 'ગીર ગાયનું બિલોના ઘી તમારા પરિવાર માટે સૌથી આરોગ્યપ્રદ પસંદગી કેમ છે',
    image: blog7,
    date: '06 Apr 2026',
    dateGu: '૦૬ એપ્રિલ ૨૦૨૬',
    category: 'Health',
    categoryGu: 'આરોગ્ય',
    content: `In every Indian household, ghee is more than just an ingredient — it represents health, tradition, and care.

But the real question is:
Is the ghee you use truly healthy?

The answer depends on:
- Quality of milk (Gir Cow A2 milk)
- Method of preparation (Bilona process)

👉 Together, they create pure and nourishing Bilona Ghee

**What is Gir Cow Bilona Ghee?**

- Made from A2 milk of Gir cows
- Prepared using traditional bilona method
- Natural, chemical-free, and authentic

👉 More beneficial than regular ghee

**What is the Bilona Method?**

- Milk is converted into curd
- Curd is hand-churned using wooden bilona
- Butter is slowly heated to make ghee

👉 Slow process ensures maximum nutrition

**1. Rich in A2 Nutrition**

- Contains A2 protein, easy to digest
- Supports metabolism
- Suitable for all age groups

**2. Retains Maximum Nutrients**

- Preserves vitamins A, D, E, K
- Keeps antioxidants intact
- More nutritious than machine-made ghee

**3. Improves Digestion**

- Made from curd, not cream
- Supports gut health
- Helps nutrient absorption

**4. Boosts Immunity**

- Strengthens immunity
- Helps fight illnesses
- Supports overall health

**5. Supports Brain Development**

- Healthy fats nourish brain
- Improves memory and focus
- Beneficial for children

**6. Heart-Friendly (in moderation)**

- Contains balanced fats
- Helps maintain cholesterol
- Better than refined oils

**7. 100% Natural**

- No preservatives
- No refining
- Safe for daily use

**8. Rich Taste & Aroma**

- Authentic flavor
- Natural fragrance
- Traditional taste

**Bilona Ghee vs Regular Ghee**

Bilona Ghee:
- Made from curd
- Nutrient-rich
- Easy to digest
- Traditional process

Regular Ghee:
- Made from cream
- Less nutrients
- Heavier to digest
- Industrial process

**Why Choose Manna Pure Oil?**

- Made from Gir cow A2 milk
- Authentic bilona method
- No chemicals or shortcuts
- Made with care

**Final Thoughts**

Choosing the right ghee means choosing better health.

Bilona ghee offers:
- Better nutrition
- Better digestion
- Better lifestyle

👉 A true return to purity and tradition`,

    contentGu: `દરેક ભારતીય ઘરમાં ઘી માત્ર એક ઘટક નથી — તે આરોગ્ય, પરંપરા અને કાળજીનું પ્રતિક છે.

પરંતુ સાચો પ્રશ્ન એ છે:
શું તમે જે ઘી વાપરો છો તે ખરેખર આરોગ્યપ્રદ છે?

જવાબ બે બાબતો પર આધારિત છે:
- દૂધની ગુણવત્તા
- બનાવવાની રીત

👉 આ બંને મળીને શુદ્ધ અને પૌષ્ટિક બિલોના ઘી બનાવે છે

**ગીર ગાયનું બિલોના ઘી શું છે?**

- ગીર ગાયના ઉત્તમ દૂધથી બનેલું
- પરંપરાગત બિલોના પદ્ધતિથી તૈયાર થયેલું
- કુદરતી, રસાયણમુક્ત અને અસલી

👉 સામાન્ય ઘી કરતાં વધુ લાભદાયક

**બિલોના પદ્ધતિ શું છે?**

- દૂધમાંથી દહીં બનાવવામાં આવે છે
- દહીંને લાકડાની રવડીથી મથીને માખણ કાઢવામાં આવે છે
- માખણને ધીમે તાપે ગરમ કરીને ઘી બનાવવામાં આવે છે

👉 ધીમી પ્રક્રિયા વધુમાં વધુ પોષણ જાળવી રાખે છે

**૧. પૌષ્ટિક ગુણોથી સમૃદ્ધ**

- સહેલાઈથી પચાય એવું બને છે
- શરીરની ક્રિયાશક્તિને ટેકો આપે છે
- દરેક વયના લોકો માટે યોગ્ય છે

**૨. વધુમાં વધુ પોષક તત્ત્વો જળવાય છે**

- વિટામિન એ, ડી, ઇ અને કે જાળવી રાખે છે
- ઑક્સીકરણ વિરોધી તત્ત્વો અખંડિત રહે છે
- યાંત્રિક રીતે બનેલા ઘી કરતાં વધુ પૌષ્ટિક હોય છે

**૩. પાચન સુધારે છે**

- ક્રીમમાંથી નહીં પરંતુ દહીંમાંથી બને છે
- આંતરડાંના આરોગ્યને ટેકો આપે છે
- પોષક તત્ત્વોનું શોષણ સુધારે છે

**૪. રોગપ્રતિકારક શક્તિ વધારે છે**

- શરીરની રક્ષણશક્તિ મજબૂત કરે છે
- સામાન્ય બીમારીઓ સામે લડવામાં મદદ કરે છે
- સમગ્ર આરોગ્યને ટેકો આપે છે

**૫. મગજના વિકાસને ટેકો આપે છે**

- આરોગ્યપ્રદ ચરબી મગજને પોષણ આપે છે
- યાદશક્તિ અને એકાગ્રતા સુધારે છે
- બાળકો માટે ખાસ લાભદાયક છે

**૬. મર્યાદિત પ્રમાણમાં હૃદયમૈત્રી**

- સંતુલિત ચરબી ધરાવે છે
- કોલેસ્ટેરોલનું સંતુલન જાળવવામાં મદદ કરે છે
- ઘણા ઔદ્યોગિક વિકલ્પો કરતાં વધુ સારો વિકલ્પ છે

**૭. સો ટકા કુદરતી**

- કોઈ સંરક્ષક નથી
- કોઈ શુદ્ધિકરણ નથી
- રોજિંદા ઉપયોગ માટે સુરક્ષિત છે

**૮. સમૃદ્ધ સ્વાદ અને સુગંધ**

- અસલી સ્વાદ
- કુદરતી સુવાસ
- પરંપરાગત લહેજો

**બિલોના ઘી અને સામાન્ય ઘી**

બિલોના ઘી:
- દહીંમાંથી બનેલું
- પોષક તત્ત્વોથી સમૃદ્ધ
- સહેલાઈથી પચાય એવું
- પરંપરાગત પ્રક્રિયા

સામાન્ય ઘી:
- ક્રીમમાંથી બનેલું
- ઓછી પોષકતા
- પચવામાં ભારે
- ઔદ્યોગિક પ્રક્રિયા

**મન્ના પ્યોર ઓઇલ કેમ પસંદ કરવું?**

- ઉત્તમ ગુણવત્તાવાળા દૂધથી બનાવેલું
- અસલી બિલોના પદ્ધતિથી તૈયાર થયેલું
- કોઈ રસાયણ અથવા ટૂંકા માર્ગ વગર બનાવેલું
- કાળજીપૂર્વક તૈયાર કરેલું

**અંતિમ વિચાર**

યોગ્ય ઘી પસંદ કરવાનો અર્થ છે વધુ સારું આરોગ્ય પસંદ કરવું.

બિલોના ઘી આપે છે:
- વધુ સારું પોષણ
- વધુ સારું પાચન
- વધુ સારું જીવન

👉 આ છે શુદ્ધતા અને પરંપરાની સાચી ઓળખ`,
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const isGu = i18n.language === 'gu';

  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-4">📄</div>
        <h1 className="text-2xl font-bold text-brand-purple-800 mb-4">
          {isGu ? 'બ્લોગ મળ્યો નથી' : 'Blog not found'}
        </h1>
        <Link
          to="/blogs"
          className="text-brand-orange-500 hover:underline font-semibold"
        >
          {isGu ? '← બ્લોગ્સ પર પાછા જાઓ' : '← Back to Blogs'}
        </Link>
      </div>
    );
  }

  const contentToShow =
    isGu && blog.contentGu ? blog.contentGu : blog.content;

  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h3
            key={i}
            className="text-xl font-bold text-brand-purple-800 mt-6 mb-2"
          >
            {line.replace(/\*\*/g, '')}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li
            key={i}
            className="text-gray-700 ml-4 list-disc leading-relaxed"
          >
            {line.slice(2)}
          </li>
        );
      }
      if (line.trim() === '') return <br key={i} />;
      return (
        <p key={i} className="text-gray-700 leading-relaxed mb-2">
          {line}
        </p>
      );
    });
  };

  const otherBlogs = blogData.filter((b) => b.id !== blog.id);

  return (
    <div className="min-h-screen bg-gradient-purple py-12">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-white hover:text-brand-orange-500 font-semibold mb-8 transition"
        >
          <FaArrowLeft />
          {isGu ? 'બ્લોગ્સ પર પાછા જાઓ' : 'Back to Blogs'}
        </Link>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-8 bg-gray-100 flex items-center justify-center">
          <img
            src={blog.image}
            alt={isGu ? blog.titleGu : blog.title}
            className="w-full h-full object-fill"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="flex items-center gap-1 text-brand-orange-500 font-semibold text-sm">
            <FaTag />
            {isGu ? blog.categoryGu : blog.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <FaCalendar />
            {isGu ? blog.dateGu : blog.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          {isGu ? blog.titleGu : blog.title}
        </h1>

        {/* Content */}
        <div className="bg-[#D0F0C0] rounded-3xl shadow-md p-8 mb-10">
          <div className="p-0">{renderContent(contentToShow)}</div>
        </div>

        {/* Related Blogs */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            {isGu ? 'અન્ય બ્લોગ્સ' : 'More Blogs'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherBlogs.map((b) => (
              <Link
                key={b.id}
                to={`/blog/${b.id}`}
                className="bg-[#D0F0C0] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <img
                  src={b.image}
                  alt={isGu ? b.titleGu : b.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="p-4">
                  <span className="text-xs text-brand-orange-500 font-semibold">
                    {isGu ? b.categoryGu : b.category}
                  </span>
                  <h3 className="font-bold text-brand-purple-800 mt-1 group-hover:text-brand-orange-500 transition">
                    {isGu ? b.titleGu : b.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPost;
