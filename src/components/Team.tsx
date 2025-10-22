"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#014935]/10 to-[#327a3b]/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#327a3b]/10 to-[#014935]/20 rounded-full blur-3xl opacity-50" />

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
            <span className="text-[#014935] font-bold text-sm uppercase tracking-wider bg-[#327a3b]/10 px-4 py-2 rounded-full border-2 border-[#327a3b]/20">
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
              gradient: "from-[#014935] to-[#327a3b]",
            },
            {
              name: "Sarah Chen",
              role: "Vice President",
              gradient: "from-[#327a3b] to-[#014935]",
            },
            {
              name: "Mike Davis",
              role: "Technical Lead",
              gradient: "from-[#014935] to-[#327a3b]",
            },
            {
              name: "Emma Wilson",
              role: "Events Coordinator",
              gradient: "from-[#327a3b] to-[#014935]",
            },
            {
              name: "Alex Johnson",
              role: "President",
              gradient: "from-[#014935] to-[#327a3b]",
            },
            {
              name: "Sarah Chen",
              role: "Vice President",
              gradient: "from-[#327a3b] to-[#014935]",
            },
            {
              name: "Mike Davis",
              role: "Technical Lead",
              gradient: "from-[#014935] to-[#327a3b]",
            },
            {
              name: "Emma Wilson",
              role: "Events Coordinator",
              gradient: "from-[#327a3b] to-[#014935]",
            }
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
              <Card className="text-center border-2 border-transparent hover:border-[#327a3b]/30 transition-all group bg-gradient-to-br from-white to-[#014935]/5 overflow-hidden shadow-lg hover:shadow-2xl">
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
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#327a3b] rounded-full border-4 border-white flex items-center justify-center shadow-lg"
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

        {/* View Full Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/team">
            <Button
              size="lg"
              className="gradient-green text-white shadow-2xl hover:shadow-3xl transition-all glow-green text-lg px-8 py-6 group"
            >
              View Full Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
