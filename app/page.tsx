import AnnouncementBar from "./components/layout/AnnouncementBar";
import Header from "./components/layout/Header";
import CartDrawer from "./components/layout/CartDrawer";
import StickyMobileCTA from "./components/layout/StickyMobileCTA";
import Footer from "./components/layout/Footer";
import ProductHeroSection from "./components/sections/ProductHeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import ReviewsSection from "./components/sections/ReviewsSection";
import PricingSection from "./components/sections/PricingSection";
import FAQSection from "./components/sections/FAQSection";
import RecentOrdersPopup from "./components/ui/RecentOrdersPopup";
import ExitIntentPopup from "./components/ui/ExitIntentPopup";
import { WhatsAppButton } from "./components/ui/FloatingWidgets";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <CartDrawer />

      <ProductHeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <ReviewsSection />
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Floating UI */}
      <StickyMobileCTA />
      <WhatsAppButton />
      <RecentOrdersPopup />
      <ExitIntentPopup />

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 md:h-0" />
    </main>
  );
}
