"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Zap, Check } from "lucide-react";
import { useStore } from "@/app/lib/store";
import { formatPrice } from "@/app/lib/utils";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function AddToCartSection() {
  const { state, dispatch } = useStore();
  const [added, setAdded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { selectedBundle } = state;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
    setAdded(true);
    setShowConfetti(true);
    setTimeout(() => setAdded(false), 2000);
    setTimeout(() => setShowConfetti(false), 3500);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={typeof window !== "undefined" ? window.innerWidth : 1200}
          height={typeof window !== "undefined" ? window.innerHeight : 800}
          recycle={false}
          numberOfPieces={200}
          colors={["#e05e1a", "#f97316", "#fbbf24", "#fb923c", "#fed7aa"]}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 999, pointerEvents: "none" }}
        />
      )}

      <div className="space-y-3">
        {/* Price Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-3xl text-stone-900">
              {formatPrice(selectedBundle.price)}
            </span>
            <span className="text-stone-400 line-through font-body text-lg">
              {formatPrice(selectedBundle.mrp)}
            </span>
          </div>
          <span className="bg-green-100 text-green-700 font-body font-bold text-sm px-3 py-1 rounded-full">
            {selectedBundle.discount}% OFF
          </span>
        </div>

        {/* Per-magnet price */}
        <p className="text-xs text-stone-400 font-body">
          Just {formatPrice(Math.round(selectedBundle.price / selectedBundle.totalMagnets))} per magnet · Free shipping
        </p>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.97 }}
            disabled={added}
            className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-body font-bold text-sm transition-all duration-300 ${
              added
                ? "bg-green-500 text-white"
                : "bg-stone-900 text-white hover:bg-stone-800"
            }`}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check size={16} /> Added!
                </motion.span>
              ) : (
                <motion.span
                  key="bag"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag size={16} /> Add to Cart
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 py-4 rounded-2xl font-body font-bold text-sm bg-brand-500 text-white hover:bg-brand-600 transition-colors"
          >
            <Zap size={16} /> Buy Now
          </motion.button>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-4 pt-1">
          {["🔒 Secure", "🚀 Fast Ship", "💳 COD OK", "↩️ Guaranteed"].map((badge) => (
            <span key={badge} className="text-[10px] text-stone-400 font-body">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
