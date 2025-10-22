"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Github,
  Award,
  Code,
  Trophy,
  Shield,
  Users,
  Megaphone,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Team structure organized by panels
const teamStructure = {
  advisoryPanel: {
    title: "Advisory Panel",
    icon: Shield,
    description: "Guiding the club with wisdom and experience",
    members: [
      {
        name: "Dr. Mohammad Rahman",
        role: "Faculty Advisor",
        department: "Computer Science",
        year: "Professor",
        bio: "Guiding students in their journey of innovation and research.",
        skills: ["AI Research", "Mentorship", "Academic Leadership"],
        gradient: "from-[#014935] to-[#327a3b]",
        achievements: ["20+ years of teaching", "Published 50+ papers"],
        social: {
          email: "rahman@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
      {
        name: "Prof. Ayesha Khan",
        role: "Co-Advisor",
        department: "Software Engineering",
        year: "Associate Professor",
        bio: "Inspiring the next generation of software engineers.",
        skills: ["Software Architecture", "Project Management", "Innovation"],
        gradient: "from-[#327a3b] to-[#014935]",
        achievements: ["Industry Expert", "Mentor of 100+ students"],
        social: {
          email: "ayesha@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
    ],
  },
  executive: {
    title: "Executive Committee",
    icon: Award,
    description: "Leading the club with vision and dedication",
    members: [
      {
        name: "Alex Johnson",
        role: "President",
        department: "Computer Science",
        year: "4th Year",
        bio: "Passionate about AI and Machine Learning. Leading the club with innovative ideas.",
        skills: ["Python", "Machine Learning", "Leadership"],
        gradient: "from-[#014935] to-[#327a3b]",
        achievements: [
          "Won National Hackathon 2024",
          "Published 2 Research Papers",
        ],
        social: {
          email: "alex@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
      {
        name: "Sarah Chen",
        role: "General Secretary (GS)",
        department: "Software Engineering",
        year: "3rd Year",
        bio: "Full-stack developer ensuring smooth club operations.",
        skills: ["React", "Node.js", "Administration"],
        gradient: "from-[#327a3b] to-[#014935]",
        achievements: ["Led 5+ successful workshops", "Organized 10+ events"],
        social: {
          email: "sarah@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
      {
        name: "Mike Davis",
        role: "Deputy General Secretary",
        department: "Computer Science",
        year: "3rd Year",
        bio: "Supporting operations and managing club activities efficiently.",
        skills: ["Project Management", "Communication", "Organization"],
        gradient: "from-[#014935] to-[#327a3b]",
        achievements: ["Event Coordinator", "Team Builder"],
        social: {
          email: "mike@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
    ],
  },
  technical: {
    title: "Technical Team",
    icon: Code,
    description: "Building and innovating with technology",
    members: [
      {
        name: "David Kumar",
        role: "Technical Lead",
        department: "Software Engineering",
        year: "3rd Year",
        bio: "System architect and competitive programmer. Mentor for technical workshops.",
        skills: ["C++", "Algorithms", "System Design"],
        gradient: "from-[#014935] to-[#327a3b]",
        achievements: ["ICPC Regional Finalist", "Codeforces Expert"],
        social: {
          email: "david@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
      {
        name: "Lisa Anderson",
        role: "Web Development Head",
        department: "Computer Science",
        year: "2nd Year",
        bio: "Frontend specialist crafting beautiful and responsive web experiences.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
        gradient: "from-[#327a3b] to-[#014935]",
        achievements: [
          "Built 20+ production websites",
          "Open Source Contributor",
        ],
        social: {
          email: "lisa@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
      {
        name: "Sophia Martinez",
        role: "App Development Head",
        department: "Software Engineering",
        year: "3rd Year",
        bio: "Mobile app developer building cross-platform applications.",
        skills: ["Flutter", "React Native", "Firebase"],
        gradient: "from-[#014935] to-[#327a3b]",
        achievements: ["Published 5 apps", "50K+ downloads"],
        social: {
          email: "sophia@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
    ],
  },
  pr: {
    title: "Public Relations",
    icon: Megaphone,
    description: "Connecting with the community and spreading the word",
    members: [
      {
        name: "Emma Wilson",
        role: "PR Head",
        department: "Information Technology",
        year: "3rd Year",
        bio: "Building bridges between the club and external communities.",
        skills: ["Communication", "Marketing", "Social Media"],
        gradient: "from-[#327a3b] to-[#014935]",
        achievements: [
          "Grew social media by 300%",
          "Established 10+ partnerships",
        ],
        social: {
          email: "emma@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
      {
        name: "James Lee",
        role: "Content Creator",
        department: "Information Technology",
        year: "2nd Year",
        bio: "Creating engaging tech content and tutorials for the community.",
        skills: ["Technical Writing", "Video Editing", "Graphics Design"],
        gradient: "from-[#014935] to-[#327a3b]",
        achievements: ["1M+ content views", "Tech Blog with 10K+ readers"],
        social: {
          email: "james@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
    ],
  },
  organizing: {
    title: "Organizing Committee",
    icon: Calendar,
    description: "Making events happen seamlessly",
    members: [
      {
        name: "Rachel Green",
        role: "Events Coordinator",
        department: "Computer Science",
        year: "2nd Year",
        bio: "Event management expert organizing hackathons and tech talks.",
        skills: ["Event Planning", "Logistics", "Team Coordination"],
        gradient: "from-[#327a3b] to-[#014935]",
        achievements: [
          "Organized 10+ successful events",
          "500+ event participants",
        ],
        social: {
          email: "rachel@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
      {
        name: "Tom Anderson",
        role: "Logistics Manager",
        department: "Information Technology",
        year: "2nd Year",
        bio: "Ensuring every event runs smoothly with perfect planning.",
        skills: ["Resource Management", "Problem Solving", "Coordination"],
        gradient: "from-[#014935] to-[#327a3b]",
        achievements: ["Zero failed events", "Budget optimization expert"],
        social: {
          email: "tom@baiust.edu.bd",
          github: "https://github.com",
          linkedin: "https://linkedin.com",
        },
      },
    ],
  },
};

// Member Card Component
const MemberCard = ({ member, index }: { member: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
  >
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#014935]/20 to-[#327a3b]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

      <div className="relative bg-white rounded-3xl border-2 border-[#014935]/10 hover:border-[#327a3b]/30 transition-all duration-300 overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl">
        {/* Header with gradient */}
        <div
          className={`relative h-32 bg-gradient-to-br ${member.gradient} p-6`}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex gap-2">
              {member.achievements.slice(0, 1).map((_: any, i: number) => (
                <motion.div
                  key={i}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                >
                  <Trophy className="w-4 h-4 text-white" />
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold"
            >
              {member.year}
            </motion.div>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative -mt-16 px-6 z-10">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative inline-block"
          >
            <div
              className={`w-28 h-28 bg-gradient-to-br ${member.gradient} rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white`}
            >
              <Code className="w-14 h-14 text-white" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.3 }}
              className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#327a3b] rounded-xl border-4 border-white flex items-center justify-center shadow-lg"
            >
              <Award className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 pt-4 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p
            className={`text-sm font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-1`}
          >
            {member.role}
          </p>
          <p className="text-xs text-gray-500 mb-4">{member.department}</p>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {member.bio}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill: string, i: number) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 bg-[#014935]/5 text-[#014935] rounded-full border border-[#327a3b]/20 font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-4 flex-1">
            {member.achievements.map((achievement: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + i * 0.1 }}
                className="flex items-start gap-2 mb-2"
              >
                <Trophy className="w-3 h-3 text-[#327a3b] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-600">{achievement}</span>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-2 pt-4 border-t border-gray-100">
            <motion.a
              href={`mailto:${member.social.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function TeamPage() {
  const panels = Object.entries(teamStructure);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#014935]/5 to-[#327a3b]/5">
      {/* Header */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 dashed-pattern opacity-30" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#014935]/20 to-[#327a3b]/30 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <Button
                variant="outline"
                className="mb-8 border-[#014935]/30 hover:bg-[#014935]/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-[#014935] font-bold text-sm uppercase tracking-wider bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-[#327a3b]/30 shadow-lg">
                Meet Our Team
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="animated-gradient-text">
                The People Behind BCC
              </span>
            </h1>

            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              Our talented team of students passionate about technology,
              innovation, and community building
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Panels */}
      {panels.map(([key, panel], panelIndex) => {
        const IconComponent = panel.icon;

        return (
          <section key={key} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Panel Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="inline-flex items-center gap-3 mb-4"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#014935] to-[#327a3b] rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black mb-3 text-gray-900">
                  {panel.title}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {panel.description}
                </p>
              </motion.div>

              {/* Members Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {panel.members.map((member, index) => (
                  <MemberCard key={index} member={member} index={index} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#014935] to-[#327a3b] rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                We&apos;re always looking for passionate individuals to join us!
              </p>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-[#014935] hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
