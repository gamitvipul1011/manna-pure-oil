import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft, FaStar } from "react-icons/fa";
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
  
  // ✅ FIXED: language safe check
  const isGu = i18n.language?.startsWith("gu");

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addedAnim, setAddedAnim] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  // ✅ Product change effect
  useEffect(() => {
    const p = products.find((x) => x._id === id);

    if (!p) {
      toast.error("Product not found");
      navigate("/products");
      return;
    }

    setProduct(p);
    setSelectedSizeIdx(0);
    setSelectedImageIdx(0);
    setQuantity(1);
    setActiveTab("description");
    setImgLoading(false);
    setLoadedImages({});

    let relatedProducts = products.filter(
      (x) => x._id !== id && x.category._id === p.category._id
    );

    if (relatedProducts.length === 0) {
      relatedProducts = products.filter((x) => x._id !== id);
    }

    setRelated(relatedProducts.slice(0, 4));
    window.scrollTo(0, 0);
  }, [id, navigate]);

  // ✅ Product ની બધી images preload કરવી
  useEffect(() => {
    if (!product) return;

    const allImages = new Set();

    if (product.image) allImages.add(product.image);
    (product.images || []).forEach((img) => img && allImages.add(img));

    (product.sizes || []).forEach((size) => {
      if (size.image) allImages.add(size.image);
      (size.images || []).forEach((img) => img && allImages.add(img));
    });

    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [src]: true }));
      };
    });
  }, [product]);

  // ✅ Loading spinner
  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
    );

  const selectedSize = product.sizes?.[selectedSizeIdx] || null;

  // ✅ Current gallery images
  const currentImages =
    selectedSize?.images?.length
      ? selectedSize.images
      : product.images?.length
      ? product.images
      : [product.image];

  const displayImage = currentImages[selectedImageIdx] || product.image;

  // ✅ Smart image change
  const smartChangeImage = (nextImage) => {
    if (!nextImage) return;
    if (nextImage === displayImage) {
      setImgLoading(false);
      return;
    }
    if (loadedImages[nextImage]) {
      setImgLoading(false);
      return;
    }
    setImgLoading(true);
  };

  // ✅ Size change handler
  const handleSizeChange = (idx) => {
    const newSize = product.sizes?.[idx];
    const newImages =
      newSize?.images?.length
        ? newSize.images
        : product.images?.length
        ? product.images
        : [product.image];

    const nextImage = newImages[0] || product.image;
    smartChangeImage(nextImage);
    setSelectedSizeIdx(idx);
    setSelectedImageIdx(0);
  };

  // ✅ Thumbnail click handler
  const handleThumbnailClick = (idx) => {
    const nextImage = currentImages[idx] || product.image;
    smartChangeImage(nextImage);
    setSelectedImageIdx(idx);
  };

  // ✅ Add to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select size");
      return false;
    }

    addToCart(
      { ...product, price: selectedSize.price, size: selectedSize.size },
      quantity
    );

    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
    toast.success(isGu ? "કાર્ટ માં ઉમેરાયું!" : "Added to cart!");
    return true;
  };

  // ✅ newline, ||, અથવા | થી split
  const parseLines = (text) =>
    text
      ? text
          .split(/\n|\|\||\|/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

  // ✅ Numbered list render
  const renderNumberedList = (content, bgClass = "bg-white") => {
    const items = parseLines(content);

    if (items.length === 0) {
      return (
        <p className="text-gray-500 text-sm">
          {isGu ? "માહિતી ઉપલબ્ધ નથી" : "No information available"}
        </p>
      );
    }

    return (
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-4 rounded-[20px] ${bgClass} shadow-sm`}
          >
            <div
              className="min-w-[32px] h-[32px] rounded-full bg-purple-100
              text-purple-700 font-bold text-sm flex items-center
              justify-center shadow flex-shrink-0"
            >
              {i + 1}
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {item.replace(/^\d+[\.\)]\s*/, "")}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const tabs = [
    { key: "description", en: "Description", gu: "વર્ણન" },
    { key: "benefits", en: "Benefits", gu: "ફાયદા" },
    { key: "uses", en: "Uses", gu: "ઉપયોગ" },
  ];

  return (
    <div className="min-h-screen bg-[#9B7BC9] overflow-x-hidden">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-orange-100
          hover:text-orange-400 transition font-semibold group mb-6"
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
                className="absolute inset-0 bg-gradient-to-br from-orange-400/20
                via-pink-400/10 to-purple-400/20 blur-3xl"
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
                {imgLoading && (
                  <div
                    className="absolute inset-0 flex items-center justify-center
                    z-10 bg-purple-900/20"
                  >
                    <div
                      className="animate-spin rounded-full h-10 w-10
                      border-t-4 border-orange-400"
                    ></div>
                  </div>
                )}
                <img
                  src={displayImage}
                  alt={isGu && product.nameGu ? product.nameGu : product.name}
                  onLoad={() => {
                    setLoadedImages((prev) => ({
                      ...prev,
                      [displayImage]: true,
                    }));
                    setImgLoading(false);
                  }}
                  onError={() => setImgLoading(false)}
                  className={`transition-all duration-500 hover:scale-[1.02]
                    object-contain w-auto max-w-full
                    h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px]
                    ${imgLoading ? "opacity-30" : "opacity-100"}`}
                />
              </div>
            </div>

            {/* Thumbnails */}
            {currentImages.length > 1 && (
              <div
                className="flex gap-2 sm:gap-3 overflow-x-auto pb-2
                justify-center px-2"
              >
                {currentImages.map((img, idx) => (
                  <button
                    key={`thumb-${idx}`}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                      flex-shrink-0 overflow-hidden border-2 transition-all
                      duration-300 ${
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
              <span
                className="text-xs font-semibold text-purple-300
                uppercase tracking-widest"
              >
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

            {/* ✅ FIXED: Price Card */}
            {/* Price */}
<div className="w-full max-w-md"> {/* આખા કન્ટેનરની સાઇઝ કંટ્રોલ કરવા */}
  
  {/* Price Container (લાંબુ કરવા માટે w-full ઉમેર્યું છે) */}
  <div className="bg-[#D0F0C0] rounded-3xl px-6 py-5 shadow-xl w-full"> 
    <p className="text-4xl md:text-5xl font-extrabold text-purple-700 leading-none"> 
      ₹{selectedSize?.price || product.sizes?.[0]?.price || 0} 
    </p>

    {/* Size Badge (સારો લાગે તેવો નવો ડાર્ક કલર) */}
    {(selectedSize?.size || product.sizes?.[0]?.size) && (
      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-700 shadow-md border border-purple-800">
        <span className="text-xs font-medium text-purple-200 tracking-wide">
          {isGu ? "સાઇઝ" : "Size"}
        </span>
        <span className="text-sm font-bold text-white">
          {selectedSize?.size || product.sizes?.[0]?.size}
        </span>
      </div>
    )}
  </div> 

  {/* Delivery Message Container (Light Green બેકગ્રાઉન્ડ) */}
  <div className="mt-3 p-3 bg-green-100 rounded-2xl border border-dashed border-green-500 shadow-sm w-full"> 
    <p className="text-sm md:text-[15px] font-bold text-green-800"> 
      🚚 {isGu ? "₹999 કે તેથી વધુની ખરીદી પર ફ્રી ડિલિવરી મળશે" : "Free delivery on orders above ₹999"} 
    </p> 
  </div> 

</div>

            {/* Size Buttons */}
            {product.sizes?.length > 0 && (
              <div>
                <p className="font-semibold text-purple-100 mb-3">
                  {isGu ? "સાઈઝ પસંદ કરો" : "Select Size"}
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((sv, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSizeChange(idx)}
                      className={`px-5 py-2 rounded-xl border transition-all ${
                        selectedSizeIdx === idx
                          ? "bg-emerald-500 text-white border-emerald-500 scale-105"
                          : "bg-[#D0F0C0] border-transparent hover:border-emerald-400"
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
                  className="px-4 py-2 font-bold text-purple-700
                  hover:text-purple-900 transition"
                >
                  -
                </button>
                <span className="px-4 font-semibold text-purple-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 font-bold text-purple-700
                  hover:text-purple-900 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3
                rounded-xl bg-purple-600 hover:bg-purple-700 text-white
                font-semibold transition-all"
              >
                <FaShoppingCart />
                {addedAnim
                  ? isGu ? "ઉમેરાયું!" : "Added!"
                  : isGu ? "કાર્ટ માં ઉમેરો" : "Add To Cart"}
              </button>

              <button
                onClick={() => {
                  const added = handleAddToCart();
                  if (added) navigate("/cart");
                }}
                className="flex-1 py-3 rounded-xl bg-orange-500
                hover:bg-orange-600 text-white font-semibold transition-all"
              >
                {isGu ? "હમણાં ખરીદો" : "Buy Now"}
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href={getWhatsAppOrderUrl(product, selectedSize, quantity)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3
              rounded-xl text-white bg-green-500 hover:bg-green-600
              font-semibold transition-all"
            >
              <FaWhatsapp />
              {isGu ? "WhatsApp પર ઓર્ડર કરો" : "Order on WhatsApp"}
            </a>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3 bg-[#D0F0C0]">
              {[
                { icon: "🌿", en: "100% Natural", gu: "100% Natural" },
                { icon: "🏭", en: "Cold Pressed", gu: "Cold Pressed" },
                { icon: "✅", en: "FSSAI Certified", gu: "સર્ટિફાઇડ" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-green-50
                  rounded-xl p-3 text-center"
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

        {/* ── TABS ── */}
        <div className="mt-16">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 font-bold whitespace-nowrap transition-all
                  duration-300 border-2 rounded-full ${
                  activeTab === tab.key
                    ? "bg-white text-green-700 border-white shadow-lg scale-105"
                    : "text-white border-white/20 bg-white/10 hover:bg-white/20"
                }`}
              >
                {isGu ? tab.gu : tab.en}
              </button>
            ))}
          </div>

          <div className="bg-[#D0F0C0] rounded-[35px] shadow-xl p-5 md:p-8 mt-4">
            {activeTab === "description" && (
              <div className="flex gap-4">
                <GiOilDrum className="text-purple-700 text-xl flex-shrink-0 mt-1" />
                <div className="w-full">
                  {(isGu && product.descriptionGu
                    ? product.descriptionGu
                    : product.description || ""
                  )
                    .split("\n")
                    .map((line, i) => (
                      <p
                        key={i}
                        className={`text-gray-700 text-sm md:text-base ${
                          line.includes("✨") || line.includes("🌿")
                            ? "mt-6 font-bold text-lg"
                            : "mt-2"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌿</span>
                  <h3 className="text-lg font-bold text-purple-800">
                    {isGu ? "આ તેલના ફાયદા" : "Benefits of this Oil"}
                  </h3>
                </div>
                {renderNumberedList(
                  isGu ? product.benefitsGu : product.benefits,
                  "bg-white"
                )}
              </div>
            )}

            {activeTab === "uses" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">💡</span>
                  <h3 className="text-lg font-bold text-purple-800">
                    {isGu ? "ઉપયોગ કરવાની રીત" : "How to Use"}
                  </h3>
                </div>
                {renderNumberedList(
                  isGu ? product.usesGu : product.uses,
                  "bg-white"
                )}
              </div>
            )}
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
    </div>
  );
};

export default ProductDetail;
