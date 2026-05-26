export type Bundle = {
  id: string;
  label: string;
  sublabel: string;
  quantity: number;
  totalMagnets: number;
  price: number;
  mrp: number;
  discount: number;
  badge?: string;
  popular?: boolean;
  mystery?: boolean;
};

export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  verified: boolean;
  date: string;
  tags: string[];
};

export type FAQ = {
  q: string;
  a: string;
};

export const BUNDLES: Bundle[] = [
  {
    id: "3+3",
    label: "Buy 3",
    sublabel: "Get 3 FREE",
    quantity: 3,
    totalMagnets: 6,
    price: 549,
    mrp: 1198,
    discount: 54,
    badge: "Best Value",
  },
  {
    id: "4+4",
    label: "Buy 4",
    sublabel: "Get 4 FREE",
    quantity: 4,
    totalMagnets: 8,
    price: 699,
    mrp: 1598,
    discount: 56,
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "6+box",
    label: "Buy 6",
    sublabel: "+ Free Mystery Box",
    quantity: 6,
    totalMagnets: 12,
    price: 999,
    mrp: 2398,
    discount: 58,
    mystery: true,
    badge: "Best Bundle",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Absolutely stunning quality! Ordered these for my wedding anniversary and my husband was in tears. The print quality is crisp and the magnets are super strong. Will definitely order again!",
    verified: true,
    date: "2 days ago",
    tags: ["Anniversary", "Gift"],
  },
  {
    id: "2",
    name: "Rahul Mehta",
    location: "Delhi",
    rating: 5,
    text: "Got these for my mom's birthday with family photos. She cried happy tears! The packaging itself is so premium. Arrived in 3 days with fast shipping. 10/10 would recommend!",
    verified: true,
    date: "5 days ago",
    tags: ["Birthday", "Family"],
  },
  {
    id: "3",
    name: "Ananya Krishnan",
    location: "Bangalore",
    rating: 5,
    text: "Ordered the 6-pack for our Goa trip photos. Every magnet came out perfect. Colors are so vivid and accurate to the original photos. The glossy finish makes them look super premium!",
    verified: true,
    date: "1 week ago",
    tags: ["Travel", "Memories"],
  },
  {
    id: "4",
    name: "Deepika Nair",
    location: "Chennai",
    rating: 5,
    text: "Baby's first year photos as magnets — best idea ever! Our fridge now looks like a beautiful gallery. The magnets don't fade at all even near the stove area. Brilliant product!",
    verified: true,
    date: "2 weeks ago",
    tags: ["Baby", "Milestone"],
  },
  {
    id: "5",
    name: "Vikram Joshi",
    location: "Pune",
    rating: 5,
    text: "Used these as wedding favors for our guests. Everyone LOVED it. The buy 4 get 4 deal was insane value. Packaging was beautiful enough to give as gifts directly.",
    verified: true,
    date: "3 weeks ago",
    tags: ["Wedding", "Favors"],
  },
  {
    id: "6",
    name: "Meera Patel",
    location: "Ahmedabad",
    rating: 4,
    text: "Very good product! My dog photos came out perfect. Strong magnet holds even heavy notes. Slight delay in shipping but customer support was super helpful. Will order again!",
    verified: true,
    date: "1 month ago",
    tags: ["Pets", "Gift"],
  },
];

export const FAQS: FAQ[] = [
  {
    q: "How long does delivery take?",
    a: "We deliver within 3-5 business days across India. Express delivery (1-2 days) is available for select pincodes at a small additional charge. You'll receive tracking details via SMS and WhatsApp.",
  },
  {
    q: "What image quality do I need?",
    a: "We recommend photos of at least 800x800 pixels for best print quality. Our AI upscaler automatically enhances lower-resolution images. Avoid blurry or heavily filtered photos for best results.",
  },
  {
    q: "Are the magnets waterproof?",
    a: "Yes! All our magnets have a UV-protected glossy laminate coating that makes them 100% waterproof and fade-resistant. They're safe near kitchen steam, rain, and humidity.",
  },
  {
    q: "What are the exact dimensions?",
    a: "Each magnet is exactly 2×2 inches (5×5 cm) square. The print area is the full face of the magnet with no white borders unless you request them.",
  },
  {
    q: "Can I return or get a refund?",
    a: "Since every magnet is personalized, we don't offer returns. However, if there's a print quality issue or damage in transit, we'll reprint and reship at no cost. We guarantee your satisfaction!",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes! COD is available across all major cities and pincodes in India. A small COD handling fee of ₹40 applies. UPI, cards, and net banking are also accepted.",
  },
  {
    q: "Can I order different photos in one pack?",
    a: "Absolutely! Each magnet in your bundle can have a completely different photo. Simply upload different images for each slot in the personalization section.",
  },
  {
    q: "How strong is the magnet?",
    a: "Our magnets use premium N35 neodymium-grade ferrite cores that hold firmly on any standard refrigerator, metal surfaces, and magnetic boards. They won't slip or fall even with papers attached.",
  },
];

export const FEATURES = [
  { icon: "💧", title: "100% Waterproof", desc: "UV-laminated glossy coating" },
  { icon: "🌈", title: "Fade Resistant", desc: "Colors last 10+ years" },
  { icon: "✨", title: "Premium Print", desc: "300 DPI pro-grade printing" },
  { icon: "🧲", title: "Strong Magnet", desc: "N35 neodymium core" },
  { icon: "🤝", title: "Handcrafted", desc: "Made with love in India" },
  { icon: "⚡", title: "Fast Delivery", desc: "3-5 business days" },
];

export const STEPS = [
  { step: "01", title: "Upload Photos", desc: "Choose your favorite memories from your phone or gallery", icon: "📸" },
  { step: "02", title: "Customize", desc: "Select your bundle and arrange your photos", icon: "✏️" },
  { step: "03", title: "Preview", desc: "See your magnets before you order", icon: "👁️" },
  { step: "04", title: "Delivered!", desc: "Premium packaged to your doorstep in 3-5 days", icon: "📦" },
];

export const RECENT_ORDERS = [
  { name: "Sneha K.", location: "Mumbai", bundle: "Buy 4 Get 4", time: "2m ago" },
  { name: "Arjun R.", location: "Delhi", bundle: "Buy 6 + Mystery Box", time: "5m ago" },
  { name: "Kavya M.", location: "Bangalore", bundle: "Buy 3 Get 3", time: "8m ago" },
  { name: "Rohan P.", location: "Hyderabad", bundle: "Buy 4 Get 4", time: "12m ago" },
  { name: "Divya S.", location: "Chennai", bundle: "Buy 6 + Mystery Box", time: "15m ago" },
];
