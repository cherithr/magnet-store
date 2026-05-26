"use client";

import { motion } from "framer-motion";
import { useStore } from "@/app/lib/store";
import UploadSlot from "./UploadSlot";
import { ImagePlus, Info } from "lucide-react";

export default function PersonalizationSection() {
  const { state } = useStore();
  const { selectedBundle, uploads } = state;
  const uploadedCount = uploads.filter(Boolean).length;

  return (
    <div id="personalize" className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-body font-bold text-stone-800 uppercase tracking-widest text-xs">
            ✨ Personalize
          </h3>
          <p className="text-sm font-body text-stone-500 mt-0.5">
            Upload {selectedBundle.totalMagnets} photos for your magnets
          </p>
        </div>
        <div className="text-right">
          <span className="font-display font-bold text-2xl text-brand-600">
            {uploadedCount}
          </span>
          <span className="text-stone-400 font-body text-sm">
            /{selectedBundle.totalMagnets}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"
          animate={{ width: `${(uploadedCount / selectedBundle.totalMagnets) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Tip */}
      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
        <Info size={14} className="text-amber-500 mt-0.5 shrink-0" />
        <p className="text-xs font-body text-amber-700">
          <strong>Pro tip:</strong> Use high-resolution photos (min. 800×800px) for the sharpest print quality. 
          Landscape or portrait photos will be cropped to a square.
        </p>
      </div>

      {/* Upload Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {uploads.map((image, i) => (
          <UploadSlot key={i} index={i} image={image} />
        ))}
      </div>

      {/* Upload All CTA if no uploads yet */}
      {uploadedCount === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-2"
        >
          <div className="inline-flex items-center gap-2 text-brand-600 font-body font-medium text-sm">
            <ImagePlus size={16} />
            Tap any box above to upload your photo
          </div>
        </motion.div>
      )}

      {/* Completed state */}
      {uploadedCount === selectedBundle.totalMagnets && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-xl p-3 text-center"
        >
          <p className="text-green-700 font-body font-semibold text-sm">
            🎉 All photos uploaded! You're ready to order.
          </p>
        </motion.div>
      )}
    </div>
  );
}
