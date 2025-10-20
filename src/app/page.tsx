"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  Code2,
  Users,
  Calendar,
  Trophy,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-green-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Code2 className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-2xl font-black animated-gradient-text">
                BCC
              </span>
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

      {/* Hero Section */}
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
              <Sparkles className="w-5 h-5 text-green-600 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Welcome to Innovation Hub
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block animated-gradient-text mb-2"
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
              <span className="text-green-600 font-bold">tech enthusiasts</span>
              , <span className="text-green-600 font-bold">coders</span>, and{" "}
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

      {/* About Section */}
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

      {/* Events Section */}
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

      {/* Team Section */}
      <section
        id="team"
        className="py-24 px-4 bg-white relative overflow-hidden"
      >
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

      {/* Contact Section */}
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

      {/* Footer */}
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
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                University Computer Club
              </span>
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
                © 2025 University Computer Club. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
