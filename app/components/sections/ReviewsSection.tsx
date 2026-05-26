"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { REVIEWS } from "@/app/lib/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={star <= rating ? "fill-amber-400 text-amber-400" : "text-stone-300 fill-stone-300"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand-500 font-body font-semibold text-sm uppercase tracking-wider mb-2">
            Customer Love
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-stone-900">
            15,000+ Happy Families
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-body font-bold text-stone-800">4.9/5</span>
            <span className="text-stone-400 font-body text-sm">· 2,847 reviews</span>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
              className="bg-white rounded-2xl p-5 shadow-soft border border-warm-100 transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-200 to-brand-400 flex items-center justify-center text-white font-bold font-body text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-body font-semibold text-stone-800 text-sm">
                        {review.name}
                      </span>
                      {review.verified && (
                        <BadgeCheck size={14} className="text-blue-500" />
                      )}
                    </div>
                    <span className="text-xs text-stone-400 font-body">
                      {review.location} · {review.date}
                    </span>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* Text */}
              <p className="text-stone-600 font-body text-sm leading-relaxed">
                "{review.text}"
              </p>

              {/* Tags */}
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-warm-100 text-stone-500 px-2 py-0.5 rounded-full font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* UGC Gallery placeholder */}
        <div className="mt-10">
          <h3 className="font-display font-bold text-xl text-center text-stone-800 mb-4">
            From Our Customers' Fridges 📸
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden"
                style={{
                  background: `hsl(${20 + i * 15}, ${60 + (i % 3) * 10}%, ${80 + (i % 2) * 10}%)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-2xl opacity-40">
                  {["❤️", "👶", "🐶", "🌍", "💑", "🎉", "👨‍👩‍👧‍👦", "🏖️", "🎂", "🌸", "🐱", "✨"][i]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
