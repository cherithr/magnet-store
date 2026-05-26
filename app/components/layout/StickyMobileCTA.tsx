"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Zap } from "lucide-react";
import { useStore } from "@/app/lib/store";
import { formatPrice } from "@/app/lib/utils";

export default function StickyMobileCTA() {
  const { state, dispatch } = useStore();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART" });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      <div className="bg-white border-t border-warm-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] px-4 py-3 pb-safe">
        <div className="flex items-center gap-3">
          {/* Price */}
          <div className="shrink-0">
            <div className="font-display font-bold text-xl text-stone-900">
              {formatPrice(state.selectedBundle.price)}
            </div>
            <div className="text-[10px] text-stone-400 font-body line-through">
              {formatPrice(state.selectedBundle.mrp)}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex-1 grid grid-cols-2 gap-2">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleAdd}
              className={`flex items-center justify-center gap-1.5 py-3 rounded-xl font-body font-bold text-sm transition-all ${
                added ? "bg-green-500 text-white" : "bg-stone-900 text-white"
              }`}
            >
              <ShoppingBag size={15} />
              {added ? "Added!" : "Add to Cart"}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-brand-500 text-white font-body font-bold text-sm"
            >
              <Zap size={15} />
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
