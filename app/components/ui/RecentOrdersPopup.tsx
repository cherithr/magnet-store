"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { RECENT_ORDERS } from "@/app/lib/data";

export default function RecentOrdersPopup() {
  const [current, setCurrent] = useState<number | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const show = (i: number) => {
      setCurrent(i);
      setTimeout(() => setCurrent(null), 4000);
    };

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    RECENT_ORDERS.forEach((_, i) => {
      timeouts.push(setTimeout(() => show(i), 6000 + i * 8000));
    });

    return () => timeouts.forEach(clearTimeout);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {current !== null && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 left-4 z-50 md:bottom-6"
        >
          <div className="bg-white rounded-2xl shadow-card-hover border border-warm-100 p-3 flex items-center gap-3 max-w-xs">
            <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
              <ShoppingBag size={18} className="text-brand-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-body font-semibold text-stone-800">
                {RECENT_ORDERS[current].name} from {RECENT_ORDERS[current].location}
              </p>
              <p className="text-[11px] text-stone-400 font-body truncate">
                Just ordered {RECENT_ORDERS[current].bundle}
              </p>
              <p className="text-[10px] text-green-500 font-body font-semibold mt-0.5">
                🟢 {RECENT_ORDERS[current].time}
              </p>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="text-stone-300 hover:text-stone-500 shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
