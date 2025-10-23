"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Calendar, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About", icon: Home },
    { href: "#events", label: "Events", icon: Calendar },
    { href: "#team", label: "Team", icon: Users },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-[#014935]/20 shadow-lg">
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

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10">
              {menuItems.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 hover:text-[#014935] transition-colors font-medium text-lg relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#014935] to-[#327a3b] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Desktop Join Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <Button className="gradient-green text-white shadow-lg hover:shadow-xl transition-all px-6 py-5 text-base font-semibold">
                Join Us
              </Button>
            </motion.div>

            {/* Mobile - Show Join Button Only */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:hidden"
            >
              <Button className="gradient-green text-white shadow-lg hover:shadow-xl transition-all px-4 py-2 text-sm font-semibold">
                Join Us
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Dock Navigation - Glassmorphism */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="md:hidden fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="relative">
          {/* Glassmorphism Container */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-[1.5rem] shadow-[0_8px_32px_rgba(1,73,53,0.2)] border border-white/30 px-3 py-2.5">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-[1.5rem]" />
            
            <div className="relative flex items-center justify-center gap-2.5">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 0.6 + index * 0.08, 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17 
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                    aria-label={item.label}
                  >
                    {/* Icon Container */}
                    <div className="relative">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#014935] to-[#327a3b] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                        <Icon className="w-5 h-5 text-white relative z-10" />
                      </div>
                      {/* Active indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#327a3b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                      <div className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                        {item.label}
                        {/* Arrow */}
                        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rotate-45" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
