import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import Contact from '@/components/Contact';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <ReviewsSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating KakaoTalk & Scroll-to-Top Actions */}
      <FloatingActions />
    </div>
  );
}
