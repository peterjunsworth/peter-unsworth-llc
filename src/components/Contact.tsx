import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LinkedinIcon, MailIcon, ExternalLinkIcon, MessageCircleIcon, SparklesIcon } from "lucide-react";
import { motion } from "motion/react";

interface ContactProps {
  onContactClick: () => void;
}

export function Contact({ onContactClick }: ContactProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-vibrant-teal to-vibrant-cyan rounded-full opacity-20 blur-2xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-vibrant-purple to-vibrant-orange rounded-full opacity-20 blur-2xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-vibrant-cyan to-vibrant-teal rounded-full opacity-15 blur-xl"
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-vibrant-teal to-vibrant-cyan text-white text-sm mb-4 shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <SparklesIcon className="w-4 h-4 text-white" />
            Ready to Collaborate
            <SparklesIcon className="w-4 h-4 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-vibrant-teal via-vibrant-purple to-vibrant-orange bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your technical strategy, talent needs, or digital transformation? 
            I'm here to help bridge the gap between your business requirements and technical excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 h-full ring-1 ring-vibrant-teal">
              <CardHeader className="text-center">
                <motion.div 
                  className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r from-vibrant-teal to-vibrant-cyan flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MessageCircleIcon className="h-8 w-8 text-white" />
                </motion.div>
                <CardTitle className="text-vibrant-teal">Start a Conversation</CardTitle>
                <CardDescription className="text-gray-600">
                  Discuss your project requirements, talent needs, or strategic initiatives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    onClick={onContactClick}
                    className="w-full bg-gradient-to-r from-vibrant-teal to-vibrant-cyan hover:from-vibrant-teal-dark hover:to-vibrant-cyan-dark text-white border-0 transition-all duration-300 shadow-lg" 
                    size="lg"
                  >
                    <MailIcon className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://www.linkedin.com/in/peterjunsworth/', '_blank')}
                    className="w-full border-2 border-vibrant-purple hover:border-vibrant-purple hover:text-vibrant-purple transition-all duration-300" 
                    size="lg"
                  >
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 h-full ring-1 ring-vibrant-purple">
              <CardHeader className="text-center">
                <motion.div 
                  className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r from-vibrant-purple to-vibrant-orange flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ExternalLinkIcon className="h-8 w-8 text-white" />
                </motion.div>
                <CardTitle className="text-vibrant-purple">Explore Our Ventures</CardTitle>
                <CardDescription className="text-gray-600">
                  Learn more about our specialized services and solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://frontedgedigital.com', '_blank')}
                    className="w-full justify-between border-2 border-vibrant-orange hover:border-vibrant-orange hover:text-vibrant-orange transition-all duration-300" 
                    size="lg"
                  >
                    Front Edge Digital
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://devsforcode.com', '_blank')}
                    className="w-full justify-between border-2 border-vibrant-teal hover:border-vibrant-teal hover:text-vibrant-teal transition-all duration-300" 
                    size="lg"
                  >
                    Dev's For Code
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-xl ring-1 ring-vibrant-cyan">
            <CardContent className="p-0">
              <h3 className="text-xl lg:text-2xl mb-3 bg-gradient-to-r from-vibrant-cyan to-vibrant-teal bg-clip-text text-transparent">Professional Network</h3>
              <p className="text-gray-600 mb-6">
                Connect with me on LinkedIn to stay updated on industry insights, 
                technical strategies, and talent opportunities.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.open('https://www.linkedin.com/in/peterunsworth/', '_blank')}
                  className="px-8 border-2 border-vibrant-cyan hover:border-vibrant-cyan hover:text-vibrant-cyan hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn: @peterunsworth
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}