import { Navbar } from '@/components/navbar'
import HeroSection from '@/components/hero-section-one'
import Testimonials from '@/components/testimonials'
import Features from '@/components/features-5'
import StatsFour from '@/components/stats-four'
import Footer from '@/components/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <StatsFour />
      <Testimonials />
      <Footer />
    </div>
  )
}