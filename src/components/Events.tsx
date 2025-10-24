"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Users, Trophy, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Events() {
  const bentoEvents = [
    {
      title: "Web Development Bootcamp",
      date: "Nov 15, 2025",
      description: "Learn modern web development with React, Next.js, and TypeScript. Build real-world projects.",
      gradient: "from-[#014935] to-[#327a3b]",
      icon: Code,
      size: "md:col-span-2 md:row-span-1",
      featured: true,
    },
    {
      title: "AI/ML Workshop",
      date: "Dec 1, 2025",
      description: "Introduction to Machine Learning and Neural Networks",
      gradient: "from-[#327a3b] to-[#014935]",
      icon: Trophy,
      size: "md:col-span-1 md:row-span-2",
    },
    {
      title: "Tech Talk Series",
      date: "Monthly",
      description: "Industry experts share insights",
      gradient: "from-[#014935] to-[#327a3b]",
      icon: Users,
      size: "md:col-span-1",
    },
    {
      title: "Engineering Adda",
      date: "Weekly",
      description: "Deepdive of engineering",
      gradient: "from-[#014935] to-[#327a3b]",
      icon: Users,
      size: "md:col-span-1",
    },
    {
      title: "Annual Hackathon",
      date: "Jan 20, 2026",
      description: "24-hour coding marathon with amazing prizes and networking opportunities",
      gradient: "from-[#327a3b] to-[#014935]",
      icon: Trophy,
      size: "md:col-span-2 md:row-span-1",
      featured: true,
    },
  ];

  return (
    <section id="events" className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-[#014935]/5 via-white to-[#327a3b]/5">
      <div className="absolute inset-0 dashed-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="text-[#014935] font-bold text-sm uppercase tracking-wider bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[#327a3b]/30">
              Coming Soon
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="animated-gradient-text">Upcoming Events</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us for workshops, hackathons, and tech talks throughout the year
          </p>
        </motion.div>

        {/* Bento Box Grid for Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {bentoEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`${event.size} group`}
              >
                <div className="relative h-full overflow-hidden rounded-3xl border-2 border-[#014935]/10 hover:border-[#327a3b]/30 transition-all bg-white shadow-lg hover:shadow-2xl">
                  {/* Top accent bar */}
                  <div className={`h-2 bg-gradient-to-r ${event.gradient}`} />
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 bg-gradient-to-br ${event.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#014935] bg-[#327a3b]/10 px-3 py-1.5 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </div>
                      </div>
                      
                      <h3 className={`${event.featured ? 'text-3xl' : 'text-xl'} font-bold mb-3 text-gray-900`}>
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    
                    {event.featured && (
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-[#014935] font-semibold text-sm mt-4 group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    )}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#327a3b]/10 to-transparent rounded-tr-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/events">
            <Button className="gradient-green text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg font-semibold group">
              View All Events
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
