"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import "./Header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const location = useLocation()

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }

          if (window.scrollY > lastScrollY && window.scrollY > 80) {
            setShowHeader(false)
          } else {
            setShowHeader(true)
          }

          lastScrollY = window.scrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={`header${scrolled ? " scrolled" : ""}${showHeader ? "" : " hide"}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="logo"
          >
            <span className="logo-orange">United Agro Foods Shirdi</span>
          </motion.div>
        </Link>

        <div
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={location.pathname.startsWith("/products") ? "active" : ""}
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/brands"
                className={location.pathname.startsWith("/brands") ? "active" : ""}
              >
                Brands
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/clients" className={location.pathname === "/clients" ? "active" : ""}>
                Our Clients
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header