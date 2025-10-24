"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, Sparkles, Code, Trophy, Zap, BookOpen, Rocket, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EventsPage() {
  const allEvents = [
    {
      title: "Web Development Bootcamp",
      date: "Nov 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium, Room 301",
      description: "Master modern web development with React, Next.js, and TypeScript. Build real-world projects from scratch with hands-on guidance from industry professionals.",
      longDescription: "This intensive bootcamp covers everything from basics to advanced topics including server components, API routes, authentication, and deployment. Perfect for beginners and intermediate developers.",
      gradient: "from-[#014935] to-[#327a3b]",
      icon: Code,
      attendees: "150+ registered",
      spots: "200 total spots",
      level: "Beginner to Intermediate",
      prerequisites: "Basic HTML/CSS knowledge",
      featured: true,
      category: "Workshop",
    },
    {
      title: "AI/ML Workshop Series",
      date: "Dec 1-3, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Lab 204",
      description: "Deep dive into Machine Learning and Neural Networks. Learn TensorFlow, PyTorch, and build your first AI models.",
      longDescription: "A comprehensive 3-day workshop covering supervised learning, deep learning, neural networks, and practical ML applications. Includes hands-on projects and real datasets.",
      gradient: "from-[#327a3b] to-[#014935]",
      icon: Brain,
      attendees: "80+ registered",
      spots: "100 total spots",
      level: "Intermediate",
      prerequisites: "Python programming experience",
      featured: true,
      category: "Workshop",
    },
    {
      title: "Annual Hackathon 2026",
      date: "Jan 20-21, 2026",
      time: "24 Hours Non-stop",
      location: "Campus Wide - Multiple Venues",
      description: "24-hour coding marathon with amazing prizes, mentorship, and networking opportunities. Build innovative solutions to real-world problems.",
      longDescription: "Team up with fellow developers, designers, and innovators to create amazing projects. Amazing prizes worth $10,000+, free meals, swag, and mentorship from industry leaders.",
      gradient: "from-[#014935] via-[#327a3b] to-[#014935]",
      icon: Trophy,
      attendees: "300+ expected",
      spots: "500 total spots",
      level: "All Levels Welcome",
      prerequisites: "Team of 2-4 members",
      featured: true,
      category: "Competition",
    },
    {
      title: "Tech Talk: Cloud Architecture",
      date: "Nov 8, 2025",
      time: "5:00 PM - 6:30 PM",
      location: "Auditorium B",
      description: "Industry expert shares insights on modern cloud architecture, microservices, and scalable systems.",
      longDescription: "Learn from a senior cloud architect at a Fortune 500 company about designing scalable, resilient cloud-native applications.",
      gradient: "from-[#327a3b] to-[#014935]",
      icon: Rocket,
      attendees: "200+ subscribers",
      spots: "300 seats",
      level: "All Levels",
      prerequisites: "None",
      category: "Tech Talk",
    },
    {
      title: "Mobile App Development",
      date: "Nov 22, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Lab 103",
      description: "Build cross-platform mobile apps with React Native. Deploy to iOS and Android from a single codebase.",
      longDescription: "Learn React Native fundamentals, navigation, state management, and app deployment. Build a complete mobile app during the workshop.",
      gradient: "from-[#014935] to-[#327a3b]",
      icon: Code,
      attendees: "60+ registered",
      spots: "80 total spots",
      level: "Intermediate",
      prerequisites: "React.js knowledge",
      category: "Workshop",
    },
    {
      title: "Cybersecurity Fundamentals",
      date: "Dec 10, 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Security Lab 205",
      description: "Learn essential cybersecurity concepts, ethical hacking, and how to protect web applications.",
      longDescription: "Hands-on workshop covering OWASP Top 10, penetration testing basics, secure coding practices, and network security fundamentals.",
      gradient: "from-[#327a3b] to-[#014935]",
      icon: Zap,
      attendees: "70+ registered",
      spots: "100 total spots",
      level: "Beginner to Intermediate",
      prerequisites: "Basic programming knowledge",
      category: "Workshop",
    },
    {
      title: "Tech Talk: Career in Tech",
      date: "Nov 29, 2025",
      time: "4:00 PM - 5:30 PM",
      location: "Online via Zoom",
      description: "Alumni panel discussion about career paths, job hunting, and succeeding in the tech industry.",
      longDescription: "Hear from successful alumni working at top tech companies about their journey, tips for interviews, resume building, and career growth.",
      gradient: "from-[#014935] to-[#327a3b]",
      icon: Users,
      attendees: "150+ subscribers",
      spots: "Unlimited (Online)",
      level: "All Levels",
      prerequisites: "None",
      category: "Tech Talk",
    },
    {
      title: "DevOps & CI/CD Workshop",
      date: "Dec 15, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Lab 301",
      description: "Learn DevOps practices, Docker, Kubernetes, and CI/CD pipelines with GitHub Actions.",
      longDescription: "Master containerization, orchestration, automated testing, and deployment pipelines. Set up complete DevOps workflow for your projects.",
      gradient: "from-[#327a3b] to-[#014935]",
      icon: Rocket,
      attendees: "50+ registered",
      spots: "60 total spots",
      level: "Intermediate to Advanced",
      prerequisites: "Git and command line experience",
      category: "Workshop",
    },
    {
      title: "UI/UX Design Workshop",
      date: "Jan 5, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "Design Studio 102",
      description: "Learn design principles, prototyping with Figma, and create beautiful user interfaces.",
      longDescription: "Comprehensive workshop on design thinking, user research, wireframing, prototyping, and usability testing. Build a complete design system.",
      gradient: "from-[#014935] to-[#327a3b]",
      icon: BookOpen,
      attendees: "40+ registered",
      spots: "50 total spots",
      level: "Beginner",
      prerequisites: "None",
      category: "Workshop",
    },
  ];

  const categories = ["All", "Workshop", "Tech Talk", "Competition"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredEvents = selectedCategory === "All" 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#014935]/5 via-white to-[#327a3b]/5">
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 dashed-pattern opacity-20" />
        
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#327a3b]/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block mb-6"
            >
              <span className="text-[#014935] font-bold text-sm uppercase tracking-wider bg-white/80 backdrop-blur-sm px-6 py-2.5 rounded-full border-2 border-[#327a3b]/30 shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                All Events
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="animated-gradient-text">Upcoming Events</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Join us for workshops, hackathons, tech talks, and more. Expand your skills and connect with the community.
            </p>

            {/* Back to Home */}
            <Link href="/">
              <Button variant="outline" className="group border-2 border-[#014935]/20 hover:border-[#327a3b]/40">
                ← Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#014935] to-[#327a3b] text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#327a3b]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group ${event.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border-2 border-[#014935]/10 hover:border-[#327a3b]/40 transition-all duration-300 bg-white shadow-xl hover:shadow-2xl">
                    {/* Top Accent Bar */}
                    <div className="relative h-2 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient}`} />
                      <motion.div
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      />
                    </div>

                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative p-6 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.7, type: "spring" }}
                          className={`w-14 h-14 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>

                        <span className="text-xs font-bold text-white bg-gradient-to-r from-[#014935] to-[#327a3b] px-3 py-1.5 rounded-full">
                          {event.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-black mb-3 text-gray-900 leading-tight">
                        {event.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[#327a3b]" />
                          <span className="font-semibold">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-[#327a3b]" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-[#327a3b]" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-[#327a3b]/5 rounded-xl p-3">
                          <p className="text-xs text-gray-500 mb-1">Level</p>
                          <p className="text-xs font-bold text-gray-900">{event.level}</p>
                        </div>
                        <div className="bg-[#327a3b]/5 rounded-xl p-3">
                          <p className="text-xs text-gray-500 mb-1">Attendees</p>
                          <p className="text-xs font-bold text-gray-900">{event.attendees}</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full mt-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${event.gradient} text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all group/btn`}
                      >
                        {event.featured ? "Register Now" : "Learn More"}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Decorative Corners */}
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#327a3b]/20 to-transparent rounded-tr-full" />
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#014935]/10 to-transparent rounded-bl-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-[#014935] to-[#327a3b] rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 dashed-pattern opacity-10" />
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-black text-white mb-4">
                  Never Miss an Event
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get notified about upcoming events, workshops, and exclusive opportunities.
                </p>
                <Button className="bg-white text-[#014935] hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-xl shadow-xl">
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Add missing React import
import React from "react";
