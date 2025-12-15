import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Books } from "./components/Books";
import { LinkedInArticles } from "./components/LinkedInArticles";
import { Contact } from "./components/Contact";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SeasonalEffects, getSeason, type Season } from "./components/SeasonalEffects";
import { SeasonSwitcher } from "./components/SeasonSwitcher";
import { ThemeToggle } from "./components/ThemeToggle";
import { Button } from "./components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { motion } from "motion/react";
import { Toaster } from "./components/ui/sonner";
import { useTheme } from "next-themes";

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [season, setSeason] = useState<Season>(() => getSeason());

  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const targetId = hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      requestAnimationFrame(() => {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    const handleHashChange = () => {
      requestAnimationFrame(scrollToHash);
    };

    scrollToHash();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (showContactForm) {
    return (
      <div className="min-h-screen relative bg-background text-foreground">
        <AnimatedBackground />
        <SeasonalEffects season={season} />
        <SeasonSwitcher season={season} onSeasonChange={setSeason} />
        <div className="fixed top-4 z-50" style={{ left: '1rem' }}>
          <ThemeToggle />
        </div>
        <div className="fixed top-4 z-50" style={{ left: 'calc(1rem + 50px)' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={() => setShowContactForm(false)}
              className="bg-white/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/95 text-foreground"
              style={{
                backgroundColor: isDark ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
                color: isDark ? '#f1f5f9' : undefined,
              }}
              onMouseEnter={(e) => {
                if (isDark) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
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
    <div className="min-h-screen relative bg-background text-foreground">
      <AnimatedBackground />
      <SeasonalEffects season={season} />
      <SeasonSwitcher season={season} onSeasonChange={setSeason} />
      <div className="fixed top-4 z-50" style={{ left: '1rem' }}>
        <ThemeToggle />
      </div>
      <section id="hero" className="scroll-mt-24">
        <Hero onContactClick={() => setShowContactForm(true)} />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="books" className="scroll-mt-24">
        <Books />
      </section>
      <section id="articles" className="scroll-mt-24">
        <LinkedInArticles />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact onContactClick={() => setShowContactForm(true)} />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
      <Toaster />
    </div>
  );
}