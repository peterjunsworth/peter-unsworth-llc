import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Books } from "./components/Books";
import { Contact } from "./components/Contact";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Button } from "./components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { motion } from "motion/react";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  if (showContactForm) {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <div className="fixed top-4 left-4 z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={() => setShowContactForm(false)}
              className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </motion.div>
        </div>
        <ContactForm />
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Hero onContactClick={() => setShowContactForm(true)} />
      <Services />
      <About />
      <Books />
      <Contact onContactClick={() => setShowContactForm(true)} />
      <Footer />
      <Toaster />
    </div>
  );
}