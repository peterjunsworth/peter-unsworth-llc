import React from "react";
import { Card, CardContent } from "./ui/card";
import { BookOpenIcon, StarIcon, QuoteIcon } from "lucide-react";
import { motion } from "motion/react";

const books = [
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    description: "A memoir about building Nike from the ground up - a testament to perseverance and vision.",
    category: "Entrepreneurship",
    color: "from-vibrant-teal to-vibrant-cyan"
  },
  {
    title: "A Ride of a Lifetime", 
    author: "Bob Iger",
    description: "Leadership lessons from Disney's former CEO on navigating change and innovation.",
    category: "Leadership",
    color: "from-vibrant-orange to-vibrant-orange-light"
  },
  {
    title: "Green Lights",
    author: "Matthew McConaughey", 
    description: "Life philosophy and wisdom about turning obstacles into opportunities.",
    category: "Personal Growth",
    color: "from-vibrant-purple to-vibrant-purple-light"
  },
  {
    title: "Upstarts",
    author: "Brad Stone",
    description: "The story of Uber, Airbnb and how technology is changing everything.",
    category: "Technology",
    color: "from-vibrant-cyan to-vibrant-teal"
  },
  {
    title: "A Walk In The Woods",
    author: "Bill Bryson",
    description: "Rediscovering America on the Appalachian Trail.",
    category: "Discovery", 
    color: "from-vibrant-teal to-vibrant-orange"
  },
  {
    title: "Originals",
    author: "Adam Grant",
    description: "How nonconformists move the world through innovative thinking.",
    category: "Innovation",
    color: "from-vibrant-orange to-vibrant-purple"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    description: "A powerful memoir about growth, resilience, and finding your voice.",
    category: "Inspiration",
    color: "from-vibrant-purple to-vibrant-cyan"
  },
  {
    title: "A Promised Land",
    author: "Barack Obama",
    description: "Presidential memoirs offering insights into leadership during challenging times.",
    category: "Leadership",
    color: "from-vibrant-cyan to-vibrant-orange"
  }
];

export function Books() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50/30" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-vibrant-purple to-vibrant-teal rounded-full opacity-10 blur-xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-vibrant-orange to-vibrant-cyan rounded-full opacity-10 blur-xl"
        animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
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
              className="w-12 h-12 bg-gradient-to-r from-vibrant-teal to-vibrant-purple rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpenIcon className="h-6 w-6 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent">
              Recommended Reading
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              Books that have shaped my perspective on business, leadership, and life. 
              These carefully selected reads offer insights that transcend industries and inspire personal growth.
            </p>
            
            <motion.div 
              className="flex items-center justify-center gap-2 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <QuoteIcon className="h-4 w-4" />
              <span className="italic">Personal recommendations from Peter Unsworth</span>
              <QuoteIcon className="h-4 w-4 rotate-180" />
            </motion.div>
          </div>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 overflow-hidden group">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  {/* Category Badge */}
                  <motion.div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs text-white bg-gradient-to-r ${book.color} shadow-lg w-fit`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <StarIcon className="h-3 w-3 mr-1" />
                    {book.category}
                  </motion.div>
                  
                  {/* Book Cover Placeholder */}
                  <motion.div 
                    className={`w-full h-32 bg-gradient-to-br ${book.color} rounded-lg shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <BookOpenIcon className="h-8 w-8 text-white/80" />
                  </motion.div>
                  
                  {/* Book Info */}
                  <div className="space-y-3 flex-grow">
                    <div>
                      <h3 className="text-lg text-gray-800 group-hover:text-gray-900 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-500">by {book.author}</p>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      {book.description}
                    </p>
                  </div>
                  
                  {/* Read More Indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Highly recommended</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-3 w-3 fill-vibrant-orange text-vibrant-orange" />
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
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
                className="w-16 h-16 mx-auto bg-gradient-to-r from-vibrant-teal to-vibrant-purple rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <QuoteIcon className="h-8 w-8 text-white" />
              </motion.div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                "Reading is not just about gaining knowledge—it's about expanding perspectives, 
                challenging assumptions, and building the mental frameworks that drive innovation 
                and strategic thinking."
              </blockquote>
              
              <cite className="text-sm text-gray-500 not-italic">
                — Peter Unsworth
              </cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}