"use client";

import { useState, useRef, DragEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Upload, CheckCircle2 } from "lucide-react";
import { useStore } from "@/app/lib/store";
import { fileToDataURL } from "@/app/lib/utils";

type UploadSlotProps = {
  index: number;
  image: { id: string; dataUrl: string; name: string } | null;
};

export default function UploadSlot({ index, image }: UploadSlotProps) {
  const { dispatch } = useStore();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) { clearInterval(interval); return p; }
        return p + Math.random() * 20;
      });
    }, 100);

    try {
      const dataUrl = await fileToDataURL(file);
      clearInterval(interval);
      setProgress(100);
      await new Promise((r) => setTimeout(r, 300));
      dispatch({
        type: "SET_UPLOAD",
        index,
        image: { id: `${Date.now()}-${index}`, file, dataUrl, name: file.name },
      });
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      className="aspect-square"
    >
      <div
        className={`relative w-full h-full rounded-2xl border-2 border-dashed transition-all duration-200 overflow-hidden cursor-pointer
          ${dragging ? "border-brand-500 bg-brand-50 scale-105" : ""}
          ${image ? "border-transparent" : "border-stone-300 hover:border-brand-400 hover:bg-warm-50"}
        `}
        onClick={() => !image && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-warm-100 gap-2 p-2"
            >
              <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
              <div className="w-full bg-warm-200 rounded-full h-1 overflow-hidden">
                <motion.div
                  className="h-full bg-brand-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="text-[10px] text-stone-400 font-body">Uploading...</span>
            </motion.div>
          ) : image ? (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 group"
            >
              <img
                src={image.dataUrl}
                alt={image.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      inputRef.current?.click();
                    }}
                    className="bg-white text-stone-700 p-1.5 rounded-full shadow-md hover:bg-brand-50"
                  >
                    <Upload size={12} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "REMOVE_UPLOAD", index });
                    }}
                    className="bg-white text-red-500 p-1.5 rounded-full shadow-md hover:bg-red-50"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>

              {/* Success badge */}
              <div className="absolute top-1 right-1 bg-green-500 rounded-full p-0.5">
                <CheckCircle2 size={10} className="text-white" />
              </div>

              {/* Magnet shadow effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] rounded-xl pointer-events-none" />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2"
            >
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                <Plus size={16} className="text-brand-500" />
              </div>
              <span className="text-[10px] text-stone-400 font-body text-center leading-tight">
                Tap to upload
              </span>
              <span className="text-[9px] text-stone-300 font-body">Photo {index + 1}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
