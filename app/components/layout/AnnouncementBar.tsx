"use client";

const items = [
  "🎁 Free shipping on all orders",
  "⭐ Trusted by 15,000+ happy families",
  "💳 COD Available across India",
  "🚀 Delivered in 3-5 business days",
  "✨ Premium glossy print quality",
  "🔒 100% secure checkout",
];

export default function AnnouncementBar() {
  const content = [...items, ...items];

  return (
    <div className="bg-brand-600 text-white text-xs font-body font-medium py-2 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap" style={{ width: "200%" }}>
        {content.map((item, i) => (
          <span key={i} className="inline-block px-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
