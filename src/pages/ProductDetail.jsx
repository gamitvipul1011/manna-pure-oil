import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft, FaStar, FaLeaf, FaCheckCircle } from "react-icons/fa";
import { GiOilDrum } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { products, getWhatsAppOrderUrl } from "../data/products";
import ProductCard from "../components/ProductCard";

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
    if (!p) { toast.error("Product not found"); navigate("/products"); return; }
    setProduct(p);
    setSelectedSizeIdx(0);
    setSelectedImageIdx(0);
    setRelated(products.filter(x => x._id !== id && x.category._id === p.category._id).slice(0, 4));
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
    </div>
  );

  const selectedSize = product.sizes?.[selectedSizeIdx] || null;
  const currentImages = selectedSize?.images?.length ? selectedSize.images
    : product.images?.length ? product.images : [product.image];
  const displayImage = currentImages[selectedImageIdx] || product.image;

  const handleAddToCart = () => {
    if (!selectedSize) { toast.error("Please select size"); return; }
    addToCart({ ...product, price: selectedSize.price, size: selectedSize.size }, quantity);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
    toast.success(isGu ? "કાર્ટ માં ઉમેરાયું!" : "Added to cart!");
  };

  const parseLines = (text) => text ? text.split(/\n|\|/).map(s => s.trim()).filter(Boolean) : [];

  const tabs = [
    { key: "description", en: "Description", gu: "વર્ણન" },
    { key: "benefits",    en: "Benefits",    gu: "ફાયદા" },
    { key: "uses",        en: "Uses",        gu: "ઉપયોગ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-purple-700 hover:text-orange-500 transition font-semibold group mb-6">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          {isGu ? "ઉત્પાદનો પર જાઓ" : "Back to Products"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* IMAGE SECTION */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-6 flex items-center justify-center min-h-[400px] shadow-lg">
              <img src={displayImage} alt={product.name}
                className="max-h-[380px] w-full object-contain drop-shadow-2xl transition-all duration-500" />
            </div>
            {currentImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {currentImages.map((img, idx) => (
                  <button key={idx} onClick={() => setSelectedImageIdx(idx)}
                    className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition ${selectedImageIdx === idx ? 'border-orange-500 shadow-lg' : 'border-gray-200 hover:border-orange-300'}`}>
                    <img src={img} alt="" className="w-full h-full object-contain bg-amber-50" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFO SECTION */}
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-purple-500 uppercase tracking-wider">
                {isGu ? product.category.nameGu || product.category.name : product.category.name}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-1">
                {isGu && product.nameGu ? product.nameGu : product.name}
              </h1>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                <span className="text-sm text-gray-500 ml-1">(4.8)</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-2xl p-5 text-white shadow-xl">
              <p className="text-5xl font-black">₹{selectedSize?.price || product.sizes?.[0]?.price || 0}</p>
              <p className="text-green-300 text-sm mt-1">{selectedSize?.size}</p>
            </div>

            {/* Size Selection */}
            {product.sizes?.length > 0 && (
              <div>
                <p className="font-semibold text-gray-700 mb-3">{isGu ? "સાઈઝ પસંદ કરો" : "Select Size"}</p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((sv, idx) => (
                    <button key={idx} onClick={() => { setSelectedSizeIdx(idx); setSelectedImageIdx(0); }}
                      className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border-2 ${selectedSizeIdx === idx
                        ? "bg-green-600 border-green-600 text-white shadow-lg scale-105"
                        : "border-gray-300 text-gray-700 hover:border-green-500"}`}>
                      {sv.size}
                      <span className={`block text-xs mt-0.5 ${selectedSizeIdx === idx ? "text-green-100" : "text-gray-400"}`}>₹{sv.price}</span>
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
                  className="px-5 py-3 bg-gray-50 hover:bg-gray-100 font-bold text-lg">−</button>
                <span className="px-6 py-3 font-bold text-lg min-w-[60px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 bg-gray-50 hover:bg-gray-100 font-bold text-lg">+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white shadow-xl transition-all duration-300 ${addedAnim ? "bg-green-500 scale-95" : "bg-gradient-to-r from-purple-700 to-purple-600 hover:scale-[1.02]"}`}>
                <FaShoppingCart className={addedAnim ? "animate-bounce" : ""} />
                {addedAnim ? (isGu ? "ઉમેરાયું!" : "Added!") : (isGu ? "કાર્ટ માં ઉમેરો" : "Add To Cart")}
              </button>
              <button onClick={() => { handleAddToCart(); navigate("/cart"); }}
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-[1.02] shadow-xl transition-all">
                {isGu ? "હમણાં ખરીદો" : "Buy Now"}
              </button>
            </div>

            {/* WhatsApp Order Button */}
            <a href={getWhatsAppOrderUrl(product, selectedSize, quantity)} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-green-600 hover:scale-[1.02] shadow-xl transition-all">
              <FaWhatsapp className="text-2xl" />
              {isGu ? "WhatsApp ઉppar Order karo" : "Order on WhatsApp"}
            </a>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🌿", en: "100% Natural", gu: "100% Natural" },
                { icon: "🏭", en: "Cold Pressed",  gu: "Cold Pressed" },
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

        {/* TABS */}
        <div className="mt-16">
          <div className="flex gap-2 border-b-2 border-gray-100">
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-4 font-bold text-base rounded-t-2xl transition-all ${activeTab === tab.key ? "bg-white text-purple-700 shadow-md border-2 border-b-0 border-gray-100" : "text-gray-400 hover:text-purple-600"}`}>
                {isGu ? tab.gu : tab.en}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-b-3xl rounded-tr-3xl shadow-lg p-8 border border-purple-100 min-h-48">
            {activeTab === "description" && (
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <GiOilDrum className="text-purple-600 text-xl" />
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {isGu && product.descriptionGu ? product.descriptionGu : product.description}
                </p>
              </div>
            )}
            {activeTab === "benefits" && (
              <div className="grid md:grid-cols-2 gap-3">
                {parseLines(isGu ? product.benefitsGu : product.benefits).map((b, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-4 bg-green-50">
                    <FaLeaf className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "uses" && (
              <div className="grid md:grid-cols-2 gap-3">
                {parseLines(isGu ? product.usesGu : product.uses).map((u, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-4 bg-orange-50">
                    <span className="font-bold text-orange-500 shrink-0">{i + 1}.</span>
                    <span className="text-gray-700 text-sm">{u}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-purple-800 mb-8">{isGu ? "સંબંધિત ઉત્પાદનો" : "Related Products"}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {related.map(item => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
