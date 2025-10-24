import React from "react";
import { Card, CardContent } from "./ui/card";
import { ExternalLinkIcon, CalendarIcon, ThumbsUpIcon } from "lucide-react";
import { motion } from "motion/react";

const articles = [
  {
    title: "The Job You Thought You Did",
    excerpt: "Modern digital projects move too fast, touch too many systems, and demand too much business awareness for traditional boundaries to hold. The rise of AI and integrated tooling hasn't replaced your roles — it's compressed them.",
    date: "Oct 22, 2025",
    url: "https://www.linkedin.com/pulse/job-you-thought-did-peter-unsworth-4qc3e",
    likes: 2,
    category: "Career Development"
  },
  {
    title: "Are You Sabotaging Your Team's Success? The Shocking Truth About Trust and Leadership!",
    excerpt: "One of the greatest challenges leaders face is knowing when to step back. It's tempting to take control when things get tough, but doing the work for your team doesn't help them—or the project—in the long run.",
    date: "Oct 7, 2024",
    url: "https://www.linkedin.com/pulse/building-effective-team-importance-trust-thoughtful-peter-unsworth-7duqe",
    likes: 8,
    category: "Leadership"
  },
  {
    title: "Can Part-Time Startups Succeed? What It Takes to Reach Self-Sustainability",
    excerpt: "Starting a business is often considered a full-time commitment, but for many, pursuing entrepreneurship alongside an existing career is the only viable path to financial independence.",
    date: "Oct 22, 2024",
    url: "https://www.linkedin.com/pulse/can-part-time-startups-succeed-what-takes-reach-peter-unsworth-gly7e",
    likes: 9,
    category: "Entrepreneurship"
  },
  {
    title: "Why I'm Trusted!",
    excerpt: "In a world driven by metrics, deadlines, and bottom lines, trust remains the cornerstone of any successful business relationship. But what exactly makes someone trustworthy in a professional setting?",
    date: "Aug 12, 2024",
    url: "https://www.linkedin.com/pulse/why-im-trusted-peter-unsworth-sy2de",
    likes: 12,
    category: "Professional Development"
  }
];

export function LinkedInArticles() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-vibrant-teal to-vibrant-cyan rounded-full opacity-10 blur-xl"
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-vibrant-purple to-vibrant-orange rounded-full opacity-10 blur-xl"
        animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-vibrant-cyan to-vibrant-purple rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <ExternalLinkIcon className="h-6 w-6 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent">
              Latest Articles
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              Insights on leadership, entrepreneurship, and professional development. 
              Read my latest thoughts on building effective teams and navigating modern business challenges.
            </p>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 overflow-hidden group">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  {/* Category Badge */}
                  <motion.div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r from-vibrant-cyan to-vibrant-purple shadow-lg w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    {article.category}
                  </motion.div>
                  
                  {/* Article Content */}
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="text-xl text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span>{article.date}</span>
                        <div className="flex items-center gap-1">
                          <ThumbsUpIcon className="h-4 w-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  {/* Read More Link */}
                  <motion.a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-vibrant-cyan hover:text-vibrant-purple transition-colors group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">Read on LinkedIn</span>
                    <ExternalLinkIcon className="h-4 w-4 group-hover/link:rotate-45 transition-transform" />
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white/95 to-slate-50/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-0 space-y-4">
              <motion.div
                className="w-16 h-16 mx-auto bg-gradient-to-r from-vibrant-cyan to-vibrant-purple rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <ExternalLinkIcon className="h-8 w-8 text-white" />
              </motion.div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Follow for More Insights
                </h3>
                <p className="text-gray-600">
                  Connect with me on LinkedIn for regular updates on leadership, 
                  entrepreneurship, and professional development.
                </p>
              </div>
              
              <motion.a
                href="https://www.linkedin.com/in/peter-unsworth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-vibrant-cyan to-vibrant-purple text-white rounded-lg hover:from-vibrant-purple hover:to-vibrant-cyan transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLinkIcon className="h-5 w-5" />
                Connect on LinkedIn
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
