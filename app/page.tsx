"use client";

import { useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import UseCasesSection from "@/components/use-cases-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const CLIENT_KEY =
    "5044399ff0cb270a50d0098f147790d15c6569916cdf352b2fd3466fd0a95412";
  const ASSISTANT_ID = "686d8132f81fdde126ef273b";
  const USER_ID = "6859dde943c4c91a1db4642c";

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

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
      <ChatWidget
        clientKey={CLIENT_KEY}
        validationApiUrl="/api/validate-sdk" // Points to the new validation API route
        chatApiUrl="/api/chat/message" // Points to your existing chat message API route
        chatStartApiUrl="/api/chat/start" // Points to your existing chat start API route
        assistantId={ASSISTANT_ID}
        userId={USER_ID}
        // Optional props for customization
        chatTitle="My Custom Chatbot"
        chatSubtitle="Powered by AIDEN AI"
        initialBotMessage="Hola Bienvenido a nuestro software, la forma mas facil de implementar GPT-4 en tu negocio preguntame en que puedo ayudarte?"
        inputPlaceholder="Ask me anything..."
        theme="default" // or "custom"
        // If theme is "custom", you can uncomment and set these:
        // userTextColor="text-blue-100"
        // aiTextColor="text-gray-900"
        // primaryColor="bg-blue-700"
        // botMessageBgColor="bg-blue-100"
        // userMessageBgColor="bg-blue-700"
        // floatingButtonColor="bg-blue-600"
        widgetPosition="bottom-right"
        showLogo={true}
      />
    </main>
  );
}
