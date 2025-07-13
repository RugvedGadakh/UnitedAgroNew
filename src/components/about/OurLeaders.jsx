"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const OurLeaders = () => {
  const leader = {
    name: "Mr. Santosh V. Thorat",
    position: "Founder & Director",
    image:
      "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752044699/WhatsApp_Image_2025-07-07_at_16.43.04_0738b558_ymrg9q.jpg",
    bio: "Mr. Santosh Thorat is the visionary behind United Agro’s growth. With expertise in finance and a deep understanding of the food industry, he led the company’s transformation from a trading firm to a fully integrated frozen food producer. His focus on quality and long-term strategy drives the company forward.",
    education: ["MBA in Finance"],
    email: "maria@UnitedAgro.com",
  }

  return (
    <section className="py-24 bg-[#d8f0d1]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#14532d] mb-4">Meet Our Leader</h2>
          <p className="text-lg text-[#1c4532] max-w-2xl mx-auto">
            Visionary leadership that drives innovation and sustainable excellence
          </p>
        </motion.div>

        {/* Leader Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-green-300 p-10 flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-64 h-64 object-cover rounded-xl border-4 border-green-500 shadow-lg"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
            <p className="text-green-700 font-medium text-lg mb-4">{leader.position}</p>

            {/* Education */}
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-gray-900 font-semibold mb-3 text-base">
                <GraduationCap size={18} /> Education
              </h4>
              <ul className="space-y-2">
                {leader.education.map((edu, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                    <span>🎓</span>
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bio */}
            <p className="text-gray-800 leading-relaxed mb-4">{leader.bio}</p>

            {/* Quote */}
            <p className="text-green-800 italic font-medium">
              “When you lead with trust and quality, success naturally follows.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurLeaders
