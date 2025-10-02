import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MailIcon, SendIcon, CheckCircleIcon, AlertCircleIcon, MessageCircleIcon } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use development server URL in development, Vercel API route in production
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3002/api/send-email'
        : '/api/send-email';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      const result = await response.json();
      
      toast.success("Message sent successfully! I'll get back to you within 24 hours.", {
        icon: <CheckCircleIcon className="w-4 h-4" />,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        serviceType: ''
      });
    } catch (error) {
      console.error('Email sending error:', error);
      toast.error("Failed to send message. Please try again or email me directly.", {
        icon: <AlertCircleIcon className="w-4 h-4" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 px-4 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full opacity-5 blur-2xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full opacity-5 blur-2xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 text-white text-sm shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <MessageCircleIcon className="w-4 h-4" />
            Let's Start a Conversation
            <MessageCircleIcon className="w-4 h-4" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your technical strategy, talent needs, or digital transformation? 
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <MailIcon className="w-5 h-5 text-slate-600" />
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Please provide details about your project or inquiry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        required
                        className="border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Your company name"
                        className="border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Interest</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
                        <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-200">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical-strategy" className="text-slate-700 hover:text-slate-900 focus:text-slate-900">Technical Strategy & Consulting</SelectItem>
                          <SelectItem value="talent-recruitment" className="text-slate-700 hover:text-slate-900 focus:text-slate-900">Talent Recruitment</SelectItem>
                          <SelectItem value="team-augmentation" className="text-slate-700 hover:text-slate-900 focus:text-slate-900">Team Augmentation</SelectItem>
                          <SelectItem value="digital-transformation" className="text-slate-700 hover:text-slate-900 focus:text-slate-900">Digital Transformation</SelectItem>
                          <SelectItem value="front-edge-digital" className="text-slate-700 hover:text-slate-900 focus:text-slate-900">Front Edge Digital Services</SelectItem>
                          <SelectItem value="devs-for-code" className="text-slate-700 hover:text-slate-900 focus:text-slate-900">Dev's For Code Solutions</SelectItem>
                          <SelectItem value="other" className="text-slate-700 hover:text-slate-900 focus:text-slate-900">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Brief subject line"
                      required
                      className="border-slate-200 focus:border-slate-400 focus:ring-slate-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Please describe your project, requirements, or inquiry in detail..."
                      required
                      rows={6}
                      className="border-slate-200 focus:border-slate-400 focus:ring-slate-200 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white border-0"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <SendIcon className="mr-2 h-4 w-4" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-800">Direct Contact</CardTitle>
                <CardDescription>
                  Prefer a more direct approach? Reach out via these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                  <MailIcon className="w-5 h-5 text-slate-600" />
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-sm text-slate-700">peter@peter-unsworth.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                  <div className="w-5 h-5 rounded bg-slate-600 flex items-center justify-center">
                    <span className="text-white text-xs">in</span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">LinkedIn</div>
                    <div className="text-sm text-slate-700">@peterunsworth</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-800">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Typically respond within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Available for urgent consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Free initial consultation calls</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-800">My Companies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <motion.a 
                  href="https://frontedgedigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-slate-700">Front Edge Digital</div>
                  <div className="text-xs text-slate-500">Digital Solutions & Strategy</div>
                </motion.a>
                <motion.a 
                  href="https://devsforcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-slate-700">Dev's For Code</div>
                  <div className="text-xs text-slate-500">Developer Talent & Teams</div>
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}