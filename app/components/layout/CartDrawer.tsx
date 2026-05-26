"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Truck, Trash2, Plus, Minus } from "lucide-react";
import { useStore } from "@/app/lib/store";
import { formatPrice } from "@/app/lib/utils";

export default function CartDrawer() {
  const { state, dispatch } = useStore();
  const total = state.cartItems.reduce(
    (acc, item) => acc + item.bundle.price * item.quantity,
    0
  );
  const totalItems = state.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AnimatePresence>
      {state.cartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: "TOGGLE_CART" })}
            className="fixed inset-0 bg-black/40 cart-overlay z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-warm-200">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand-600" />
                <h2 className="font-display font-bold text-lg">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="bg-brand-500 text-white text-xs font-bold px-2 py-0.5 rounded-full font-body">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
                className="text-stone-400 hover:text-stone-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {state.cartItems.length === 0 ? (
                <div className="text-center py-16 text-stone-400">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="font-body">Your cart is empty</p>
                  <button
                    onClick={() => dispatch({ type: "TOGGLE_CART" })}
                    className="mt-4 text-brand-600 font-medium text-sm underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {state.cartItems.map((item, i) => (
                      <motion.div
                        key={item.bundle.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 60, transition: { duration: 0.2 } }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-3 p-3 bg-warm-100 rounded-xl"
                      >
                        {/* Thumbnail grid */}
                        <div className="grid grid-cols-2 gap-1 w-16 h-16 shrink-0">
                          {item.uploads.slice(0, 4).map((u, j) => (
                            <div
                              key={j}
                              className="rounded bg-warm-200 overflow-hidden"
                            >
                              {u ? (
                                <img
                                  src={u.dataUrl}
                                  className="w-full h-full object-cover"
                                  alt=""
                                />
                              ) : (
                                <div className="w-full h-full bg-warm-300" />
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <p className="font-body font-semibold text-sm text-stone-800 truncate">
                              {item.bundle.label} {item.bundle.sublabel}
                            </p>
                            <button
                              onClick={() =>
                                dispatch({ type: "REMOVE_FROM_CART", bundleId: item.bundle.id })
                              }
                              className="text-stone-300 hover:text-red-400 transition-colors shrink-0 ml-1"
                              aria-label="Remove item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <p className="text-xs text-stone-500 mt-0.5">
                            {item.bundle.totalMagnets} magnets
                          </p>

                          {/* Quantity controls + price */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1 bg-white rounded-lg border border-stone-200 overflow-hidden">
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    bundleId: item.bundle.id,
                                    delta: -1,
                                  })
                                }
                                className="w-7 h-7 flex items-center justify-center text-stone-500 hover:bg-stone-100 hover:text-stone-800 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={12} />
                              </button>
                              <motion.span
                                key={item.quantity}
                                initial={{ scale: 1.3 }}
                                animate={{ scale: 1 }}
                                className="w-6 text-center text-sm font-bold font-body text-stone-800"
                              >
                                {item.quantity}
                              </motion.span>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    bundleId: item.bundle.id,
                                    delta: 1,
                                  })
                                }
                                className="w-7 h-7 flex items-center justify-center text-stone-500 hover:bg-stone-100 hover:text-stone-800 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <p className="font-display font-bold text-brand-600 text-sm">
                              {formatPrice(item.bundle.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Free Shipping Banner */}
            <div className="mx-5 mb-3 bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
              <Truck size={16} className="text-green-600 shrink-0" />
              <p className="text-xs text-green-700 font-body font-medium">
                🎉 You qualify for <strong>FREE shipping!</strong>
              </p>
            </div>

            {/* Footer */}
            {state.cartItems.length > 0 && (
              <div className="p-5 border-t border-warm-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-body text-stone-600">
                    Subtotal
                    <span className="text-xs text-stone-400 ml-1">({totalItems} {totalItems === 1 ? "item" : "items"})</span>
                  </span>
                  <motion.span
                    key={total}
                    initial={{ scale: 1.1, color: "#e05e1a" }}
                    animate={{ scale: 1, color: "#1c1917" }}
                    className="font-display font-bold text-xl"
                  >
                    {formatPrice(total)}
                  </motion.span>
                </div>
                <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-body font-bold py-4 rounded-2xl transition-colors text-sm">
                  Proceed to Checkout →
                </button>
                <p className="text-center text-xs text-stone-400 font-body">
                  🔒 Secure checkout · COD Available
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
