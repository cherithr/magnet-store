"use client";

import { ShoppingBag, Heart, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/app/lib/store";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { state, dispatch } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = state.cartItems.reduce((a, b) => a + b.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-warm-200 shadow-soft">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧲</span>
          <div>
            <h1 className="font-display font-bold text-lg leading-none text-brand-700">
              Memento
            </h1>
            <p className="text-[10px] text-brand-400 uppercase tracking-widest font-body">
              Fridge Magnets
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-stone-600">
          <a href="#product" className="hover:text-brand-600 transition-colors">Shop</a>
          <a href="#how-it-works" className="hover:text-brand-600 transition-colors">How It Works</a>
          <a href="#reviews" className="hover:text-brand-600 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-brand-600 transition-colors">FAQ</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex text-stone-500 hover:text-brand-600 transition-colors">
            <Search size={18} />
          </button>
          <button
            onClick={() => dispatch({ type: "TOGGLE_WISHLIST" })}
            className="text-stone-500 hover:text-red-500 transition-colors"
          >
            <Heart
              size={18}
              className={state.wishlist ? "fill-red-500 text-red-500" : ""}
            />
          </button>
          <button
            onClick={() => dispatch({ type: "TOGGLE_CART" })}
            className="relative text-stone-700 hover:text-brand-600 transition-colors"
          >
            <ShoppingBag size={20} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 bg-brand-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            className="md:hidden text-stone-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-warm-200 px-4 py-4 flex flex-col gap-4 text-sm font-body font-medium text-stone-700"
          >
            <a href="#product" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
