"use client"

import { motion } from "framer-motion"
import OurJourney from "../components/about/OurJourney"
import VisionMission from "../components/about/VisionMisson"
import OurLeaders from "../components/about/OurLeaders"
import { Timeline } from "../components/Timeline"

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white flex items-center justify-center text-center min-h-[45vh] px-4 py-24" style={{ backgroundImage: "url('https://res.cloudinary.com/dcxxiwmdo/image/upload/v1750959150/AboutBg_hie7kd.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
          >
            About UnitedAgro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl mt-4 text-gray-100 drop-shadow-md"
          >
            Your trusted partner in premium frozen food products since 2013
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6 relative after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-600 after:rounded after:mt-2">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-[1.05rem]">
                United Agro Frozen Food Products Pvt. Ltd. is one of the most trusted names in the Indian frozen food industry. Since our inception in 2013, we’ve been driven by a single purpose — to deliver high-quality, hygienically processed frozen food products that meet the evolving needs of consumers across India and around the globe.
              </p>
              <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                Our commitment to innovation, customer satisfaction, and sustainable practices has made us a preferred partner for retailers, distributors, and institutions alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl shadow-xl overflow-hidden relative bg-white"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-700"></div>
              <img
                src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751978036/Logobard_bruakv.png"
                alt="Our facility"
                className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <Timeline/>
      </section>

      {/* Timeline, Vision, Leadership */}
      {/* <section>
        <OurJourney />
      </section> */}
      <section>
        <VisionMission />
      </section>
      <section>
        <OurLeaders />
      </section>
    </div>
  )
}

export default About
