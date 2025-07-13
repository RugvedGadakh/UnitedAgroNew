"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import LeadForm from "../components/LeadForm"

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-200 via-green-50 to-yellow-100 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_70%,#bbf7d0_0%,transparent_50%),radial-gradient(circle_at_70%_30%,#fde68a_0%,transparent_50%)]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent"
          >
            Inquiry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto mt-4"
          >
            Get in touch with our team for inquiries, orders, or partnership opportunities
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 relative pb-2 mb-6">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="flex flex-col gap-8">
                {/* Phone */}
                <div className="flex gap-5 p-6 bg-green-50 border border-green-100 rounded-xl hover:-translate-y-1 transition shadow-md hover:shadow-lg hover:border-green-200">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-md">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 font-medium">+1 (555) 123-4567</p>
                    <p className="text-gray-600 font-medium">+1 (555) 123-4568</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 p-6 bg-green-50 border border-green-100 rounded-xl hover:-translate-y-1 transition shadow-md hover:shadow-lg hover:border-green-200">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-md">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 font-medium">info@UnitedAgro.com</p>
                    <p className="text-gray-600 font-medium">sales@UnitedAgro.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-5 p-6 bg-green-50 border border-green-100 rounded-xl hover:-translate-y-1 transition shadow-md hover:shadow-lg hover:border-green-200">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-md">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600 font-medium">267/05, Komathan,
                      Near Samata International School,
                      Kokamtham, Tal – Kopergaon,
                      District – Ahilyanagar, Maharashtra</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5 p-6 bg-green-50 border border-green-100 rounded-xl hover:-translate-y-1 transition shadow-md hover:shadow-lg hover:border-green-200">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-md">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 font-medium">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 font-medium">Saturday: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
