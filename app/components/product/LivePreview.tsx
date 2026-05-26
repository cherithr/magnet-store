"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/app/lib/store";
import { Sparkles } from "lucide-react";

export default function LivePreview() {
  const { state } = useStore();
  const uploads = state.uploads;
  const uploadedImages = uploads.filter(Boolean);

  if (uploadedImages.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-stone-100 to-warm-100 rounded-3xl p-5 space-y-3"
    >
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-brand-500" />
        <h3 className="font-body font-bold text-stone-800 text-sm">Live Preview</h3>
        <span className="text-xs text-stone-400 font-body">
          {uploadedImages.length} of {state.selectedBundle.totalMagnets} uploaded
        </span>
      </div>

      {/* Fridge scene */}
      <div className="relative bg-gradient-to-b from-slate-200 to-slate-300 rounded-2xl p-4 min-h-[160px]">
        {/* Fridge texture lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-slate-600"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>

        {/* Magnets on fridge */}
        <div className="relative flex flex-wrap gap-2 justify-center">
          <AnimatePresence>
            {uploadedImages.map((img, i) => (
              img && (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: (i % 3 === 0 ? -2 : i % 3 === 1 ? 1 : -1),
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", delay: i * 0.1 }}
                  className="magnet-preview w-16 h-16 shrink-0"
                >
                  <img
                    src={img.dataUrl}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Empty slots */}
          {uploads
            .filter((u) => !u)
            .map((_, i) => (
              <div
                key={`empty-${i}`}
                className="w-16 h-16 rounded border-2 border-dashed border-slate-400 opacity-30"
              />
            ))}
        </div>
      </div>

      <p className="text-xs text-center text-stone-400 font-body">
        This is how your magnets will look on your fridge ✨
      </p>
    </motion.div>
  );
}
