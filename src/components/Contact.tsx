"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
      <div className="absolute inset-0 dashed-pattern" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-teal-400 to-green-500 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <span className="text-green-700 font-bold text-sm uppercase tracking-wider bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-green-300">
              Let&apos;s Connect
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="animated-gradient-text">Get In Touch</span>
          </h2>

          <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            Have questions? Want to join? We&apos;d love to hear from you!
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="gradient-green text-white shadow-2xl hover:shadow-3xl transition-all glow-green text-lg px-8 py-6"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {[
              {
                icon: Github,
                label: "GitHub",
                color: "from-gray-700 to-gray-900",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: Twitter,
                label: "Twitter",
                color: "from-sky-500 to-blue-600",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all`}
                >
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
