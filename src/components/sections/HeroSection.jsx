"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Leaf } from "lucide-react"
import TypewriterText from "./TypewriterText"
import "./sections.css"

const HeroSection = () => {
  return (
    <section className="hero-section-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-background-video"
      >
<source src="https://res.cloudinary.com/dcxxiwmdo/video/upload/v1751975250/VIDEO1_2_-_Trim_klcpz6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay" />

      <div className="hero-content-center">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', minHeight: '240px', width: '100%' }}>
          <TypewriterText className="hero-typewriter left" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
