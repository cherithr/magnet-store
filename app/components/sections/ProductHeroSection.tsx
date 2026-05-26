"use client";

import { motion } from "framer-motion";
import { Star, Shield, Users, MapPin } from "lucide-react";
import ProductImageCarousel from "../product/ProductImageCarousel";
import BundleSelector from "../product/BundleSelector";
import PersonalizationSection from "../product/PersonalizationSection";
import LivePreview from "../product/LivePreview";
import AddToCartSection from "../product/AddToCartSection";
import { CountdownTimer, TrustBadges } from "../ui/FloatingWidgets";
import { useStore } from "@/app/lib/store";

function RatingBar() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="font-body text-sm font-semibold text-stone-700">4.9</span>
      <span className="text-stone-400 text-sm font-body">· 2,847 reviews</span>
      <span className="hidden sm:flex items-center gap-1 text-stone-400 text-sm font-body">
        <Users size={12} />
        15K+ families
      </span>
    </div>
  );
}

export default function ProductHeroSection() {
  const { state } = useStore();

  return (
    <section id="product" className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:sticky md:top-24"
        >
          <ProductImageCarousel />
        </motion.div>

        {/* Right: Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          {/* Badges row */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2.5 py-1 rounded-full font-body">
              ✅ In Stock
            </span>
            <span className="bg-brand-100 text-brand-700 text-[11px] font-bold px-2.5 py-1 rounded-full font-body">
              🏆 Bestseller
            </span>
            <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full font-body flex items-center gap-1">
              <MapPin size={10} /> Ships across India
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-stone-900 leading-tight">
              Personalized Fridge Magnet
            </h1>
            <p className="text-stone-500 font-body mt-1 text-sm">
              Premium 2×2 inch · Glossy finish · Waterproof · Made in India
            </p>
          </div>

          {/* Rating */}
          <RatingBar />

          {/* Trust line */}
          <div className="flex items-center gap-2 text-sm text-stone-500 font-body">
            <Shield size={14} className="text-brand-500" />
            Trusted by <strong className="text-stone-700">15,000+ families</strong> across India
          </div>

          {/* Countdown */}
          <CountdownTimer />

          {/* Divider */}
          <div className="h-px bg-warm-200" />

          {/* Bundle Selector */}
          <BundleSelector />

          {/* Divider */}
          <div className="h-px bg-warm-200" />

          {/* Personalization */}
          <PersonalizationSection />

          {/* Live Preview */}
          <LivePreview />

          {/* Divider */}
          <div className="h-px bg-warm-200" />

          {/* Add to Cart */}
          <AddToCartSection />

          {/* Trust badges */}
          <TrustBadges />

          {/* COD Badge */}
          <div className="flex items-center justify-center gap-2 py-2 bg-warm-50 rounded-2xl border border-warm-200">
            <span className="text-lg">💵</span>
            <span className="text-xs font-body text-stone-600">
              <strong>Cash on Delivery</strong> available across India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
