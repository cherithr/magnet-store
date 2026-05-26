"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useCountdown } from "@/app/hooks/useCountdown";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hi! I want to order personalized fridge magnets"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-24 md:bottom-6 z-40 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center"
    >
      <MessageCircle size={24} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </motion.a>
  );
}

export function CountdownTimer() {
  const { m, s } = useCountdown(15);

  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center justify-between">
      <div>
        <p className="text-xs font-body font-bold text-red-700 uppercase tracking-wider">
          ⚡ Limited Time Offer
        </p>
        <p className="text-xs text-red-500 font-body mt-0.5">
          Discount expires soon — lock in your price!
        </p>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <div className="bg-red-600 text-white rounded-lg w-9 h-9 flex items-center justify-center font-display font-bold text-lg">
          {m}
        </div>
        <span className="text-red-600 font-bold font-display">:</span>
        <div className="bg-red-600 text-white rounded-lg w-9 h-9 flex items-center justify-center font-display font-bold text-lg">
          {s}
        </div>
      </div>
    </div>
  );
}

export function TrustBadges() {
  const badges = [
    { emoji: "🔒", text: "SSL Secured" },
    { emoji: "💳", text: "COD Available" },
    { emoji: "↩️", text: "100% Guarantee" },
    { emoji: "📦", text: "Safe Packaging" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {badges.map((badge) => (
        <div
          key={badge.text}
          className="flex items-center gap-1.5 text-xs text-stone-500 font-body"
        >
          <span>{badge.emoji}</span>
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
