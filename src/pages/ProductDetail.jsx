import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft, FaStar, FaLeaf, FaTruck } from "react-icons/fa";
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
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const p = products.find((x) => x._id === id);
    if (!p) {
      toast.error("Product not found");
      navigate("/products");
      return;
    }
    setProduct(p);
    setImgLoaded(false);
    setSelectedSizeIdx(0);
    setSelectedImageIdx(0);
    setQuantity(1);

    let relatedProducts = products.filter(
      (x) => x._id !== id && x.category._id === p.category._id
    );
    if (relatedProducts.length === 0) {
      relatedProducts = products.filter((x) => x._id !== id);
    }
    setRelated(relatedProducts.slice(0, 4));
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setImgLoaded(false);
  }, [selectedImageIdx, selectedSizeIdx]);

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
    text ? text.split(/\n|\|/).map((s) => s.trim()).filter(Boolean) : [];

  const tabs = [
    { key: "description", en: "Description", gu: "વર્ણન", icon: "📝" },
    { key: "benefits", en: "Benefits", gu: "ફાયદા", icon: "💚" },
    { key: "uses", en: "Uses", gu: "ઉપયોગ", icon: "🧴" },
  ];

  return (
    <div className="min-h-screen bg-gradient-purple overflow-x-hidden">
      {/* Back Button */}
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

          {/* ── IMAGE SECTION ── */}
          <div className="space-y-4">
            <div className="relative flex justify-center items-center w-full">
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-400/10 to-purple-400/20 blur-3xl"
                style={{ borderRadius: "35px" }}
              />
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{ borderRadius: "28px", width: "fit-content", maxWidth: "100%" }}
              >
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-purple-900/20 rounded-3xl">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-orange-400"></div>
                  </div>
                )}
                <img
                  src={displayImage}
                  alt={isGu && product.nameGu ? product.nameGu : product.name}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgLoaded(true)}
                  className={`transition-all duration-500 hover:scale-[1.02]
                    object-contain w-auto max-w-full
                    h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px]
                    ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            </div>

            {currentImages.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 justify-center px-2">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedImageIdx(idx);
                      setImgLoaded(false);
                    }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 
                      overflow-hidden border-2 transition-all duration-300 ${
                        selectedImageIdx === idx
                          ? "border-orange-500 shadow-lg shadow-orange-400/50 scale-105"
                          : "border-purple-300/30 hover:border-orange-300"
                      }`}
                    style={{ borderRadius: "16px" }}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── PRODUCT INFO ── */}
          <div className="space-y-6">

            {/* Name & Rating */}
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

            {/* Price */}
            <div className="bg-[#D0F0C0] rounded-3xl p-6 shadow-xl">
              <p className="text-5xl font-extrabold text-purple-700">
                ₹{selectedSize?.price || product.sizes?.[0]?.price || 0}
              </p>
              <p className="text-sm text-gray-500 mt-1">{selectedSize?.size}</p>
            </div>

            {/* ✅ FREE DELIVERY BANNER */}
            <div className="relative overflow-hidden bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
              <div className="relative flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-3">
                  <FaTruck className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-white font-bold text-base md:text-lg">
                    {isGu
                      ? "🎉 ₹999 થી ઉપરના ઓર્ડર પર ફ્રી ડિલિવરી!"
                      : "🎉 FREE Delivery on orders above ₹999!"}
                  </p>
                  <p className="text-green-100 text-xs md:text-sm mt-0.5">
                    {isGu
                      ? "કોઈ વધારાનો ચાર્જ નહીં • ઘરે બેઠા મંગાવો"
                      : "No extra charges • Delivered to your doorstep"}
                  </p>
                </div>
              </div>
            </div>

            {/* Size */}
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
                      className={`px-5 py-2 rounded-xl border transition-all duration-300 ${
                        selectedSizeIdx === idx
                          ? "bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-400/30 scale-105"
                          : "bg-[#D0F0C0] border-green-200 hover:border-emerald-400"
                      }`}
                    >
                      {sv.size}
                      <span className="block text-xs">₹{sv.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <p className="font-semibold text-purple-100">
                {isGu ? "જથ્થો" : "Quantity"}
              </p>
              <div className="flex items-center border rounded-xl bg-[#D0F0C0]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 font-bold text-lg"
                >
                  -
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all"
              >
                <FaShoppingCart />
                {addedAnim
                  ? isGu ? "ઉમેરાયું!" : "Added!"
                  : isGu ? "કાર્ટ માં ઉમેરો" : "Add To Cart"}
              </button>
              <button
                onClick={() => { handleAddToCart(); navigate("/cart"); }}
                className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all"
              >
                {isGu ? "હમણાં ખરીદો" : "Buy Now"}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href={getWhatsAppOrderUrl(product, selectedSize, quantity)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-white bg-green-500 hover:bg-green-600 font-semibold transition-all"
            >
              <FaWhatsapp className="text-xl" />
              {isGu ? "WhatsApp પર ઓર્ડર કરો" : "Order on WhatsApp"}
            </a>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🌿", en: "100% Natural", gu: "100% કુદરતી" },
                { icon: "🏭", en: "Cold Pressed", gu: "કોલ્ડ પ્રેસ્ડ" },
                { icon: "✅", en: "FSSAI Certified", gu: "FSSAI સર્ટિફાઇડ" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-green-50 rounded-xl p-3 text-center"
                >
                  <span className="text-2xl mb-1">{b.icon}</span>
                  <span className="text-xs font-semibold text-green-700">
                    {isGu ? b.gu : b.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            ✅ TABS - ROUND SHAPE DESIGN
        ══════════════════════════════════════════════ */}
        <div className="mt-16">

          {/* Tab Buttons - Round Pill Shape */}
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 justify-center px-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 
                  rounded-full font-bold text-sm md:text-base
                  transition-all duration-400 whitespace-nowrap
                  ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl shadow-emerald-500/30 scale-105"
                      : "bg-white/10 text-purple-200 hover:bg-white/20 hover:text-white border border-purple-400/30"
                  }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {isGu ? tab.gu : tab.en}
              </button>
            ))}
          </div>

          {/* Tab Content - Round Shape with Side Spacing */}
          <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
            <div className="bg-gradient-to-br from-[#D0F0C0] via-[#e0f5d5] to-[#c5edb3] 
              rounded-[28px] md:rounded-[36px] shadow-2xl shadow-green-900/20 
              p-5 sm:p-6 md:p-10 lg:p-12
              border border-green-200/50">

              {/* DESCRIPTION */}
              {activeTab === "description" && (
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <GiOilDrum className="text-purple-700 text-lg md:text-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {(isGu && product.descriptionGu
                      ? product.descriptionGu
                      : product.description || ""
                    )
                      .split("\n")
                      .map((line, i) => (
                        <p
                          key={i}
                          className={`text-gray-700 leading-relaxed ${
                            line.includes("✨") || line.includes("🌿")
                              ? "mt-6 font-bold text-lg md:text-xl text-green-800"
                              : "text-sm md:text-base mt-2"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                  </div>
                </div>
              )}

              {/* BENEFITS */}
              {activeTab === "benefits" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {parseLines(isGu ? product.benefitsGu : product.benefits).map(
                    (b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 md:p-5 
                          bg-gradient-to-br from-emerald-50 to-green-50 
                          rounded-2xl md:rounded-3xl 
                          border border-emerald-100
                          hover:shadow-lg hover:shadow-emerald-200/50 
                          hover:scale-[1.02] transition-all duration-300"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                            <FaLeaf className="text-emerald-500 text-sm" />
                          </div>
                        </div>
                        <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {b}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}

              {/* USES */}
              {activeTab === "uses" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {parseLines(isGu ? product.usesGu : product.uses).map((u, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 md:p-5 
                        bg-gradient-to-br from-amber-50 to-orange-50 
                        rounded-2xl md:rounded-3xl 
                        border border-amber-100
                        hover:shadow-lg hover:shadow-amber-200/50 
                        hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <span className="font-bold text-amber-600 text-sm">{i + 1}</span>
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {u}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── RELATED PRODUCTS ── */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {isGu ? "સંબંધિત ઉત્પાદનો" : "Related Products"}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((item) => (
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
