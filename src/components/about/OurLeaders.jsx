"use client"

import { motion } from "framer-motion"
import { Mail, Award } from "lucide-react"

const OurLeaders = () => {
  const leader = {
    name: "Maria Rodriguez",
    position: "Co-Founder & CEO",
    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752044699/WhatsApp_Image_2025-07-07_at_16.43.04_0738b558_ymrg9q.jpg",
    bio: "With over 20 years in agriculture, Maria leads our vision for sustainable farming and quality excellence. Her leadership continues to shape the company’s strategic direction with a strong focus on innovation, community, and sustainability.",
    achievements: [
      "Agricultural Innovation Award 2022",
      "Women in Business Leadership 2021",
    ],
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
          <h2 className="text-5xl ont-bold text-[#14532d] mb-4">Meet Our Leader</h2>
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
          {/* Square Image */}
          <div className="flex-shrink-0">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-52 h-52 object-cover rounded-xl border-4 border-green-500 shadow-lg"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
            <p className="text-green-700 font-medium text-lg mb-4">{leader.position}</p>
            <p className="text-gray-800 leading-relaxed mb-6">{leader.bio}</p>

            {/* Contact */}
            <div className="flex gap-4 mb-6">
              <a
                href={`mailto:${leader.email}`}
                className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="flex items-center gap-2 text-gray-900 font-semibold mb-3 text-base">
                <Award size={18} /> Recent Achievements
              </h4>
              <ul className="space-y-2">
                {leader.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                    <span>🏆</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurLeaders
