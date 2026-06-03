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
    let relatedProducts = products.filter(
      (x) => x._id !== id && x.category._id === p.category._id
    );
    if (relatedProducts.length === 0) {
      relatedProducts = products.filter((x) => x._id !== id);
    }
    setRelated(relatedProducts.slice(0, 4));
    setSelectedSizeIdx(0);
    setSelectedImageIdx(0);
    setQuantity(1);
    setImgLoaded(false);
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-purple">
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
    { key: "description", en: "Description", gu: "વર્ણન" },
    { key: "benefits", en: "Benefits", gu: "ફાયદા" },
    { key: "uses", en: "Uses", gu: "ઉપયોગ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-purple overflow-x-hidden">
      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-orange-100 hover:text-orange-400 transition font-semibold group mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          {isGu ? "ઉત્પાદનો પર જાઓ" : "Back to Products"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">


{/* ========== IMAGE SECTION ========== */}
<div className="space-y-4">

  {/* MAIN IMAGE */}
  <div className="relative mx-auto flex items-center justify-center max-w-[500px]">

    {/* Glow */}
  <div
  className="relative overflow-hidden flex items-center justify-center
  bg-transparent mx-auto"
  style={{
    borderRadius: "28px",
    width: "fit-content",
    maxWidth: "100%",
  }}
> </div>

    {/* Image Container */}
    <div
      className="relative overflow-hidden w-full flex items-center justify-center
      bg-white/5 backdrop-blur-sm border border-white/10 p-2"
      style={{ borderRadius: "28px" }}
    >
      {!imgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-orange-400"></div>
        </div>
      )}

      <img
        src={displayImage}
        alt={product.name}
        onLoad={() => setImgLoaded(true)}
        className={`transition-all duration-500 hover:scale-[1.02]
        object-contain w-full
        h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px]
        ${imgLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  </div>

  {/* THUMBNAILS */}
  {currentImages.length > 1 && (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 justify-center px-2">
      {currentImages.map((img, idx) => (
        <button
          key={idx}
          onClick={() => {
            setSelectedImageIdx(idx);
            setImgLoaded(false);
          }}
          className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden border-2 transition-all duration-200 bg-white/10 backdrop-blur-sm ${
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
          {/* ========== PRODUCT INFO ========== */}
          <div className="space-y-5 sm:space-y-6">
            {/* CATEGORY & NAME */}
            <div>
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">
                {isGu
                  ? product.category.nameGu || product.category.name
                  : product.category.name}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1 leading-tight">
                {isGu && product.nameGu ? product.nameGu : product.name}
              </h1>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="text-sm text-purple-200 ml-1">(4.8)</span>
              </div>
            </div>

            {/* PRICE CARD */}
            <div className="bg-[#D0F0C0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700">
                ₹{selectedSize?.price || product.sizes?.[0]?.price || 0}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {selectedSize?.size}
              </p>
            </div>

            {/* SIZE SELECTION */}
            {product.sizes?.length > 0 && (
              <div>
                <p className="font-semibold text-purple-100 mb-2 sm:mb-3 text-sm sm:text-base">
                  {isGu ? "સાઈઝ પસંદ કરો" : "Select Size"}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {product.sizes.map((sv, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedSizeIdx(idx);
                        setSelectedImageIdx(0);
                        setImgLoaded(false);
                      }}
                      className={`px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl border transition-all duration-200 text-sm sm:text-base ${
                        selectedSizeIdx === idx
                          ? "bg-emerald-500 text-white border-emerald-500 shadow-md"
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

            {/* QUANTITY */}
            <div className="flex items-center gap-3 sm:gap-4">
              <p className="font-semibold text-purple-100 text-sm sm:text-base">
                {isGu ? "જથ્થો" : "Quantity"}
              </p>
              <div className="flex items-center border rounded-lg sm:rounded-xl bg-[#D0F0C0] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 sm:px-4 py-2 text-lg font-bold hover:bg-green-200 transition"
                >
                  −
                </button>
                <span className="px-3 sm:px-4 font-semibold min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 sm:px-4 py-2 text-lg font-bold hover:bg-green-200 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold transition-all duration-300 text-sm sm:text-base ${
                  addedAnim
                    ? "bg-green-500 scale-105"
                    : "bg-purple-600 hover:bg-purple-700 active:scale-95"
                }`}
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
                className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all active:scale-95 text-sm sm:text-base"
              >
                {isGu ? "હમણાં ખરીદો" : "Buy Now"}
              </button>
            </div>

            {/* WHATSAPP */}
            <a
              href={getWhatsAppOrderUrl(product, selectedSize, quantity)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-white bg-green-500 hover:bg-green-600 font-semibold transition-all active:scale-95 text-sm sm:text-base"
            >
              <FaWhatsapp className="text-lg sm:text-xl" />
              {isGu ? "WhatsApp પર ઓર્ડર કરો" : "Order on WhatsApp"}
            </a>

            {/* BADGES */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: "🌿", en: "100% Natural", gu: "100% Natural" },
                { icon: "🏭", en: "Cold Pressed", gu: "Cold Pressed" },
                { icon: "✅", en: "FSSAI Certified", gu: "સર્ટિફાઇડ" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-green-50 rounded-xl p-2 sm:p-3 text-center"
                >
                  <span className="text-xl sm:text-2xl mb-1">{b.icon}</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-green-700">
                    {isGu ? b.gu : b.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== TABS SECTION ========== */}
        <div className="mt-10 sm:mt-16">
          <div className="flex gap-1 sm:gap-2 border-b border-purple-400/30 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-sm sm:text-base rounded-t-xl transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-[#D0F0C0] text-green-700 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {isGu ? tab.gu : tab.en}
              </button>
            ))}
          </div>

          <div className="bg-[#D0F0C0] rounded-b-2xl sm:rounded-b-3xl shadow-xl p-4 sm:p-6 md:p-8">
            {/* DESCRIPTION TAB */}
            {activeTab === "description" && (
              <div className="flex gap-3 sm:gap-4">
                <GiOilDrum className="text-purple-700 text-lg sm:text-xl flex-shrink-0 mt-1" />
                <div>
                  {(isGu && product.descriptionGu
                    ? product.descriptionGu
                    : product.description
                  )
                    .split("\n")
                    .map((line, i) => (
                      <p
                        key={i}
                        className={`text-gray-700 text-sm md:text-base ${
                          line.includes("✨") || line.includes("🌿")
                            ? "mt-4 sm:mt-6 font-bold text-base sm:text-lg"
                            : "mt-1.5 sm:mt-2"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            )}

            {/* BENEFITS TAB */}
            {activeTab === "benefits" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {parseLines(
                  isGu ? product.benefitsGu : product.benefits
                ).map((b, i) => (
                  <div
                    key={i}
                    className="flex gap-2 p-3 sm:p-4 bg-emerald-50 rounded-xl"
                  >
                    <FaLeaf className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{b}</span>
                  </div>
                ))}
              </div>
            )}

            {/* USES TAB */}
            {activeTab === "uses" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {parseLines(isGu ? product.usesGu : product.uses).map(
                  (u, i) => (
                    <div
                      key={i}
                      className="flex gap-2 p-3 sm:p-4 bg-amber-50 rounded-xl"
                    >
                      <span className="font-bold text-amber-600 flex-shrink-0">
                        {i + 1}.
                      </span>
                      <span className="text-sm">{u}</span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* ========== RELATED PRODUCTS ========== */}
        {related.length > 0 && (
          <div className="mt-10 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              {isGu ? "સંબંધિત ઉત્પાદનો" : "Related Products"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
