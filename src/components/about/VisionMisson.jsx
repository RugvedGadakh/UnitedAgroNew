"use client"

import { motion } from "framer-motion"
import { Heart, Leaf, Zap, Users } from "lucide-react"

const VisionMission = () => {
  const values = [
    {
      icon: <Heart size={28} />,
      title: "Quality First",
      description: "Every product meets our rigorous standards for taste, nutrition, and safety.",
    },
    {
      icon: <Leaf size={28} />,
      title: "Sustainability",
      description: "Protecting our planet through responsible farming and eco-friendly practices.",
    },
    {
      icon: <Zap size={28} />,
      title: "Innovation",
      description: "Continuously advancing our technology to deliver better products.",
    },
    {
      icon: <Users size={28} />,
      title: "Community",
      description: "Supporting local farmers and communities in everything we do.",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-br from-green-200 to-lime-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
        {/* Image Left + Content Right */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-10 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752044689/WhatsApp_Image_2025-07-06_at_17.54.14_0f76bcba_wria5b.jpg"
              alt="Vision and Mission"
              className="w-full h-auto rounded-2xl border border-gray-200 shadow-md"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-green-800 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
              Our Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-green-600 mb-6 rounded-full " />
            <div className="space-y-8">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-semibold mb-2 text-green-700 drop-shadow-sm">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  To be the world’s most trusted provider of premium frozen foods, setting the
                  benchmark for quality, sustainability, and innovation — nourishing families across
                  the globe.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-semibold mb-2 text-green-700 drop-shadow-sm">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  To deliver farm-fresh frozen foods through eco-conscious practices and cutting-edge
                  technology, while uplifting farming communities and preserving the environment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <motion.div
        className="bg-white text-gray-900 pt-20 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h3 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-green-800">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-green-200 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-tr from-green-500 to-lime-500 text-white shadow-sm mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default VisionMission
