"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-teal-200 to-green-300 rounded-full blur-3xl opacity-20" />

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
              Leadership
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="animated-gradient-text">Our Team</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Meet the passionate individuals behind the club
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "President",
              gradient: "from-green-400 to-emerald-500",
            },
            {
              name: "Sarah Chen",
              role: "Vice President",
              gradient: "from-emerald-400 to-teal-500",
            },
            {
              name: "Mike Davis",
              role: "Technical Lead",
              gradient: "from-teal-400 to-cyan-500",
            },
            {
              name: "Emma Wilson",
              role: "Events Coordinator",
              gradient: "from-cyan-400 to-green-500",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 1000 }}
            >
              <Card className="text-center border-2 border-transparent hover:border-green-300 transition-all group bg-gradient-to-br from-white to-green-50/30 overflow-hidden">
                <CardHeader className="relative">
                  <div className="relative mx-auto mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-32 h-32 mx-auto bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20" />
                      <Users className="w-16 h-16 text-white relative z-10" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">✓</span>
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl mb-2 text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription
                    className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                  >
                    {member.role}
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
