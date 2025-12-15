import React from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLinkIcon, Building2Icon, Code2Icon, UsersIcon } from "lucide-react";
import { motion } from "motion/react";

// Import images as modules
import puImage from "../assets/images/pu.jpeg";
import fedImage from "../assets/images/fed.jpg";

const services = [
  {
    title: "Peter Unsworth LLC",
    description: "Technical Strategy & Consulting",
    image: puImage,
    icon: Building2Icon,
    gradient: "from-slate-700 to-slate-800 dark:from-slate-200 dark:to-slate-300",
    vibrantGradient: "from-vibrant-teal to-vibrant-cyan",
    accentColor: "text-vibrant-teal",
    bgGradient: "bg-transparent",
    features: [
      "Technical Strategy",
      "Business Requirements Analysis", 
      "Talent Recruitment",
      "Onshore & Offshore Teams",
      "Budget Optimization"
    ],
    details: "Strategic consulting that aligns technical solutions with business objectives, plus comprehensive talent acquisition services to build high-performing teams within budget constraints."
  },
  {
    title: "Front Edge Digital",
    description: "Digital Innovation & Solutions",
    image: fedImage,
    icon: Code2Icon,
    website: "frontedgedigital.com",
    gradient: "from-gray-600 to-slate-700 dark:from-gray-300 dark:to-slate-400",
    vibrantGradient: "from-vibrant-orange to-vibrant-orange-light",
    accentColor: "text-vibrant-orange",
    bgGradient: "bg-transparent",
    features: [
      "Digital Transformation",
      "Web Development",
      "Mobile Solutions",
      "Cloud Integration",
      "Technology Consulting"
    ],
    details: "Cutting-edge digital solutions that drive business growth through innovative technology implementations and strategic digital transformation initiatives."
  },
  {
    title: "Dev's For Code",
    description: "Developer Talent & Expertise",
    image: "https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTkzNTAzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: UsersIcon,
    website: "devsforcode.com",
    gradient: "from-slate-600 to-gray-700 dark:from-slate-400 dark:to-gray-300",
    vibrantGradient: "from-vibrant-purple to-vibrant-purple-light",
    accentColor: "text-vibrant-purple",
    bgGradient: "bg-transparent",
    features: [
      "Software Development",
      "Technical Recruitment", 
      "Team Augmentation",
      "Code Review & Mentoring",
      "Project Delivery"
    ],
    details: "Staff augmentation specialists providing flexible, scalable development teams including full-stack developers, UI/UX designers, and DevOps engineers to enhance company scalability and accelerate project delivery."
  }
];

export function Services() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className="py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900 dark:bg-slate-50" />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-800 dark:text-slate-100">
            Services & Companies
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto">
            Three focused ventures delivering comprehensive technical solutions, 
            strategic consulting, and talent acquisition services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <div className={`h-full rounded-xl border-0 dark:border-slate-700 ${service.bgGradient} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 flex flex-col gap-6`}>
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`} />
                  </div>
                  
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} hover:from-vibrant-teal hover:to-vibrant-cyan text-white dark:text-slate-900 shadow-lg transition-all duration-300`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="h-6 w-6" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl" style={{ color: isDark ? '#ffffff' : '#1f2937' }}>
                          {service.title}
                        </CardTitle>
                        {service.website && (
                          <div className={`flex items-center gap-1 text-sm mt-1 ${service.accentColor} dark:text-white hover:opacity-75 transition-opacity`}>
                            <ExternalLinkIcon className="h-3 w-3" />
                            {service.website}
                          </div>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-base" style={{ color: isDark ? '#ffffff' : '#4b5563' }}>
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed" style={{ color: isDark ? '#ffffff' : '#4b5563' }}>
                      {service.details}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`text-xs bg-gradient-to-r ${service.vibrantGradient} text-white dark:text-slate-900 border-0 hover:scale-105 transition-transform shadow-md`}
                          >
                            {feature}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}