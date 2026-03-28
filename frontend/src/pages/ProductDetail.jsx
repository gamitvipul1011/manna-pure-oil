import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft, FaStar, FaLeaf, FaCheckCircle, FaHeart, FaShareAlt } from "react-icons/fa";
import { GiOilDrum } from "react-icons/gi";
import { toast } from "react-toastify";
import { productAPI } from "../utils/api";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";

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
  const [imgLoaded, setImgLoaded] = useState(false);
  const [addedAnim, setAddedAnim] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
    loadProduct();
    productAPI.getAll().then(r => setRelated(r.data.filter(p => p._id !== id).slice(0, 4))).catch(() => {});
  }, [id]);

  const loadProduct = async () => {
    try {
      const res = await productAPI.getById(id);
      setProduct(res.data);
      setSelectedSizeIdx(0);
      setSelectedImageIdx(0);
    } catch {
      toast.error("Product not found");
      navigate("/products");
    }
  };

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-brand-purple-600"></div>
    </div>
  );

  const selectedSize = product.sizes?.[selectedSizeIdx] || null;
  const currentImages = (() => {
    const sizeImgs = selectedSize?.images || [];
    if (sizeImgs.length > 0) return sizeImgs;
    return product.images?.length ? product.images : product.image ? [product.image] : [];
  })();
  const displayImage = currentImages[selectedImageIdx] || product.image;

  const handleSizeClick = (idx) => { setSelectedSizeIdx(idx); setSelectedImageIdx(0); setImgLoaded(false); };
