"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-16 w-auto"
            >
              <Image
                src="/Logo With Black Text PNG.png"
                alt="BCC Logo"
                width={200}
                height={64}
                className="object-contain brightness-0 invert"
              />
            </motion.div>
          </div>

          <p className="text-gray-300 mb-6 text-lg font-medium">
            Building the future, one line of code at a time
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <social.icon className="w-5 h-5 text-green-400" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-sm text-gray-400">
              © 2025 BAIUST Computer Club. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
