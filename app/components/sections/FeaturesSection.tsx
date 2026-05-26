"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/app/lib/data";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-warm-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-brand-500 font-body font-semibold text-sm uppercase tracking-wider mb-2">
            Premium Quality
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-stone-900">
            Why Families Love Us
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-5 text-center shadow-soft border border-warm-100 transition-all cursor-default"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-body font-bold text-stone-800 text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-stone-400 font-body">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
