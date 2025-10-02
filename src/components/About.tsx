import React from "react";
import { Card, CardContent } from "./ui/card";
import { CheckCircleIcon, TrendingUpIcon, UsersIcon, Globe } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: TrendingUpIcon,
    title: "Strategic Excellence",
    description: "Bridging business requirements with cutting-edge technical solutions"
  },
  {
    icon: UsersIcon,
    title: "Talent Acquisition",
    description: "Connecting organizations with world-class technical talent"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Onshore, nearshore, and offshore recruitment capabilities"
  },
  {
    icon: CheckCircleIcon,
    title: "Budget Optimization",
    description: "Delivering maximum value while adhering to budgetary constraints"
  }
];

export function About() {
  const gradients = [
    "from-vibrant-teal to-vibrant-cyan",
    "from-vibrant-orange to-vibrant-orange-light", 
    "from-vibrant-purple to-vibrant-purple-light",
    "from-vibrant-cyan to-vibrant-teal"
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-vibrant-teal to-vibrant-orange rounded-full opacity-10 blur-xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent">
            About Peter Unsworth
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With extensive experience at the intersection of technology and business, 
            I specialize in creating strategic solutions that drive organizational growth 
            while building high-performing technical teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 h-full">
                  <CardContent className="space-y-4 p-0">
                    <motion.div 
                      className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${gradients[index]} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-lg text-gray-800">{highlight.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="space-y-6 p-0">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl mb-4 bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">Professional Focus</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">Technical Strategy & Consulting</h4>
                  <p className="text-gray-600 leading-relaxed">
                    I help organizations navigate complex technical decisions by aligning 
                    technology initiatives with business objectives. My approach ensures 
                    that technical solutions drive real business value and sustainable growth.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg bg-gradient-to-r from-gray-700 to-slate-800 bg-clip-text text-transparent">Talent Recruitment Excellence</h4>
                  <p className="text-gray-600 leading-relaxed">
                    I connect organizations with exceptional 
                    technical talent across global markets. Whether you need onshore expertise, 
                    cost-effective nearshore solutions, or offshore development teams, 
                    I ensure the right fit for your budget and requirements.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}