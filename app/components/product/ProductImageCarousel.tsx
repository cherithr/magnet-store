"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const PRODUCT_IMAGES = [
  {
    id: 1,
    bg: "from-amber-50 to-orange-50",
    label: "Family Collection",
    emoji: "👨‍👩‍👧‍👦",
    colors: ["#f97316", "#fb923c", "#fdba74", "#fed7aa"],
  },
  {
    id: 2,
    bg: "from-pink-50 to-rose-50",
    label: "Wedding Memories",
    emoji: "💑",
    colors: ["#ec4899", "#f43f5e", "#fb7185", "#fda4af"],
  },
  {
    id: 3,
    bg: "from-blue-50 to-indigo-50",
    label: "Baby Milestones",
    emoji: "👶",
    colors: ["#3b82f6", "#6366f1", "#818cf8", "#a5b4fc"],
  },
  {
    id: 4,
    bg: "from-green-50 to-emerald-50",
    label: "Travel Collection",
    emoji: "✈️",
    colors: ["#10b981", "#059669", "#34d399", "#6ee7b7"],
  },
];

export default function ProductImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  const next = () => setCurrent((c) => (c + 1) % PRODUCT_IMAGES.length);

  return (
    <div className="relative">
      {/* Main Image */}
      <div
        className={`relative bg-gradient-to-br ${PRODUCT_IMAGES[current].bg} rounded-3xl overflow-hidden aspect-square cursor-zoom-in`}
        onClick={() => setZoomed(!zoomed)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: zoomed ? 1.15 : 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center p-8"
          >
            {/* Magnet Grid Mockup */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="aspect-square rounded-lg shadow-magnet overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${PRODUCT_IMAGES[current].colors[i % 4]}, ${PRODUCT_IMAGES[current].colors[(i + 1) % 4]})`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white/60 text-2xl">
                    {i === 2 ? PRODUCT_IMAGES[current].emoji : ""}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Zoom hint */}
        <div className="absolute bottom-3 right-3 bg-white/80 rounded-full p-1.5 text-stone-500">
          <ZoomIn size={14} />
        </div>

        {/* Label badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-body font-semibold text-stone-700 px-3 py-1.5 rounded-full shadow-soft">
          {PRODUCT_IMAGES[current].label}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-brand-50 transition-colors"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-brand-50 transition-colors"
      >
        <ChevronRight size={16} />
      </button>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3">
        {PRODUCT_IMAGES.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setCurrent(i)}
            className={`flex-1 aspect-square rounded-xl bg-gradient-to-br ${img.bg} overflow-hidden border-2 transition-all ${
              i === current ? "border-brand-500 scale-105" : "border-transparent"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center text-lg">
              {img.emoji}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
