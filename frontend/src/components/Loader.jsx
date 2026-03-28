import React, { useEffect, useState } from 'react';
import logoImg from '../assets/logo.jpeg';

// Module-level flag so loader only shows once per session
let hasLoaded = false;

const Loader = () => {
  const [visible, setVisible] = useState(!hasLoaded);

  useEffect(() => {
    if (hasLoaded) return;
    const timer = setTimeout(() => {
      setVisible(false);
      hasLoaded = true;
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-brand-purple-800 to-brand-purple-900 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Logo */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-6 animate-bounce">
        <img src={logoImg} alt="Manna Pure Oil" className="w-full h-full object-cover" />
      </div>

      {/* Brand name */}
      <h1 className="text-3xl font-black text-white mb-1 tracking-wide">Manna Pure Oil</h1>
      <p className="text-green-300 text-sm font-medium mb-8">100% Natural & Cold Pressed</p>

      {/* Spinner */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-brand-orange-400"
            style={{
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
