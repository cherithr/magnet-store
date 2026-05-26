export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧲</span>
              <div>
                <h3 className="font-display font-bold text-white text-lg leading-none">
                  Memento
                </h3>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-body">
                  Fridge Magnets
                </p>
              </div>
            </div>
            <p className="text-xs font-body leading-relaxed text-stone-500">
              Turn your favorite memories into premium personalized fridge magnets. Made with love in India.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body font-bold text-white text-sm mb-3">Shop</h4>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#" className="hover:text-white transition-colors">Family Magnets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding Gifts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Baby Milestones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pet Portraits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-white text-sm mb-3">Help</h4>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-white text-sm mb-3">Connect</h4>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#" className="hover:text-white transition-colors">📸 Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">💚 WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">📘 Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">✉️ Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-body">
          <p>© 2025 Memento Fridge Magnets. Made with ❤️ in India.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
