import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft, FaStar, FaLeaf } from "react-icons/fa";
import { GiOilDrum } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { products, getWhatsAppOrderUrl } from "../data/products";

const ProductDetail = () => {

const { id } = useParams();
const navigate = useNavigate();
const { addToCart } = useCart();
const { i18n } = useTranslation();
const isGu = i18n.language === "gu";

const [product, setProduct] = useState(null);
const [related, setRelated] = useState([]);
const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
const [selectedImageIdx, setSelectedImageIdx] = useState(0);
const [quantity, setQuantity] = useState(1);
const [activeTab, setActiveTab] = useState("description");
const [addedAnim, setAddedAnim] = useState(false);

useEffect(() => {

const p = products.find(x => x._id === id);

if (!p) {
toast.error("Product not found");
navigate("/products");
return;
}

setProduct(p);

let relatedProducts = products.filter(
x => x._id !== id && x.category._id === p.category._id
);

if (relatedProducts.length === 0) {
relatedProducts = products.filter(x => x._id !== id);
}

setRelated(relatedProducts.slice(0,4));
window.scrollTo(0,0);

}, [id]);

if (!product)
return (
<div className="min-h-screen flex items-center justify-center">
<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
</div>
);

const selectedSize = product.sizes?.[selectedSizeIdx] || null;

const currentImages =
selectedSize?.images?.length
? selectedSize.images
: product.images?.length
? product.images
: [product.image];

const displayImage = currentImages[selectedImageIdx] || product.image;

const handleAddToCart = () => {

if (!selectedSize) {
toast.error("Please select size");
return;
}

addToCart(
{ ...product, price: selectedSize.price, size: selectedSize.size },
quantity
);

setAddedAnim(true);
setTimeout(() => setAddedAnim(false), 1200);

toast.success(isGu ? "કાર્ટ માં ઉમેરાયું!" : "Added to cart!");

};

const parseLines = (text) =>
text ? text.split(/\n|\|/).map(s => s.trim()).filter(Boolean) : [];

const tabs = [
{ key: "description", en: "Description", gu: "વર્ણન" },
{ key: "benefits", en: "Benefits", gu: "ફાયદા" },
{ key: "uses", en: "Uses", gu: "ઉપયોગ" },
];

return (

<div className="min-h-screen bg-gradient-purple overflow-x-hidden">

<div className="max-w-7xl mx-auto px-4 pt-8">

<button
onClick={() => navigate("/products")}
className="flex items-center gap-2 text-orange-100 hover:text-orange-400 transition font-semibold group mb-6"
>
<FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
{isGu ? "ઉત્પાદનો પર જાઓ" : "Back to Products"}
</button>

</div>

<div className="max-w-7xl mx-auto px-4 pb-16">

<div className="grid lg:grid-cols-2 gap-10">

{/* IMAGE */}

<div className="space-y-4">

<div className="rounded-3xl shadow-lg overflow-hidden mx-auto w-full flex justify-center">

<img
src={displayImage}
alt={product.name}
className="max-h-[380px] w-full object-contain transition duration-300 hover:scale-105"
/>

</div>

{currentImages.length > 1 && (

<div className="flex gap-3 overflow-x-auto pb-2 justify-center">

{currentImages.map((img, idx) => (

<button
key={idx}
onClick={() => setSelectedImageIdx(idx)}
className={`w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden border-2 ${
selectedImageIdx === idx
? "border-orange-500"
: "border-gray-200"
}`}
>

<img
src={img}
alt=""
className="w-full h-full object-contain bg-amber-50"
/>

</button>

))}

</div>

)}

</div>

{/* PRODUCT INFO */}

<div className="space-y-6">

<div>

<span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">
{isGu
? product.category.nameGu || product.category.name
: product.category.name}
</span>

<h1 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
{isGu && product.nameGu ? product.nameGu : product.name}
</h1>

<div className="flex items-center gap-1 mt-2">

{[...Array(5)].map((_, i) => (
<FaStar key={i} className="text-yellow-400 text-sm" />
))}

<span className="text-sm text-purple-200 ml-1">(4.8)</span>

</div>

</div>

{/* PRICE */}

<div className="bg-[#D0F0C0] rounded-3xl p-6 shadow-xl">

<p className="text-5xl font-extrabold text-purple-700">
₹{selectedSize?.price || product.sizes?.[0]?.price || 0}
</p>

<p className="text-sm text-gray-500 mt-1">
{selectedSize?.size}
</p>

</div>

{/* SIZE */}

{product.sizes?.length > 0 && (

<div>

<p className="font-semibold text-purple-100 mb-3">
{isGu ? "સાઈઝ પસંદ કરો" : "Select Size"}
</p>

<div className="flex flex-wrap gap-3">

{product.sizes.map((sv, idx) => (

<button
key={idx}
onClick={() => {
setSelectedSizeIdx(idx);
setSelectedImageIdx(0);
}}
className={`px-5 py-2 rounded-xl border ${
selectedSizeIdx === idx
? "bg-emerald-500 text-white"
: "bg-[#D0F0C0]"
}`}
>

{sv.size}

<span className="block text-xs">
₹{sv.price}
</span>

</button>

))}

</div>

</div>

)}

{/* QUANTITY */}

<div className="flex items-center gap-4">

<p className="font-semibold text-purple-100">
{isGu ? "જથ્થો" : "Quantity"}
</p>

<div className="flex items-center border rounded-xl bg-[#D0F0C0]">

<button
onClick={() => setQuantity(Math.max(1, quantity - 1))}
className="px-4 py-2"
>
-
</button>

<span className="px-4">{quantity}</span>

<button
onClick={() => setQuantity(quantity + 1)}
className="px-4 py-2"
>
+
</button>

</div>

</div>

{/* BUTTONS */}

<div className="flex gap-3">

<button
onClick={handleAddToCart}
className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white"
>

<FaShoppingCart />

{addedAnim
? (isGu ? "ઉમેરાયું!" : "Added!")
: (isGu ? "કાર્ટ માં ઉમેરો" : "Add To Cart")}

</button>

<button
onClick={() => {
handleAddToCart();
navigate("/cart");
}}
className="flex-1 py-3 rounded-xl bg-orange-500 text-white"
>

{isGu ? "હમણાં ખરીદો" : "Buy Now"}

</button>

</div>

{/* WHATSAPP */}

<a
href={getWhatsAppOrderUrl(product, selectedSize, quantity)}
target="_blank"
rel="noreferrer"
className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-white bg-green-500"
>

<FaWhatsapp />

{isGu
? "WhatsApp પર ઓર્ડર કરો"
: "Order on WhatsApp"}

</a>

</div>

</div>

{/* RELATED PRODUCTS */}
{/* RELATED PRODUCTS */}

{related.length > 0 && (

<div className="mt-16">

<h2 className="text-3xl font-bold text-white mb-8">

{isGu
? "સંબંધિત ઉત્પાદનો"
: "Related Products"}

</h2>

<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

{related.map(item => (
<ProductCard key={item._id} product={item} />
))}

</div>

</div>

)}


</div>

</div>
)}

</div>

</div>

);

};

export default ProductDetail;
