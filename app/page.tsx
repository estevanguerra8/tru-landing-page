"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Home,
  Car,
  Heart,
  Briefcase,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Award,
  Clock,
  Handshake
} from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

export default function TRUHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Insurance",
      description: "Protect your home and belongings with comprehensive coverage tailored to your needs."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Auto Insurance",
      description: "Reliable auto coverage that keeps you and your vehicle protected on the road."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Insurance",
      description: "Health coverage options to ensure you and your family receive quality care."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Insurance",
      description: "Safeguard your business with policies designed for your industry and needs."
    }
  ];

  const trustIndicators = [
    { icon: <Award className="w-5 h-5" />, label: "Licensed & Certified" },
    { icon: <Users className="w-5 h-5" />, label: "10,000+ Clients" },
    { icon: <Clock className="w-5 h-5" />, label: "20+ Years Experience" },
    { icon: <Handshake className="w-5 h-5" />, label: "Trusted Partners" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-[#FAFAFA]/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-7 h-7 text-purple-600 dark:text-purple-500" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">TRU Insurance</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Services
              </a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Contact
              </a>
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
              >
                Get a Quote
              </motion.button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-[#FAFAFA] dark:bg-gray-950"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-700 dark:text-gray-300 text-sm">Services</a>
              <a href="#about" className="block py-2 text-gray-700 dark:text-gray-300 text-sm">About</a>
              <a href="#contact" className="block py-2 text-gray-700 dark:text-gray-300 text-sm">Contact</a>
              <button className="w-full py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg text-sm font-medium">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-gray-950">
        {/* Fade gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-900/30 pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Protection you can{" "}
              <span className="text-purple-600 dark:text-purple-500">trust</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              TRU Insurance provides clear, reliable coverage for what matters most. 
              We've been protecting families and businesses for over 20 years with transparency and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium border border-gray-300/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
              >
                Contact TRU
              </motion.button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-purple-600 dark:text-purple-400 mb-2">
                  {indicator.icon}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {indicator.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/40 dark:bg-gray-900/40">
        {/* Fade gradients top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100/40 to-transparent dark:from-gray-900/40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100/40 to-transparent dark:from-gray-900/40 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Insurance Coverage
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive insurance solutions to protect what matters most to you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-[#FAFAFA] dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] dark:bg-gray-950">
        {/* Fade gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-900/30 pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About TRU Insurance
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              For over two decades, TRU Insurance has been a trusted partner for families and businesses 
              seeking reliable coverage. We believe in transparency, clear communication, and putting our 
              clients first. Our experienced team works with leading carriers to find you the right coverage 
              at competitive rates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Client-First Approach",
                description: "Your needs and peace of mind are our top priorities. We take time to understand your situation."
              },
              {
                title: "Transparent Communication",
                description: "No hidden fees or confusing jargon. We explain your coverage in plain language."
              },
              {
                title: "Long-Term Partnership",
                description: "We're here for the long haul, providing ongoing support and policy reviews as your needs change."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Get a Quote Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/40 dark:bg-gray-900/40">
        {/* Fade gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100/40 to-transparent dark:from-gray-900/40 pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get a Quote or Contact Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours. Your information is kept private and secure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-700/50 rounded-lg bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-700/50 rounded-lg bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-700/50 rounded-lg bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-700/50 rounded-lg bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="home">Home Insurance</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="business">Business Insurance</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300/50 dark:border-gray-700/50 rounded-lg bg-[#FAFAFA] dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
              >
                Submit Inquiry
              </motion.button>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                We respect your privacy. Your information will only be used to contact you about your inquiry.
              </p>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white">info@truinsurance.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Address</p>
                      <p className="text-gray-900 dark:text-white">
                        123 Insurance Street<br />
                        Suite 100<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Business Hours
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 dark:border-gray-800/50 bg-[#FAFAFA] dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-500" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">TRU Insurance</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
              <p>&copy; 2024 TRU Insurance. All rights reserved.</p>
              <p className="mt-1">Licensed insurance agency. Coverage subject to policy terms and conditions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
