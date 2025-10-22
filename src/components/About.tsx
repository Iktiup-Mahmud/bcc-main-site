"use client";

import { motion } from "framer-motion";
import { Code2, Users, Trophy } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30" />

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
            <span className="text-green-600 font-bold text-sm uppercase tracking-wider bg-green-100 px-4 py-2 rounded-full">
              Our Mission
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="animated-gradient-text">What We Do</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We foster innovation, collaboration, and learning through various
            activities and programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "Coding Workshops",
              description:
                "Regular workshops on latest technologies, programming languages, and development tools",
              color: "from-green-400 to-emerald-500",
            },
            {
              icon: Users,
              title: "Community",
              description:
                "Connect with like-minded peers, share knowledge, and collaborate on exciting projects",
              color: "from-emerald-400 to-teal-500",
            },
            {
              icon: Trophy,
              title: "Competitions",
              description:
                "Participate in hackathons, coding challenges, and tech competitions",
              color: "from-teal-400 to-cyan-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="relative overflow-hidden border-2 border-transparent hover:border-green-300 transition-all group h-full bg-gradient-to-br from-white to-green-50/30">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                <CardHeader className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl mb-3 text-gray-900">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
