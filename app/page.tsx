"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import UseCasesSection from "@/components/use-cases-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <main className="min-h-screen">
      <Toaster />
      <Header />
      <HeroSection openChat={toggleChat} />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <UseCasesSection />
      <FaqSection />
      <Footer />
      <ChatWidget isOpen={isChatOpen} onClose={toggleChat} />
    </main>
  )
}
