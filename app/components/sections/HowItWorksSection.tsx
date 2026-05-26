"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/app/lib/data";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-brand-500 font-body font-semibold text-sm uppercase tracking-wider mb-2">
            Super Easy
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-stone-900">
            Order in 4 Simple Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="relative mx-auto w-20 h-20 bg-white border-2 border-warm-200 rounded-2xl shadow-soft flex items-center justify-center text-3xl mb-4 z-10">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-500 text-white text-xs font-bold rounded-full flex items-center justify-center font-body">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-body font-bold text-stone-800 text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-400 font-body leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
