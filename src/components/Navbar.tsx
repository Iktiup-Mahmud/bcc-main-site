"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-green-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-16 w-auto"
            >
              <Image
                src="/Logo With Black Text PNG.png"
                alt="BCC Logo"
                width={180}
                height={64}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          <div className="hidden md:flex gap-10">
            {[
              { href: "#about", label: "About" },
              { href: "#events", label: "Events" },
              { href: "#team", label: "Team" },
              { href: "#contact", label: "Contact" },
            ].map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-lg relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button className="gradient-green text-white shadow-lg hover:shadow-xl transition-all px-6 py-5 text-base font-semibold">
              Join Us
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
