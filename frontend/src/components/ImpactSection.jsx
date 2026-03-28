import React from "react";

/* ✅ CORRECT IMAGE IMPORTS
import groundnut from "../assets/oils/groundnut.jpg";
import mustard from "../assets/oils/mustard.jpg";
import sesame from "../assets/oils/sesame.jpg";
import coconut from "../assets/oils/coconut.jpg";
import ghee from "../assets/oils/ghee.jpg";   */

const ImpactSection = () => {
  return (
    <section className="bg-gradient-to-b from-brand-purple-700 to-brand-purple-900 py-24">

      {/* HEADING */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Creating Healthier Families and Happy Farmers
        </h2>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 mb-24">
        <StatCard number="500+" label="Farmers Empowered" />
        <StatCard number="25+" label="Wide Varieties" />
        <StatCard number="5000+" label="Happy Customers" />
      </div>

      {/* OILS SECTION */}
      <div className="bg-white rounded-t-[50px] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-3xl md:text-4xl font-bold text-center text-brand-purple-800 mb-16">
            Our Premium Cold Pressed Oils
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            <OilCard
              image={groundnut}
              title="Groundnut Oil"
              desc="Rich in Vitamin E, heart friendly and traditionally cold pressed."
            />

            <OilCard
              image={mustard}
              title="Mustard Oil"
              desc="Boosts digestion, immunity and perfect for Indian cooking."
            />

            <OilCard
              image={sesame}
              title="Sesame Oil"
              desc="High antioxidants, supports bone health and metabolism."
            />

            <OilCard
              image={coconut}
              title="Coconut Oil"
              desc="Pure aroma, ideal for cooking, hair and skin care."
            />

            <OilCard
              image={ghee}
              title="Cow Ghee"
              desc="Gir cow ghee made using traditional bilona method."
            />

          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- SUB COMPONENTS ---------------- */

const StatCard = ({ number, label }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center shadow-xl">
    <h3 className="text-5xl font-extrabold text-brand-orange-400">
      {number}
    </h3>
    <p className="mt-4 text-lg text-white font-semibold">
      {label}
    </p>
  </div>
);

const OilCard = ({ image, title, desc }) => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
    <img
      src={image}
      alt={title}
      className="h-56 w-full object-cover"
    />
    <div className="p-6">
      <h4 className="text-xl font-bold text-brand-purple-800">
        {title}
      </h4>
      <p className="text-gray-600 mt-3">
        {desc}
      </p>
    </div>
  </div>
);

export default ImpactSection;