// 🔥 ADD THIS FUNCTION TOP MA (parseLines niche)
const formatDescription = (text) => {
  if (!text) return null;
  return (
    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
      {text}
    </p>
  );
};
  const handleAddToCart = () => {
    if (!selectedSize) { toast.error("Please select size"); return; }
    addToCart({ ...product, price: selectedSize.price, size: selectedSize.size }, quantity);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
    toast.success(isGu ? "કાર્ટ માં ઉમેરાયું!" : "Added to cart!");
  };

  // Parse multiline text (newlines or | separated)
  const parseLines = (text) => text ? text.split(/\n|\|/).map(s => s.trim()).filter(Boolean) : [];

  const tabs = [
    { key: "description", en: "Description", gu: "વર્ણન" },
    { key: "benefits",    en: "Benefits",    gu: "ફાયદા" },
    { key: "uses",        en: "Uses",        gu: "ઉપયોગ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-amber-50">

      {/* BACK */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-brand-purple-700 hover:text-brand-orange-500 transition font-medium group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          {isGu ? "ઉત્પાદનો પર જાઓ" : "Back to Products"}
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* ===== LEFT: IMAGE COLUMN ===== */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-[#fdf6e3] via-amber-50 to-orange-100 rounded-3xl overflow-hidden shadow-2xl border border-amber-100"
              style={{ minHeight: 480 }}>
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple-200 rounded-full opacity-20 -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange-200 rounded-full opacity-20 translate-y-10 -translate-x-8"></div>

              <div className="flex items-center justify-center p-10 h-full" style={{ minHeight: 480 }}>
                <img
                  key={displayImage}
                  src={displayImage}
                  alt={product.name}
                  onLoad={() => setImgLoaded(true)}
                  className={`max-h-96 w-auto object-contain drop-shadow-2xl transition-all duration-700
                    ${imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    hover:scale-105`}
                />
              </div>

              {/* Stock badge */}
              {product.inStock && (
                <div className="absolute top-5 left-5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <FaCheckCircle /> {isGu ? "સ્ટોક માં છે" : "સ્ટોક માં"}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {currentImages.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {currentImages.map((img, i) => (
                  <button key={i} onClick={() => { setSelectedImageIdx(i); setImgLoaded(false); }}
                    className={`relative h-24 w-24 rounded-2xl overflow-hidden border-3 transition-all duration-300 
                      ${selectedImageIdx === i
                        ? "border-brand-orange-500 shadow-lg shadow-orange-200 scale-105"
                        : "border-gray-200 hover:border-brand-purple-400 hover:scale-105"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    {selectedImageIdx === i && (
                      <div className="absolute inset-0 bg-brand-orange-500/10"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ===== RIGHT: INFO COLUMN ===== */}
          <div className="space-y-5">

            {/* Category badge */}
            {product.category && (
              <span className="inline-block px-3 py-1 bg-brand-purple-100 text-brand-purple-700 rounded-full text-xs font-semibold">
                {product.category.name}
              </span>
            )}

            {/* Product Name */}
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                {(isGu && product.nameGu?.trim()) ? product.nameGu : product.name}
              </h1>
              {/* Show both names */}
              {product.nameGu?.trim() && (
                <p className="text-brand-purple-400 text-base mt-1 font-medium">
                  {isGu ? product.name : product.nameGu}
                </p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
              </div>
              <span className="text-gray-500 text-sm">(120 {isGu ? "સમીક્ષાઓ" : "Reviews"})</span>
              <span className="text-green-600 text-sm font-medium ml-2">✓ {isGu ? "સર્ટિફાઇડ" : "સર્ટિફાઇડ"}</span>
            </div>

            {/* Price Card */}
            <div className="bg-gradient-to-r from-brand-purple-700 to-brand-purple-600 rounded-2xl p-5 text-white shadow-xl">
              <div className="flex items-end gap-3">
                <p className="text-5xl font-black">₹{selectedSize?.price || 0}</p>
                <div className="mb-1">
                  <p className="text-purple-200 text-sm">{selectedSize?.size}</p>
                  <p className="text-green-300 text-xs font-semibold"> Free Delivery above ₹999</p>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes?.length > 0 && (
              <div>
                <p className="font-semibold text-gray-700 mb-3">
                  {isGu ? "સાઈઝ પસંદ કરો" : "Select Size"}
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((sv, idx) => (
                    <button key={idx} onClick={() => handleSizeClick(idx)}
                      className={`relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border-2
                        ${selectedSizeIdx === idx
                          ? "bg-brand-green-600 border-brand-green-600 text-white shadow-lg scale-105"
                          : "border-gray-300 text-gray-700 hover:border-brand-green-500 hover:scale-105"}`}>
                      {sv.size}
                      <span className={`block text-xs mt-0.5 ${selectedSizeIdx === idx ? "text-green-100" : "text-gray-400"}`}>
                        ₹{sv.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <p className="font-semibold text-gray-700">{isGu ? "જથ્થો" : "Quantity"}</p>
              <div className="flex items-center border-2 border-gray-200 rounded-2xl overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 bg-gray-50 hover:bg-gray-100 font-bold text-lg transition">−</button>
                <span className="px-6 py-3 font-bold text-lg min-w-[60px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 bg-gray-50 hover:bg-gray-100 font-bold text-lg transition">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white shadow-xl transition-all duration-300
                  ${addedAnim
                    ? "bg-green-500 scale-95"
                    : "bg-gradient-to-r from-brand-purple-700 to-brand-purple-600 hover:shadow-purple-300 hover:scale-[1.02]"}`}>
                <FaShoppingCart className={addedAnim ? "animate-bounce" : ""} />
                {addedAnim ? (isGu ? "કાર્ટ માં ઉમેરાયું!" : "Added!") : (isGu ? "કાર્ટ માં ઉમેરો" : "Add To Cart")}
              </button>
              <button onClick={() => { handleAddToCart(); navigate("/cart"); }}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-brand-orange-500 to-orange-600 hover:shadow-orange-300 hover:scale-[1.02] shadow-xl transition-all duration-300">
                {isGu ? "હમણાં ખરીદો" : "Buy Now"}
              </button>
            </div>

            {/* WhatsApp Order Button */}
            <a
              href={`https://wa.me/917874239595?text=${encodeURIComponent(
                `Hello! I want to order:\n*${product.name}*\nSize: ${selectedSize?.size || ''}\nPrice: ₹${selectedSize?.price || product.price}\nQty: ${quantity}\n\nPlease confirm my order.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-xl hover:shadow-green-300 hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {isGu ? "WhatsApp ઉppar Order karO" : "Order via WhatsApp"}
            </a>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: "🌿", en: "100% Natural", gu: "100% Natural" },
                { icon: "🏭", en: "Cold Pressed", gu: "Cold Pressed" },
                { icon: "✅", en: "FSSAI Certified", gu: "સર્ટિફાઇડ" },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center bg-green-50 rounded-xl p-3 text-center">
                  <span className="text-2xl mb-1">{b.icon}</span>
                  <span className="text-xs font-semibold text-green-700">{isGu ? b.gu : b.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== TABS SECTION ===== */}
        <div className="mt-16">
          {/* Tab Buttons */}
          <div className="flex gap-2 border-b-2 border-gray-100 mb-0">
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-4 font-bold text-base rounded-t-2xl transition-all duration-300 relative
                  ${activeTab === tab.key
                    ? "bg-white text-brand-purple-700 shadow-md border-2 border-b-0 border-gray-100 -mb-0.5"
                    : "text-gray-400 hover:text-brand-purple-600 hover:bg-white/60"}`}>
                {isGu ? tab.gu : tab.en}
                {activeTab === tab.key && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-orange-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-white to-purple-50 rounded-b-3xl rounded-tr-3xl shadow-lg p-8 border border-purple-100 min-h-48">

            {/* DESCRIPTION TAB - language toggle se content switch thay */}
            {activeTab === "description" && (
  <div className="flex items-start gap-4">

    <div className="w-10 h-10 bg-brand-purple-100 rounded-xl flex items-center justify-center shrink-0 mt-1">
      <GiOilDrum className="text-brand-purple-600 text-xl" />
    </div>

    <div className="flex-1">
      {isGu ? (
        product.descriptionGu?.trim() ? (
          formatDescription(product.descriptionGu)
        ) : (
          <div className="py-3 px-4 rounded-xl bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-100 shadow-sm">
  <p className="text-sm font-semibold text-purple-700">
    {isGu ? "વર્ણન ઉપલબ્ધ નથી" : "No description available"}
  </p>
</div>
        )
      ) : (
        formatDescription(product.description)
      )}
    </div>

  </div>
)}

            {/* BENEFITS TAB - language toggle se switch */}
            {activeTab === "benefits" && (() => {
              const defaultEn = ["Improves heart health", "Rich in antioxidants", "Boosts immunity", "Chemical free & pure"];
              const defaultGu = ["હૃday maaThe saro", "antioxidants bharpur", "roga pratikarak shakti", "chemical free & shuddha"];
              const lines = isGu
                ? (product.benefitsGu?.trim() ? parseLines(product.benefitsGu) : defaultGu)
                : (product.benefits?.trim()   ? parseLines(product.benefits)   : defaultEn);
              return (
                <div className="grid md:grid-cols-2 gap-3">
                  {lines.map((b, i) => (
                    <div key={i} className={`flex items-start gap-3 rounded-xl p-4 ${isGu ? "bg-purple-50" : "bg-green-50"}`}>
                      <FaLeaf className={`mt-0.5 shrink-0 ${isGu ? "text-brand-purple-500" : "text-green-500"}`} />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* USES TAB - language toggle se switch */}
            {activeTab === "uses" && (() => {
              const defaultEn = ["Cooking & frying", "Ayurvedic massage", "Hair care", "Skin nourishment"];
              const defaultGu = ["Raso maa vaparaay", "Ayurvedik maalish", "Vaal maa", "Tvacha ne poshan"];
              const lines = isGu
                ? (product.usesGu?.trim()  ? parseLines(product.usesGu)  : defaultGu)
                : (product.uses?.trim()    ? parseLines(product.uses)    : defaultEn);
              return (
                <div className="grid md:grid-cols-2 gap-3">
                  {lines.map((u, i) => (
                    <div key={i} className={`flex items-start gap-3 rounded-xl p-4 ${isGu ? "bg-purple-50" : "bg-orange-50"}`}>
                      <span className={`font-bold shrink-0 text-sm ${isGu ? "text-brand-purple-500" : "text-brand-orange-500"}`}>{i + 1}.</span>
                      <span className="text-gray-700 text-sm">{u}</span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>

        {/* ===== RELATED PRODUCTS ===== */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-brand-purple-800 mb-2">
              {isGu ? "સંબંધિત ઉત્પાદનો" : "Related Products"}
            </h2>
            <p className="text-brand-purple-400 mb-8 text-sm">{isGu ? "અન્ય ઉત્પાદનો" : "You might also like"}</p>
            <div className="grid md:grid-cols-4 gap-6">
              {related.map((item) => (
                <div key={item._id} onClick={() => navigate(`/product/${item._id}`)}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-400 overflow-hidden border border-gray-100 hover:-translate-y-2">
                  <div className="bg-gradient-to-b from-amber-50 to-amber-100 p-6 flex items-center justify-center h-48">
                    <img src={item.image || item.images?.[0] || item.sizes?.[0]?.images?.[0]} alt={item.name}
                      className="h-36 w-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 group-hover:text-brand-orange-500 transition text-sm line-clamp-1">
                      {(isGu && item.nameGu?.trim()) ? item.nameGu : item.name}
                    </h3>
                    <p className="text-brand-purple-700 font-bold text-lg mt-1">₹{item.sizes?.[0]?.price || 0}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
