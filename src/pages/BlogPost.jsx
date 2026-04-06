import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';
import blog1 from "../assets/History of Oil 1600 x 900.jpg";
import blog2 from "../assets/journey of oil 1600 x 900.jpg";
import blog3 from "../assets/father son 1600.jpeg";
import blog4 from "../assets/Cold Pressed vs Refinend 1600 x 900.jpg";
import blog5 from "../assets/different oil 1600 x 900.jpg";
import blog6 from "../assets/Bilona Ghee 1600 x 900 .jpg";

const blogData = [
  {
  id: 1,
  title: 'The History of Indian Cooking Oils: From Tradition to Today',
  titleGu: 'ભારતીય રસોઈ તેલનો ઇતિહાસ: પરંપરાથી આજ સુધી',
  image: blog1,
  date: '06 Apr 2026',
  category: 'Awareness / જાગૃતિ',
  content: `In every Indian kitchen, oil is not just an ingredient—it’s a story of culture, tradition, health, and generations of wisdom.

**Ancient India: The Beginning of Pure Oils**

Thousands of years ago, Indian cooking was rooted in Ayurveda and natural living. Oils were used not just for cooking but also for healing and rituals.

- Groundnut Oil was popular in western India for its rich taste and high heat tolerance
- Mustard Oil was widely used in northern and eastern regions for its strong flavor
- Sesame Oil was considered sacred and used in cooking and rituals
- Coconut Oil was a staple in southern coastal regions

These oils were extracted using traditional wood-pressed methods, preserving purity and nutrition.

**Traditional Wisdom: Regional Oils**

India’s diversity influenced oil choices based on climate and lifestyle:

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
  
  contentGu: `દરેક ભારતીય રસોડામાં તેલ માત્ર એક ingredient નથી — તે સંસ્કૃતિ, પરંપરા, સ્વાસ્થ્ય અને પેઢીઓની સમજણની વાર્તા છે.

**પ્રાચીન ભારત: શુદ્ધ તેલની શરૂઆત**

હજારો વર્ષ પહેલાં ભારતીય રસોઈ આયુર્વેદ અને કુદરતી જીવન પર આધારિત હતી. તેલનો ઉપયોગ માત્ર રસોઈમાં નહીં પરંતુ સારવાર અને ધાર્મિક વિધિમાં પણ થતો હતો.

- સિંગ તેલ પશ્ચિમ ભારતમાં તેના સ્વાદ અને high heat માટે જાણીતું હતું
- સરસવ તેલ ઉત્તર અને પૂર્વ ભારતમાં લોકપ્રિય હતું
- તલ તેલ પવિત્ર માનવામાં આવતું અને વિધિમાં વપરાતું
- નાળિયેર તેલ દક્ષિણ ભારતના વિસ્તારોમાં મુખ્ય હતું

આ તેલો traditional wood press (ઘાણી) વડે બનાવવામાં આવતા હતા, જેથી purity અને nutrition જળવાતું.

**પરંપરાગત સમજ: વિસ્તાર મુજબ તેલ**

ભારતની વિવિધતા પ્રમાણે તેલ પસંદ કરાતાં:

- દક્ષિણ ભારત → નાળિયેર તેલ (cooling માટે)
- ઉત્તર ભારત → સરસવ તેલ (ગરમી માટે)
- મધ્ય અને પશ્ચિમ ભારત → સિંગ અને તલ તેલ (balance માટે)

આ બધું વૈજ્ઞાનિક રીતે યોગ્ય હતું.

**Refined Oil નો પ્રભાવ**

Industrialization પછી refined oils popular બન્યા.

પણ તેમાં નુકસાન થયું:
- Nutrients નો ઘટાડો
- Chemicals અને high heat processing
- પરંપરાથી દુરાવ

**Cold Pressed Oil ની વાપસી**

આજે લોકો ફરીથી cold pressed oils તરફ વળી રહ્યા છે.

**Cold Pressed Oil કેમ પસંદ કરવું?**
- Natural nutrients જળવાય
- કોઈ chemical નથી
- Digestion અને health માટે સારું
- Natural taste આપે

**આ કેમ મહત્વનું છે**

તમે જે તેલ વાપરો છો તે તમારા સ્વાસ્થ્ય પર સીધી અસર કરે છે:

- Heart health સુધરે
- Immunity વધે
- Natural lifestyle મળે

**અંતિમ વિચાર**

ભારત પાસે હંમેશા healthy cooking solutions હતા.

ક્યારેક આગળ વધવાનો શ્રેષ્ઠ રસ્તો… પાછા ફરવામાં હોય છે.`,
},
  {
  id: 2,
  title: 'From Seed to Bottle: The Journey of Wooden Cold-Pressed Oils',
  titleGu: 'બીજથી બોટલ સુધી: લાકડાની ઘાણીના કોલ્ડ-પ્રેસ્ડ તેલની સફર',
  image: blog2,
  date: '06 Apr 2026',
  category: 'Process / પ્રક્રિયા',
  content: `Every drop of oil you use tells a story — a story of nature, care, and tradition.

In today, s world of fast processing, wooden cold-pressed oils stand as a symbol of purity and authenticity.

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

આજના ઝડપી સમયમાં લાકડાની ઘાણીનું કોલ્ડ-પ્રેસ્ડ તેલ શુદ્ધતા અને વિશ્વાસનું પ્રતિક છે.

Manna Pure Oil આ સફરને તમારા રસોડા સુધી પહોંચાડે છે — જેમ હોવું જોઈએ તેમ.

**Step 1: શ્રેષ્ઠ બીજની પસંદગી**

સફર શરૂ થાય છે ઉત્તમ ગુણવત્તાવાળા બીજથી:

- સિંગ, તલ, સરસવ, નાળિયેર વગેરે
- શુદ્ધતા અને તાજગી માટે પસંદ કરેલ
- વિશ્વસનીય ખેડૂતો પાસેથી મેળવેલ

👉 સારું તેલ હંમેશા સારા બીજથી બને છે

**Step 2: સફાઈ અને કુદરતી તૈયારી**

Extraction પહેલા:

- ધૂળ અને ગંદકી દૂર કરવામાં આવે છે
- કુદરતી રીતે સૂર્યપ્રકાશમાં સુકવાય છે
- કોઈ chemical નો ઉપયોગ નથી

👉 શરૂઆતથી જ શુદ્ધતા જળવાય

**Step 3: લાકડાની ઘાણી (Cold Press Method)**

મુખ્ય પ્રક્રિયા:

- લાકડાની ઘાણીમાં ધીમે દબાવવામાં આવે છે
- કોઈ heat ઉત્પન્ન થતો નથી
- કોઈ chemical નો ઉપયોગ નથી
- ધીમું અને કુદરતી extraction

👉 Nutrients, સુગંધ અને સ્વાદ જળવાય

**Step 4: કુદરતી સેટલિંગ અને ફિલ્ટરિંગ**

Extraction પછી:

- તેલને કુદરતી રીતે સ્થિર થવા દેવામાં આવે છે
- અશુદ્ધિઓ અલગ થાય છે
- હળવું ફિલ્ટરિંગ થાય છે

👉 કોઈ refining નહીં, ફક્ત શુદ્ધ તેલ

**Step 5: સ્વચ્છ પેકેજિંગ**

છેલ્લું સ્ટેપ:

- Food-safe બોટલમાં ભરી શકાય છે
- Contamination થી સુરક્ષિત
- Freshness માટે સીલ કરવામાં આવે છે

👉 એ જ શુદ્ધતા તમારા ઘરે પહોંચે છે

**Cold Pressed Oil કેમ ખાસ છે?**

- Natural nutrients જળવાય
- Healthy fats થી ભરપૂર
- Natural સુગંધ અને સ્વાદ
- Chemical-free અને unrefined

👉 આ શુદ્ધ સ્વાસ્થ્ય છે

**Traditional vs Modern Oil**

લાકડાની ઘાણીનું તેલ:
- ધીમું અને કુદરતી process
- Nutrient-rich
- કોઈ chemical નહીં
- સંપૂર્ણ સ્વાદ

Refined Oil:
- High heat process
- Chemical treatment
- Nutrients નો ઘટાડો
- Artificial ફેરફાર

**આ કેમ મહત્વનું છે**

યોગ્ય તેલ પસંદ કરવાથી:

- સ્વાસ્થ્ય સુધરે
- સુરક્ષિત રસોઈ
- કુદરતી પોષણ
- પરંપરા સાથે જોડાણ

**અંતિમ વિચાર**

બીજથી બોટલ સુધી દરેક સ્ટેપ મહત્વનો છે.

Cold pressed oil પસંદ કરવું એટલે શુદ્ધતા, સ્વાસ્થ્ય અને પરંપરા પસંદ કરવી.`,
},
 {
  id: 3,
  title: 'Understanding Good Fats vs Bad Fats in Cooking Oil',
  titleGu: 'રસોઈ તેલમાં સારા ફેટ્સ અને ખરાબ ફેટ્સ સમજીએ',
  image: blog3,
  date: '06 Apr 2026',
  category: 'Health / સ્વાસ્થ્ય',
  content: `In every Indian kitchen, oil is the foundation of every meal. But not all fats are the same. Understanding good fats and bad fats can improve your family’s health.

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
  
  contentGu: `દરેક ભારતીય રસોડામાં તેલ દરેક ભોજનનો આધાર છે. પરંતુ બધા ફેટ્સ એકસરખા નથી. સારા અને ખરાબ ફેટ્સ સમજવાથી પરિવારનું સ્વાસ્થ્ય સુધરી શકે છે.

**રસોઈ તેલમાં ફેટ્સ શું છે?**

ફેટ્સ શરીર માટે જરૂરી પોષક તત્વો છે:

- Energy માટે
- Cell growth માટે
- Nutrient absorption માટે

👉 તમે કયો ફેટ લો છો તે મહત્વનું છે

**સારા ફેટ્સ શું છે?**

સારા ફેટ્સ શરીરને મદદ કરે છે અને સ્વાસ્થ્ય સુધારે છે.

**સારા ફેટ્સના પ્રકાર**

Monounsaturated Fats (MUFA):
- Bad cholesterol ઘટાડે
- Heart health સુધારે
- સિંગ તેલ અને સરસવ તેલમાં મળે

Polyunsaturated Fats (PUFA):
- Omega-3 અને Omega-6 થી ભરપૂર
- Brain function માટે સારું
- Body development માં મદદરૂપ

**સારા ફેટ્સના ફાયદા**

- Heart healthy રાખે
- Cholesterol balance સુધારે
- Immunity વધારે
- Skin અને hair માટે સારું

👉 Cold pressed oils માં આ ફેટ્સ ભરપૂર હોય છે

**ખરાબ ફેટ્સ શું છે?**

ખરાબ ફેટ્સ શરીરને નુકસાન પહોંચાડે છે.

**ખરાબ ફેટ્સના પ્રકાર**

Trans Fats:
- Processed અને refined oil માં મળે
- Industrial processing દરમિયાન બને

Excess Saturated Fats:
- Bad cholesterol વધારે
- Heart problems સાથે જોડાયેલ

**ખરાબ ફેટ્સના અસર**

- Heart disease નો જોખમ વધારે
- LDL cholesterol વધારે
- Weight gain કરે
- Lifestyle diseases લાવે

**Cold Pressed vs Refined Oil**

Cold Pressed Oil:
- કુદરતી રીતે બને
- Nutrients અને antioxidants જળવાય
- Good fats થી ભરપૂર
- Chemical-free

Refined Oil:
- Chemicals થી process થાય
- Nutrients નો ઘટાડો
- Trans fats હોઈ શકે
- Natural value ઓછી

**આ કેમ મહત્વનું છે**

તેલ દરરોજ cooking, frying અને dressing માં વપરાય છે.

👉 નાનું બદલાવ પણ લાંબા ગાળે મોટો ફરક પાડે છે

**યોગ્ય તેલ પસંદ કરવા માટે ટિપ્સ**

- Cold pressed oil પસંદ કરો
- Refined oil ટાળો
- સંતુલિત માત્રામાં વાપરો
- Oil rotation કરો

**અંતિમ વિચાર**

બધા ફેટ્સ ખરાબ નથી — સાચા ફેટ્સ જરૂરી છે.

સમજદારીથી પસંદ કરો:
- સારા ફેટ્સ → સારું સ્વાસ્થ્ય
- ખરાબ ફેટ્સ → જોખમ

આજે જ health માટે યોગ્ય પસંદગી કરો.`,
},
  {
  id: 4,
  title: 'Cold Pressed Oil vs Refined Oil: What You Must Know',
  titleGu: 'કોલ્ડ-પ્રેસ્ડ તેલ vs રિફાઇન્ડ તેલ: શું જાણવું જરૂરી છે',
  image: blog4,
  date: '06 Apr 2026',
  category: 'Awareness / જાગૃતિ',
  content: `In today’s health-conscious world, choosing the right cooking oil is very important. Many Indian households are now becoming aware of what they consume daily.

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
  
  contentGu: `આજના health-conscious સમયમાં યોગ્ય રસોઈ તેલ પસંદ કરવું ખૂબ જ મહત્વનું છે. ઘણા ભારતીય પરિવારો હવે તેઓ શું ખાય છે તેની જાગૃતિ રાખી રહ્યા છે.

મુખ્ય પ્રશ્ન છે: Cold Pressed Oil vs Refined Oil.

**Cold Pressed Oil શું છે?**

Cold pressed oil પરંપરાગત લાકડાની ઘાણી અથવા મશીન દ્વારા low temperature પર બનાવવામાં આવે છે:

- કોઈ heat નહીં
- કોઈ chemical નહીં
- કોઈ refining નહીં

👉 આ તેલને શુદ્ધ અને કુદરતી રાખે છે

**Refined Oil શું છે?**

Refined oil industrial processમાંથી પસાર થાય છે:

- High heat
- Chemical processing
- Bleaching અને deodorizing

👉 Shelf life વધે છે પરંતુ ગુણવત્તા ઘટે છે

**મુખ્ય તફાવત**

**1. Nutritional Value**

Cold Pressed Oil:
- Vitamins અને antioxidants થી ભરપૂર
- Natural nutrients જળવાય
- Healthy fats હોય

Refined Oil:
- Nutrients નો ઘટાડો
- ઓછું પોષણ

**2. Health Impact**

Cold Pressed Oil:
- Heart health માટે સારું
- Cholesterol balance કરે
- Immunity વધારે

Refined Oil:
- Bad cholesterol વધારી શકે
- Lifestyle diseases સાથે જોડાયેલ

**3. Processing Method**

Cold Pressed Oil:
- ઓછું processing
- Traditional method

Refined Oil:
- Heavy industrial process
- Chemicals નો ઉપયોગ

**4. Taste & Aroma**

Cold Pressed Oil:
- Natural સુગંધ
- Food નો સ્વાદ વધારે

Refined Oil:
- સુગંધ વગર
- Natural taste ઓછું

**5. Environmental Impact**

Cold Pressed Oil:
- Eco-friendly
- ખેડૂતોને support કરે

Refined Oil:
- વધુ energy use
- Industrial અસર

**Refined Oil વિશે સત્ય**

ઘણા લોકો માને છે કે refined oil healthy છે, પરંતુ:

- Chemical residues રહી શકે
- Natural nutrients નષ્ટ થાય
- લાંબા ગાળે નુકસાનકારક

**લોકો કેમ બદલાઈ રહ્યા છે**

આજે લોકો પસંદ કરે છે:

- શુદ્ધતા over processing
- પોષણ over દેખાવ
- સ્વાસ્થ્ય over convenience

👉 Cold pressed oil વધુ પસંદ બની રહ્યું છે

**અંતિમ વિચાર**

રસોઈ તેલ રોજની health decision છે.

સમજદારીથી પસંદ કરો:
- Natural vs Processed
- Nourishing vs Empty
- Traditional vs Industrial

આજે જ cold pressed oil તરફ બદલાવ લાવો.`,
},
{
  id: 5,
  title: 'Cold Pressed Oil Benefits: Why Every Indian Kitchen is Switching Today',
  titleGu: 'કોલ્ડ-પ્રેસ્ડ તેલના ફાયદા: કેમ દરેક ભારતીય રસોડું આજે બદલાઈ રહ્યું છે',
  image: blog5,
  date: '06 Apr 2026',
  category: 'Health / સ્વાસ્થ્ય',
  content: `In today’s fast-moving world, Indian families are slowly returning to natural and healthier choices. One major shift is the use of cold pressed oils in daily cooking.
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
  
  contentGu: `આજના ઝડપી સમયમાં ભારતીય પરિવારો ફરીથી કુદરતી અને સ્વસ્થ પસંદગી તરફ વળી રહ્યા છે. તેમાં સૌથી મોટો બદલાવ છે cold pressed oil નો ઉપયોગ.

Manna Pure Oil માં અમે માનીએ છીએ કે તમે શું બનાવો છો એટલું જ મહત્વનું છે કે તમે કયા તેલથી બનાવો છો.

**Cold Pressed Oil શું છે?**

Cold pressed oil low temperature પર heat અને chemical વગર બનાવવામાં આવે છે:

- કોઈ refining નહીં
- કોઈ chemical નહીં
- કોઈ nutrient loss નહીં

👉 તેલને શુદ્ધ અને કુદરતી રાખે છે

**1. Nutrients અને Antioxidants થી ભરપૂર**

Cold pressed oil માં હોય છે:

- Vitamin E
- Omega fatty acids
- Natural antioxidants

ફાયદા:
- Immunity વધારે
- Skin health સુધારે
- Heart health માટે સારું

👉 દરેક બુંદ શક્તિશાળી અને શુદ્ધ

**2. Heart Health માટે સારું**

Cold pressed oil માં good fats (MUFA & PUFA) હોય છે:

- Bad cholesterol ઘટાડે
- Good cholesterol વધારે
- Blood circulation સુધારે

👉 સ્વસ્થ હૃદય માટે સરળ પગલું

**3. Chemical-Free**

Refined oil માં chemicals વપરાય છે.

Cold pressed oil:
- Chemical-free
- Preservative-free
- Natural process

👉 સંપૂર્ણ સુરક્ષિત

**4. પરિવાર માટે સુરક્ષિત**

Cold pressed oil:

- બાળકો માટે safe
- સરળ પચન
- Overall health સુધારે

👉 પરિવારને પોષણ આપે

**5. Taste અને Aroma વધારે**

Cold pressed oil:

- Natural સુગંધ
- Rich taste
- Indian cooking માટે ઉત્તમ

👉 ભોજન વધુ સ્વાદિષ્ટ બને

**6. Eco-Friendly પસંદગી**

Cold pressed oil:

- ઓછું processing
- Energy efficient
- ખેડૂતોને support કરે

👉 પર્યાવરણ માટે સારું

**લોકો કેમ બદલાઈ રહ્યા છે**

આજે લોકો પસંદ કરે છે:

- Natural over processed
- Nutrition over convenience
- Health over shortcuts

👉 Cold pressed oil જરૂરી બની રહ્યું છે

**અંતિમ વિચાર**

તમે જે તેલ વાપરો છો તે તમારા સ્વાસ્થ્ય પર અસર કરે છે.

Cold pressed oil તરફ બદલાવ એટલે:
- સારું સ્વાસ્થ્ય
- સારું સ્વાદ
- સારું જીવન

આજે જ સમજદારીથી પસંદ કરો.`,
},
{
  id: 6,
  title: 'Why Gir Cow Bilona Ghee is the Healthiest Choice for Your Family',
  titleGu: 'ગિર ગાયનું બિલોના ઘી કેમ તમારા પરિવાર માટે સૌથી સ્વસ્થ પસંદગી છે',
  image: blog6,
  date: '06 Apr 2026',
  category: 'Health / સ્વાસ્થ્ય',
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
  
  contentGu: `દરેક ભારતીય ઘરમાં ઘી માત્ર એક ingredient નથી — તે સ્વાસ્થ્ય, પરંપરા અને પ્રેમનું પ્રતિક છે.

પરંતુ મુખ્ય પ્રશ્ન છે:
શું તમે જે ઘી વાપરો છો તે ખરેખર સ્વસ્થ છે?

જવાબ બે બાબતો પર આધારિત છે:
- દૂધની ગુણવત્તા (ગિર ગાયનું A2 દૂધ)
- બનાવવાની રીત (બિલોના પદ્ધતિ)

👉 આ બંને સાથે મળે ત્યારે શુદ્ધ બિલોના ઘી બને છે

**Gir Cow Bilona Ghee શું છે?**

- ગિર ગાયના A2 દૂધથી બનેલું
- પરંપરાગત બિલોના પદ્ધતિથી બનાવેલું
- કુદરતી અને chemical-free

👉 સામાન્ય ઘી કરતા વધુ ફાયદાકારક

**બિલોના પદ્ધતિ શું છે?**

- દૂધમાંથી દહીં બનાવવામાં આવે છે
- દહીંને લાકડાની રવડીથી મથવામાં આવે છે
- માખણને ધીમે ગરમ કરીને ઘી બનાવવામાં આવે છે

👉 ધીમું process વધુ nutrition આપે છે

**1. A2 Nutrition થી ભરપૂર**

- A2 protein પચવામાં સરળ
- Metabolism સુધારે
- દરેક વય માટે યોગ્ય

**2. વધુ Nutrients જળવાય**

- Vitamins A, D, E, K જળવાય
- Antioxidants રહે
- Machine ghee કરતાં વધુ પોષણ

**3. પાચન સુધારે**

- દહીંમાંથી બનેલું
- Gut health માટે સારું
- Nutrient absorption વધારે

**4. Immunity વધારે**

- શરીરની રક્ષણ શક્તિ વધારે
- બીમારીઓ સામે લડે
- Overall health સુધારે

**5. Brain Development માટે સારું**

- Brain cells ને પોષણ આપે
- Memory અને focus સુધારે
- બાળકો માટે લાભદાયક

**6. Heart-Friendly (મર્યાદામાં)**

- સંતુલિત ફેટ્સ
- Cholesterol balance રાખે
- Refined oil કરતા સારું

**7. 100% Natural**

- કોઈ preservatives નહીં
- કોઈ refining નહીં
- દૈનિક ઉપયોગ માટે સુરક્ષિત

**8. સ્વાદ અને સુગંધ**

- Authentic taste
- Natural સુગંધ
- Traditional flavor

**Bilona Ghee vs Regular Ghee**

Bilona Ghee:
- દહીંથી બનેલું
- Nutrient-rich
- સરળ પચન
- Traditional process

Regular Ghee:
- ક્રીમથી બનેલું
- ઓછું પોષણ
- ભારે પચન
- Industrial process

**Manna Pure Oil કેમ પસંદ કરવું?**

- ગિર ગાયના A2 દૂધથી બનેલું
- સાચી બિલોના પદ્ધતિ
- કોઈ chemical નહીં
- કાળજીપૂર્વક બનાવેલું

**અંતિમ વિચાર**

યોગ્ય ઘી પસંદ કરવું એટલે સ્વસ્થ જીવન પસંદ કરવું.

Bilona ghee આપે:
- વધુ પોષણ
- સારું પાચન
- સારું જીવન

👉 શુદ્ધતા અને પરંપરાની સાચી ઓળખ`,
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
        <h1 className="text-2xl font-bold text-brand-purple-800 mb-4">Blog not found</h1>
        <Link to="/blogs" className="text-brand-orange-500 hover:underline font-semibold">← Back to Blogs</Link>
      </div>
    );
  }

  const contentToShow = isGu && blog.contentGu ? blog.contentGu : blog.content;

  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={i} className="text-xl font-bold text-brand-purple-800 mt-6 mb-2">{line.replace(/\*\*/g, '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="text-gray-700 ml-4 list-disc leading-relaxed">{line.slice(2)}</li>;
      }
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="text-gray-700 leading-relaxed mb-2">{line}</p>;
    });
  };

  const otherBlogs = blogData.filter((b) => b.id !== blog.id);

  return (
    <div className="min-h-screen bg-gradient-purple py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-white hover:text-brand-orange-500 font-semibold mb-8 transition">
          <FaArrowLeft /> {isGu ? 'blogs ઉppar jaao' : 'Back to Blogs'}
        </Link>

        {/* Hero Image */}
       <div className="rounded-3xl overflow-hidden shadow-xl mb-8 bg-gray-100 flex items-center justify-center">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-full object-fil"
  />
</div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="flex items-center gap-1 text-brand-orange-500 font-semibold text-sm">
            <FaTag /> {blog.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <FaCalendar /> {blog.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          {isGu ? blog.titleGu : blog.title}
        </h1>

        {/* Content */}
        <div className="bg-[#D0F0C0] rounded-3xl shadow-md p-8 mb-10">
          <ul className="list-none p-0">{renderContent(contentToShow)}</ul>
        </div>

        {/* Related */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            {isGu ? 'અন્ય Blogs' : 'More Blogs'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherBlogs.map((b) => (
              <Link key={b.id} to={`/blog/${b.id}`} className="bg-[#D0F0C0] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group">
                <img src={b.image} alt={b.title} className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-4">
                  <span className="text-xs text-brand-orange-500 font-semibold">{b.category}</span>
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
