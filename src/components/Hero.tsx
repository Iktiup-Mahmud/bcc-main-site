"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Users,
  Calendar,
  Trophy,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-white">
      {/* Dashed pattern overlay */}
      <div className="absolute inset-0 dashed-pattern" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-green-500/30 to-teal-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-green-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-green-200 px-5 py-2.5 rounded-full mb-8 shadow-lg glow-green"
          >
            <Sparkles className="w-5 h-5 text-[#34793B] animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Welcome to Innovation Hub
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="block animated-gradient-text mb-2 text-[#34793B]"
            >
              BAIUST
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="block text-gray-900"
            >
              Computer Club
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Join our vibrant community of{" "}
            <span className="text-green-600 font-bold">tech enthusiasts</span>,{" "}
            <span className="text-green-600 font-bold">coders</span>, and{" "}
            <span className="text-green-600 font-bold">innovators</span>.
            <br />
            Learn, build, and grow together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="gradient-green text-white group text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all glow-green"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-700 hover:bg-green-50 text-lg px-8 py-6 shadow-lg"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating code elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-xl border border-green-200">
          <Code2 className="w-8 h-8 text-green-600" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-10 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-xl border border-green-200">
          <Trophy className="w-8 h-8 text-green-600" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-20 hidden xl:block"
      >
        <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-green-200">
          <span className="text-green-600 font-mono text-sm">&lt;/&gt;</span>
        </div>
      </motion.div>
    </section>
  );
}
