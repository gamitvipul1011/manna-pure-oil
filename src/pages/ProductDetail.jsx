import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft, FaStar, FaLeaf } from "react-icons/fa";
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
    text
      ? text
          .split(/\n|\|/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

  const tabs = [
    {
      key: "description",
      en: "Description",
      gu: "વર્ણન",
      icon: "📝",
      gradient: "from-purple-500 to-indigo-600",
      lightBg: "bg-purple-50",
      activeBg: "bg-gradient-to-r from-purple-500 to-indigo-600",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconText: "text-purple-600",
    },
    {
      key: "benefits",
      en: "Benefits",
      gu: "ફાયદા",
      icon: "🌿",
      gradient: "from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50",
      activeBg: "bg-gradient-to-r from-emerald-500 to-teal-600",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
    },
    {
      key: "uses",
      en: "Uses",
      gu: "ઉપયોગ",
      icon: "✨",
      gradient: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50",
      activeBg: "bg-gradient-to-r from-amber-500 to-orange-600",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
    },
  ];

  const activeTabData = tabs.find((t) => t.key === activeTab);

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
            {/* Main Image */}
            <div className="relative flex justify-center items-center w-full">
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-400/10 to-purple-400/20 blur-3xl"
                style={{ borderRadius: "35px" }}
              />

              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  borderRadius: "28px",
                  width: "fit-content",
                  maxWidth: "100%",
                }}
              >
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-purple-900/20">
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

            {/* Thumbnails */}
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
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-contain"
                    />
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
              <p className="text-sm text-gray-500 mt-1">
                {selectedSize?.size}
              </p>
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
                      className={`px-5 py-2 rounded-xl border ${
                        selectedSizeIdx === idx
                          ? "bg-emerald-500 text-white"
                          : "bg-[#D0F0C0]"
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
                  className="px-4 py-2 font-bold"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white font-semibold"
              >
                <FaShoppingCart />
                {addedAnim
                  ? isGu
                    ? "ઉમેરાયું!"
                    : "Added!"
                  : isGu
                  ? "કાર્ટ માં ઉમેરો"
                  : "Add To Cart"}
              </button>

              <button
                onClick={() => {
                  handleAddToCart();
                  navigate("/cart");
                }}
                className="flex-1 py-3 rounded-xl bg-orange-500 text-white font-semibold"
              >
                {isGu ? "હમણાં ખરીદો" : "Buy Now"}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href={getWhatsAppOrderUrl(product, selectedSize, quantity)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-white bg-green-500 font-semibold"
            >
              <FaWhatsapp />
              {isGu ? "WhatsApp પર ઓર્ડર કરો" : "Order on WhatsApp"}
            </a>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🌿", en: "100% Natural", gu: "100% Natural" },
                { icon: "🏭", en: "Cold Pressed", gu: "Cold Pressed" },
                { icon: "✅", en: "FSSAI Certified", gu: "સર્ટિફાઇડ" },
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

        {/* ══════════════════════════════════════════════════════════════
            ── BEAUTIFUL TABS SECTION WITH ROUNDED CORNERS ──
            ══════════════════════════════════════════════════════════════ */}
        <div className="mt-16">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              {isGu ? "ઉત્પાદન વિગત" : "Product Details"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
          </div>

          {/* Tab Buttons - Pill Style */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex gap-2 sm:gap-3 p-2 bg-white/10 backdrop-blur-md rounded-[20px] border border-white/20 shadow-2xl overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-3 rounded-[14px] font-bold text-sm sm:text-base whitespace-nowrap transition-all duration-400 ${
                    activeTab === tab.key
                      ? `${tab.activeBg} text-white shadow-lg scale-[1.02]`
                      : "text-purple-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {isGu ? tab.gu : tab.en}

                  {/* Active dot indicator */}
                  {activeTab === tab.key && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Container */}
          <div className="relative">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div
              className="relative overflow-hidden shadow-2xl border border-white/20"
              style={{
                borderRadius: "32px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,253,244,0.95) 50%, rgba(255,255,255,0.95) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Top accent bar */}
              <div
                className={`h-2 bg-gradient-to-r ${activeTabData?.gradient} transition-all duration-500`}
                style={{ borderRadius: "32px 32px 0 0" }}
              />

              {/* Inner content with padding */}
              <div className="p-6 md:p-10">
                {/* ── DESCRIPTION TAB ── */}
                {activeTab === "description" && (
                  <div className="space-y-6 animate-fadeIn">
                    {/* Title Card */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg shadow-purple-500/30">
                        <GiOilDrum className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-gray-800">
                          {isGu ? "વર્ણન" : "Description"}
                        </h3>
                        <p className="text-sm text-purple-500 font-medium">
                          {isGu
                            ? "ઉત્પાદન વિશે જાણો"
                            : "Learn about this product"}
                        </p>
                      </div>
                    </div>

                    {/* Description Cards */}
                    <div className="space-y-4">
                      {(isGu && product.descriptionGu
                        ? product.descriptionGu
                        : product.description || ""
                      )
                        .split("\n")
                        .filter((line) => line.trim())
                        .map((line, i) => {
                          const isHeading =
                            line.includes("✨") || line.includes("🌿");
                          return isHeading ? (
                            <div
                              key={i}
                              className="mt-6 flex items-center gap-3"
                            >
                              <div className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full" />
                              <h4 className="text-xl font-extrabold text-gray-800">
                                {line}
                              </h4>
                            </div>
                          ) : (
                            <div
                              key={i}
                              className="group flex gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50/80 to-indigo-50/50 
                                border border-purple-100/60 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50
                                transition-all duration-300 hover:-translate-y-0.5"
                            >
                              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                                <span className="text-purple-600 font-bold text-sm">
                                  {i + 1}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {line}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}

                {/* ── BENEFITS TAB ── */}
                {activeTab === "benefits" && (
                  <div className="space-y-6 animate-fadeIn">
                    {/* Title Card */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/30">
                        <FaLeaf className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-gray-800">
                          {isGu ? "ફાયદા" : "Benefits"}
                        </h3>
                        <p className="text-sm text-emerald-500 font-medium">
                          {isGu
                            ? "આ ઉત્પાદનના ફાયદા"
                            : "Advantages of this product"}
                        </p>
                      </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {parseLines(
                        isGu ? product.benefitsGu : product.benefits
                      ).map((b, i) => (
                        <div
                          key={i}
                          className="group relative flex gap-4 p-5 rounded-2xl 
                            bg-gradient-to-br from-emerald-50/90 to-teal-50/60
                            border border-emerald-100/80 
                            hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/60
                            transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                          {/* Decorative circle */}
                          <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-200/20 rounded-full group-hover:scale-150 transition-transform duration-500" />

                          <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl shadow-md shadow-emerald-300/40 group-hover:scale-110 transition-transform">
                            <FaLeaf className="text-white text-sm" />
                          </div>
                          <div className="relative">
                            <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                              {b}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── USES TAB ── */}
                {activeTab === "uses" && (
                  <div className="space-y-6 animate-fadeIn">
                    {/* Title Card */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg shadow-amber-500/30">
                        <span className="text-2xl">✨</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-gray-800">
                          {isGu ? "ઉપયોગ" : "Uses"}
                        </h3>
                        <p className="text-sm text-amber-500 font-medium">
                          {isGu
                            ? "ઉપયોગ કરવાની રીતો"
                            : "Ways to use this product"}
                        </p>
                      </div>
                    </div>

                    {/* Uses Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {parseLines(isGu ? product.usesGu : product.uses).map(
                        (u, i) => (
                          <div
                            key={i}
                            className="group relative flex gap-4 p-5 rounded-2xl
                              bg-gradient-to-br from-amber-50/90 to-orange-50/60
                              border border-amber-100/80
                              hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/60
                              transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                          >
                            {/* Decorative circle */}
                            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-amber-200/20 rounded-full group-hover:scale-150 transition-transform duration-500" />

                            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-md shadow-amber-300/40 group-hover:scale-110 group-hover:rotate-6 transition-all">
                              <span className="text-white font-extrabold text-sm">
                                {i + 1}
                              </span>
                            </div>
                            <div className="relative">
                              <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                {u}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom decorative wave */}
              <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 opacity-30" />
            </div>
          </div>
        </div>

        {/* ── RELATED PRODUCTS ── */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">
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

      {/* Custom animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
