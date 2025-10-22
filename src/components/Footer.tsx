"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#014935] text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#014935] via-[#327a3b] to-[#014935]" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 dashed-pattern" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-16 w-auto mb-4 inline-block"
            >
              <Image
                src="/Logo With White Text PNG.png"
                alt="BCC Logo"
                width={200}
                height={64}
                className="object-contain"
              />
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the future, one line of code at a time. Join us in our
              mission to foster innovation and collaboration.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-4 text-[#327a3b]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#327a3b] transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-4 text-[#327a3b]">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-[#327a3b]" />
                <span>bcc@baiust.edu.bd</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-[#327a3b]" />
                <span>+880 XXX-XXXXXX</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-[#327a3b] mt-1" />
                <span>BAIUST, Dhaka, Bangladesh</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-8 pb-8 border-b border-white/10"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#327a3b]/20 transition-all group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-[#327a3b] group-hover:text-[#327a3b]" />
            </motion.a>
          ))}
        </motion.div> */}

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BAIUST Computer Club. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
