"use client";

import { motion } from "framer-motion";
import { BUNDLES } from "@/app/lib/data";
import { useStore } from "@/app/lib/store";
import { formatPrice } from "@/app/lib/utils";
import { Check, Star, Gift } from "lucide-react";

export default function PricingSection() {
  const { dispatch } = useStore();

  const features = [
    "Premium glossy print",
    "Waterproof UV coating",
    "Strong neodymium magnet",
    "Gift-ready packaging",
    "Free shipping",
    "3-5 day delivery",
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-warm-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-brand-500 font-body font-semibold text-sm uppercase tracking-wider mb-2">
            Bundle Deals
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-stone-900">
            More Magnets, More Savings
          </h2>
          <p className="text-stone-500 font-body mt-2 text-sm">
            All bundles include free shipping + premium packaging
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BUNDLES.map((bundle, i) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative bg-white rounded-3xl p-6 shadow-soft border-2 transition-all ${
                bundle.popular
                  ? "border-brand-500 shadow-card-hover"
                  : "border-warm-100"
              }`}
            >
              {bundle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full font-body flex items-center gap-1">
                  <Star size={12} className="fill-white" />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-5">
                <div className="text-3xl mb-2">{bundle.mystery ? "🎁" : "🧲"}</div>
                <h3 className="font-display font-bold text-xl text-stone-900">
                  {bundle.label}
                </h3>
                <p className="text-brand-500 font-body font-semibold text-sm">
                  {bundle.sublabel}
                </p>
                <div className="mt-3">
                  <div className="font-display font-bold text-4xl text-stone-900">
                    {formatPrice(bundle.price)}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-stone-400 line-through font-body text-sm">
                      {formatPrice(bundle.mrp)}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full font-body">
                      Save {bundle.discount}%
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 font-body mt-1">
                    {bundle.totalMagnets} magnets ·{" "}
                    {formatPrice(Math.round(bundle.price / bundle.totalMagnets))} each
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-body text-stone-600">
                    <Check size={14} className="text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
                {bundle.mystery && (
                  <li className="flex items-center gap-2 text-sm font-body font-semibold text-purple-600">
                    <Gift size={14} className="shrink-0" />
                    Free Mystery Gift Box!
                  </li>
                )}
              </ul>

              {/* CTA */}
              <button
                onClick={() => {
                  dispatch({ type: "SET_BUNDLE", bundle });
                  document.getElementById("personalize")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full py-3.5 rounded-2xl font-body font-bold text-sm transition-all ${
                  bundle.popular
                    ? "bg-brand-500 text-white hover:bg-brand-600"
                    : "bg-stone-100 text-stone-800 hover:bg-stone-200"
                }`}
              >
                Select This Bundle
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
