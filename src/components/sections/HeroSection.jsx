"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { ArrowRight, Leaf } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center text-white w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover bg-black/45 z-0"
      >
        <source src="https://res.cloudinary.com/dcxxiwmdo/video/upload/v1751975250/VIDEO1_2_-_Trim_klcpz6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/45 z-10" />

      <div className="relative z-20 text-center max-w-[80%] px-5">
        <motion.h1
          className="text-white text-[clamp(2.5rem,8vw,3.6rem)] font-extrabold mb-3"
          style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.8)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Frozen Foods Products Pvt. Ltd.
        </motion.h1>

        <motion.h3
          className="text-white text-[clamp(1.25rem,3vw,2rem)] font-medium mb-4 truncate"
          style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.8)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We commit, We care, We Comfort, our client
        </motion.h3>

        <motion.p
          className="text-[clamp(1rem,2vw,1.5rem)] text-gray-200 font-normal mb-10"
          style={{ textShadow: "0 2px 6px rgba(0, 0, 0, 0.8)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Typewriter
            words={[
              "We reach 6000+ farmers",
              "Our production capacity 20 tons/day",
              "Delivering quality and trust across India"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            <Leaf size={20} />
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            <ArrowRight size={20} />
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
