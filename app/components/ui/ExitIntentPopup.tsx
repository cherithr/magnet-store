"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/50 z-50 cart-overlay"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative pointer-events-auto">
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
              >
                <X size={18} />
              </button>

              <div className="text-center">
                <div className="text-5xl mb-3">🎁</div>
                <h2 className="font-display font-bold text-2xl text-stone-900 mb-2">
                  Wait! Don't Miss Out
                </h2>
                <p className="text-stone-500 font-body text-sm mb-4">
                  Use code <strong className="text-brand-600">SAVE10</strong> for an extra
                  10% off your first order!
                </p>

                <div className="bg-brand-50 border-2 border-dashed border-brand-300 rounded-2xl p-4 mb-5">
                  <p className="font-display font-bold text-3xl text-brand-600 tracking-widest">
                    SAVE10
                  </p>
                  <p className="text-xs text-stone-400 font-body mt-1">
                    Valid for next 15 minutes
                  </p>
                </div>

                <button
                  onClick={handleDismiss}
                  className="w-full bg-brand-500 text-white font-body font-bold py-4 rounded-2xl hover:bg-brand-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Gift size={16} /> Claim My Discount
                </button>

                <button
                  onClick={handleDismiss}
                  className="w-full text-stone-400 text-xs font-body mt-3 hover:text-stone-600"
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
