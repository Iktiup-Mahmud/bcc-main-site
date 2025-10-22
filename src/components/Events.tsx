"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Events() {
  return (
    <section id="events" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-40" />
      <div className="absolute inset-0 dashed-pattern" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="text-green-700 font-bold text-sm uppercase tracking-wider bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-green-300">
              Coming Soon
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Upcoming Events</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Web Development Bootcamp",
              date: "Nov 15, 2025",
              description:
                "Learn modern web development with React and Next.js",
              gradient: "from-green-500 to-emerald-600",
              bgGradient: "from-green-50 to-emerald-50",
            },
            {
              title: "AI/ML Workshop",
              date: "Dec 1, 2025",
              description:
                "Introduction to Machine Learning and Neural Networks",
              gradient: "from-emerald-500 to-teal-600",
              bgGradient: "from-emerald-50 to-teal-50",
            },
            {
              title: "Annual Hackathon",
              date: "Jan 20, 2026",
              description: "24-hour coding marathon with amazing prizes",
              gradient: "from-teal-500 to-cyan-600",
              bgGradient: "from-teal-50 to-cyan-50",
            },
            {
              title: "Tech Talk Series",
              date: "Monthly",
              description: "Industry experts share insights and experiences",
              gradient: "from-cyan-500 to-green-600",
              bgGradient: "from-cyan-50 to-green-50",
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card
                className={`overflow-hidden border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br ${event.bgGradient} backdrop-blur-sm`}
              >
                <div className={`h-2 bg-gradient-to-r ${event.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="mb-3 text-2xl text-gray-900">
                        {event.title}
                      </CardTitle>
                      <div
                        className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent mb-3`}
                      >
                        <Calendar className="w-5 h-5 text-green-600" />
                        {event.date}
                      </div>
                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className={`w-full bg-gradient-to-r ${event.gradient} text-white border-0 hover:opacity-90 transition-opacity shadow-lg text-base py-6`}
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
