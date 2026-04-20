"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Award,
  Clock,
  Users,
  Handshake,
  ChevronRight,
  HeartPulse,
  Baby,
  Eye,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TRUHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    {
      icon: <HeartPulse className="w-5 h-5" />,
      title: "Individual &",
      subtitle: "Family Plans",
      description:
        "Personalized health coverage for you and your loved ones — from HMOs to PPOs, I help you find the right fit.",
      number: "01",
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "Medicare",
      subtitle: "Solutions",
      description:
        "Navigate Medicare with confidence. I simplify Advantage, Supplement, and Part D plans so you can make informed decisions.",
      number: "02",
    },
    {
      icon: <Baby className="w-5 h-5" />,
      title: "Life &",
      subtitle: "Supplemental",
      description:
        "Protect your family's future with life insurance and supplemental coverage for the unexpected moments.",
      number: "03",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Dental &",
      subtitle: "Vision",
      description:
        "Comprehensive dental and vision plans to keep your whole-body health covered beyond the basics.",
      number: "04",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. Carmen will be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-violet-950 transition-colors duration-500 overflow-hidden">
      {/* Grain Overlay */}
      <div className="grain fixed inset-0 pointer-events-none z-50" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="sticky top-0 z-40 bg-cream-50/90 dark:bg-violet-950/90 backdrop-blur-md border-b border-violet-200/30 dark:border-violet-800/30"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <Image
                src="/images/tru-logo.png"
                alt="TRU Insurance Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain flex-shrink-0 transition-transform group-hover:rotate-3"
              />
              <div className="flex flex-col">
                <span className="text-sm font-serif font-bold tracking-wide text-violet-900 dark:text-violet-100 uppercase">
                  TRU
                </span>
                <span className="text-[10px] tracking-[0.25em] text-violet-500 dark:text-violet-400 uppercase">
                  Health Insurance
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-10">
              <a
                href="#services"
                className="text-sm tracking-wide text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-100 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm tracking-wide text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-100 transition-colors"
              >
                About Carmen
              </a>
              <a
                href="#contact"
                className="text-sm tracking-wide text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-violet-100 transition-colors"
              >
                Contact
              </a>
              <ThemeToggle />
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-violet-700 dark:bg-violet-500 text-white text-sm font-medium tracking-wide hover:bg-violet-800 dark:hover:bg-violet-400 dark:hover:text-violet-950 transition-colors"
              >
                Free Consultation
              </motion.a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-violet-700 dark:text-violet-300"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-violet-200/30 dark:border-violet-800/30 bg-cream-50 dark:bg-violet-950"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              <a href="#services" className="block py-2 text-violet-700 dark:text-violet-300 text-sm tracking-wide">
                Services
              </a>
              <a href="#about" className="block py-2 text-violet-700 dark:text-violet-300 text-sm tracking-wide">
                About Carmen
              </a>
              <a href="#contact" className="block py-2 text-violet-700 dark:text-violet-300 text-sm tracking-wide">
                Contact
              </a>
              <a
                href="#contact"
                className="block w-full py-3 bg-violet-700 dark:bg-violet-500 text-white text-sm font-medium text-center tracking-wide"
              >
                Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 lg:px-12">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-200/25 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/30 dark:bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content — 7 columns */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100/60 dark:bg-violet-500/10 border border-violet-300/40 dark:border-violet-500/20 text-violet-800 dark:text-violet-300 text-xs font-medium tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                  Licensed Health Insurance Agent
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-violet-950 dark:text-violet-50 leading-[1.1] mb-8"
              >
                Your health,
                <br />
                your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">coverage</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-violet-300/50 dark:bg-violet-500/30 -z-0 origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-violet-700 dark:text-violet-300 mb-10 max-w-xl leading-relaxed"
              >
                I&apos;m Carmen Santos, and I help individuals and families find
                health insurance that actually fits their lives. No jargon, no
                pressure &mdash; just honest guidance from someone who cares.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-violet-700 dark:bg-violet-500 text-white font-medium tracking-wide hover:bg-violet-800 dark:hover:bg-violet-400 dark:hover:text-violet-950 transition-colors flex items-center justify-center gap-3"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-violet-300/50 dark:border-violet-700/50 text-violet-800 dark:text-violet-200 font-medium tracking-wide hover:border-violet-500 dark:hover:border-violet-500 transition-colors flex items-center justify-center gap-3"
                >
                  Explore Coverage
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right — Carmen hero image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Decorative offset border */}
                <div className="absolute -top-3 -right-3 w-full h-full border border-violet-400/25 dark:border-violet-500/15 hidden lg:block" />
                <div className="relative overflow-hidden border border-violet-200/60 dark:border-violet-800/60">
                  <Image
                    src="/images/carmen-headshot.jpg"
                    alt="Carmen Santos — Licensed Health Insurance Agent"
                    width={600}
                    height={720}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Bottom gradient overlay with name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-violet-950/90 via-violet-950/50 to-transparent pt-20 pb-6 px-6">
                    <p className="text-violet-100 font-serif font-bold text-lg">
                      Carmen Santos
                    </p>
                    <p className="text-violet-300 text-xs tracking-widest uppercase">
                      Founder & Licensed Agent
                    </p>
                  </div>
                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-violet-600 to-violet-800" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="relative py-14 px-6 lg:px-12 bg-logo-bg">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                number: "20+",
                label: "Years in Health Insurance",
                icon: <Clock className="w-4 h-4" />,
              },
              {
                number: "10K+",
                label: "Families Covered",
                icon: <Users className="w-4 h-4" />,
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                icon: <Award className="w-4 h-4" />,
              },
              {
                number: "1-on-1",
                label: "Personal Guidance",
                icon: <Handshake className="w-4 h-4" />,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3 text-violet-400">
                  {stat.icon}
                </div>
                <p className="text-3xl font-serif font-bold text-white mb-1">
                  {stat.number}
                </p>
                <p className="text-xs text-violet-300 tracking-wide uppercase leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-28 px-6 lg:px-12 bg-white/50 dark:bg-violet-900/20"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-4"
            >
              <span className="text-xs font-medium tracking-[0.3em] text-violet-600 dark:text-violet-400 uppercase">
                Health Coverage
              </span>
              <div className="h-px w-16 bg-violet-400/50" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-serif font-bold text-violet-950 dark:text-violet-50 max-w-lg"
            >
              Coverage designed around your health
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-violet-200/50 dark:border-violet-800/40">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-r border-violet-200/50 dark:border-violet-800/40 p-8 lg:p-10 bg-transparent hover:bg-violet-50/50 dark:hover:bg-violet-900/30 transition-colors duration-300 cursor-pointer relative"
              >
                <span className="text-[10px] font-medium tracking-[0.3em] text-violet-300 dark:text-violet-700 uppercase absolute top-6 right-6">
                  {service.number}
                </span>
                <div className="w-10 h-10 border border-violet-200 dark:border-violet-700 flex items-center justify-center mb-8 text-violet-600 dark:text-violet-400 group-hover:border-violet-500 group-hover:text-violet-700 dark:group-hover:border-violet-400 dark:group-hover:text-violet-300 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-violet-900 dark:text-violet-100 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-violet-500 dark:text-violet-500 tracking-wide uppercase mb-4">
                  {service.subtitle}
                </p>
                <p className="text-sm text-violet-700 dark:text-violet-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-violet-500 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors uppercase">
                  Learn More
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Carmen Section */}
      <section id="about" className="relative py-28 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left — Carmen's photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-violet-400/25 dark:border-violet-500/15 hidden lg:block" />
                <div className="relative overflow-hidden border border-violet-200/60 dark:border-violet-800/60">
                  <Image
                    src="/images/carmen-portrait.jpeg"
                    alt="Carmen Santos"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right — Carmen's story */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 mb-4"
              >
                <span className="text-xs font-medium tracking-[0.3em] text-violet-600 dark:text-violet-400 uppercase">
                  Meet Carmen
                </span>
                <div className="h-px w-16 bg-violet-400/50" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-serif font-bold text-violet-950 dark:text-violet-50 mb-8"
              >
                Health insurance
                <br />
                made personal
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-violet-700 dark:text-violet-300 leading-relaxed mb-6"
              >
                I&apos;m Carmen Santos, founder and licensed health insurance
                agent at TRU. For over 20 years, I&apos;ve helped thousands of
                individuals and families navigate the complexities of health
                coverage &mdash; from open enrollment to life-changing moments
                that require the right plan.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-violet-700 dark:text-violet-300 leading-relaxed mb-8"
              >
                I started TRU because I believe everyone deserves an advocate
                who will take the time to explain their options, fight for the
                best rates, and be there when it matters most. When you work
                with me, you&apos;re not a policy number &mdash; you&apos;re
                family.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-0">
                {[
                  {
                    title: "Your Personal Health Insurance Advocate",
                    description:
                      "I sit down with every client one-on-one to understand your health needs, budget, and family situation before recommending a single plan.",
                  },
                  {
                    title: "Clarity Over Confusion",
                    description:
                      "Insurance is complicated — I make it simple. No jargon, no fine-print surprises. You'll understand exactly what you're covered for.",
                  },
                  {
                    title: "Here When It Matters",
                    description:
                      "A claim denied? A life change? I'm a phone call away. My clients don't navigate the system alone — I handle it with them.",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="py-6 border-b border-violet-200/50 dark:border-violet-800/40 first:border-t group"
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-xs font-medium text-violet-500 dark:text-violet-400 mt-1 tracking-wider">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-violet-900 dark:text-violet-100 mb-1">
                          {value.title}
                        </h3>
                        <p className="text-sm text-violet-700 dark:text-violet-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.a
                variants={fadeUp}
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors uppercase mt-8"
              >
                Schedule a conversation with Carmen
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact / Consultation Section */}
      <section
        id="contact"
        className="relative py-28 px-6 lg:px-12 bg-logo-bg"
      >
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-900/20 hidden lg:block" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 mb-4"
              >
                <span className="text-xs font-medium tracking-[0.3em] text-violet-400 uppercase">
                  Get Started
                </span>
                <div className="h-px w-16 bg-violet-400/30" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-serif font-bold text-violet-50 mb-4"
              >
                Let&apos;s find your plan
              </motion.h2>
              <motion.p variants={fadeUp} className="text-violet-300 mb-10">
                Tell me a little about yourself and I&apos;ll reach out within
                24 hours to schedule your free consultation.
              </motion.p>

              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium tracking-widest text-violet-400 uppercase mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-violet-700/60 text-violet-50 placeholder-violet-600 focus:border-violet-400 focus:ring-0 transition-colors text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium tracking-widest text-violet-400 uppercase mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-violet-700/60 text-violet-50 placeholder-violet-600 focus:border-violet-400 focus:ring-0 transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium tracking-widest text-violet-400 uppercase mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-violet-700/60 text-violet-50 placeholder-violet-600 focus:border-violet-400 focus:ring-0 transition-colors text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-medium tracking-widest text-violet-400 uppercase mb-2"
                    >
                      Coverage Type
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent border border-violet-700/60 text-violet-50 focus:border-violet-400 focus:ring-0 transition-colors text-sm appearance-none"
                    >
                      <option value="" className="bg-[#2d0670]">
                        What are you looking for?
                      </option>
                      <option value="individual" className="bg-[#2d0670]">
                        Individual & Family Plans
                      </option>
                      <option value="medicare" className="bg-[#2d0670]">
                        Medicare Solutions
                      </option>
                      <option value="life" className="bg-[#2d0670]">
                        Life & Supplemental
                      </option>
                      <option value="dental-vision" className="bg-[#2d0670]">
                        Dental & Vision
                      </option>
                      <option value="other" className="bg-[#2d0670]">
                        Not sure — help me decide
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium tracking-widest text-violet-400 uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-transparent border border-violet-700/60 text-violet-50 placeholder-violet-600 focus:border-violet-400 focus:ring-0 transition-colors text-sm resize-none"
                    placeholder="Tell me about your health coverage needs..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full px-6 py-4 bg-violet-500 text-white font-medium tracking-wide hover:bg-violet-400 transition-colors text-sm uppercase"
                >
                  Request Free Consultation
                </motion.button>
                <p className="text-xs text-violet-500 text-center">
                  Your information is kept private and secure. No spam, ever.
                </p>
              </motion.form>
            </motion.div>

            {/* Right — Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="lg:pl-12">
                <h3 className="text-2xl font-serif font-semibold text-violet-50 mb-4">
                  Reach Carmen directly
                </h3>
                <p className="text-violet-400 text-sm mb-10 leading-relaxed">
                  Prefer to talk first? I&apos;m always happy to answer
                  questions &mdash; no commitment required.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-violet-700/60 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-violet-500 tracking-widest uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-violet-50 font-medium">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-violet-700/60 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-violet-500 tracking-widest uppercase mb-1">
                        Email
                      </p>
                      <p className="text-violet-50 font-medium">
                        carmen@truinsurance.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-violet-700/60 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-violet-500 tracking-widest uppercase mb-1">
                        Office
                      </p>
                      <p className="text-violet-50 font-medium">
                        123 Insurance Street
                        <br />
                        Suite 100, City, State 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-violet-700/40">
                  <h4 className="text-xs font-medium tracking-widest text-violet-500 uppercase mb-4">
                    Availability
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-violet-400">
                      <span>Monday &ndash; Friday</span>
                      <span className="text-violet-200">
                        8:00 AM &ndash; 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between text-violet-400">
                      <span>Saturday</span>
                      <span className="text-violet-200">
                        9:00 AM &ndash; 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between text-violet-400">
                      <span>Sunday</span>
                      <span className="text-violet-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 lg:px-12 border-t border-violet-200/30 dark:border-violet-800/30 bg-cream-50 dark:bg-violet-950">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/tru-logo.png"
                alt="TRU"
                width={32}
                height={32}
                className="w-8 h-8 object-contain flex-shrink-0"
              />
              <span className="text-sm font-serif font-bold tracking-wide text-violet-900 dark:text-violet-100 uppercase">
                TRU Health Insurance
              </span>
            </div>
            <div className="text-xs text-violet-500 text-center md:text-right space-y-1 tracking-wide">
              <p>
                &copy; 2024 TRU Health Insurance &mdash; Carmen Santos,
                Licensed Agent
              </p>
              <p>Coverage subject to policy terms and conditions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
