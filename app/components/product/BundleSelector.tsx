"use client";

import { motion } from "framer-motion";
import { BUNDLES } from "@/app/lib/data";
import { useStore } from "@/app/lib/store";
import { formatPrice } from "@/app/lib/utils";
import { cn } from "@/app/lib/utils";
import { Gift, Star, ShoppingBag } from "lucide-react";

export default function BundleSelector() {
  const { state, dispatch } = useStore();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-body font-semibold text-stone-800 text-sm uppercase tracking-wider">
          Select Bundle
        </h3>
        <span className="text-xs text-stone-500 font-body">
          More you buy, more you save!
        </span>
      </div>

      <div className="grid gap-2">
        {BUNDLES.map((bundle) => {
          const isSelected = state.selectedBundle.id === bundle.id;
          const cartItem = state.cartItems.find((i) => i.bundle.id === bundle.id);
          const inCartQty = cartItem?.quantity ?? 0;

          return (
            <motion.button
              key={bundle.id}
              onClick={() => dispatch({ type: "SET_BUNDLE", bundle })}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative w-full rounded-2xl border-2 p-4 text-left transition-all duration-200",
                isSelected
                  ? "border-brand-500 bg-brand-50 shadow-md"
                  : "border-stone-200 bg-white hover:border-brand-300 hover:bg-warm-50"
              )}
            >
              {/* Bundle badge */}
              {bundle.badge && (
                <span
                  className={cn(
                    "absolute -top-2.5 left-4 text-[11px] font-bold px-2.5 py-0.5 rounded-full font-body",
                    bundle.popular
                      ? "bg-brand-500 text-white"
                      : bundle.mystery
                      ? "bg-purple-600 text-white"
                      : "bg-green-600 text-white"
                  )}
                >
                  {bundle.popular && <Star size={10} className="inline mr-0.5 -mt-0.5" />}
                  {bundle.badge}
                </span>
              )}

              {/* In-cart badge */}
              {inCartQty > 0 && (
                <motion.span
                  key={inCartQty}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2.5 right-4 flex items-center gap-1 bg-stone-800 text-white text-[11px] font-bold px-2 py-0.5 rounded-full font-body"
                >
                  <ShoppingBag size={9} />
                  {inCartQty} in cart
                </motion.span>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Radio */}
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                      isSelected ? "border-brand-500" : "border-stone-300"
                    )}
                  >
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2.5 h-2.5 bg-brand-500 rounded-full"
                      />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-body font-bold text-stone-800">
                        {bundle.label}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-semibold font-body",
                          bundle.mystery ? "text-purple-600" : "text-brand-600"
                        )}
                      >
                        {bundle.sublabel}
                      </span>
                      {bundle.mystery && <Gift size={14} className="text-purple-500" />}
                    </div>
                    <p className="text-xs text-stone-500 font-body mt-0.5">
                      {bundle.totalMagnets} magnets total
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="font-display font-bold text-lg text-stone-900">
                    {formatPrice(bundle.price)}
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="text-xs text-stone-400 line-through font-body">
                      {formatPrice(bundle.mrp)}
                    </span>
                    <span className="text-[11px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded font-body">
                      {bundle.discount}% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Savings highlight */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 pt-2 border-t border-brand-200"
                >
                  <p className="text-xs text-brand-600 font-body font-medium">
                    💰 You save {formatPrice(bundle.mrp - bundle.price)} on this order!
                  </p>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
