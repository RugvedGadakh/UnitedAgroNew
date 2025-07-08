import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Our Clients", path: "/clients" },
  ]

  const productCategories = [
    { name: "Premium Sweet Corn", path: "/products/1" },
    { name: "Mixed Vegetables", path: "/products/2" },
    { name: "Organic Peas", path: "/products/3" },
    { name: "Frozen Berries", path: "/products/4" },
    { name: "Leafy Greens", path: "/products/5" },
  ]

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container footer-container">
          {/* Company Info */}
          <div className="footer-section company-section">
            <div className="footer-logo">
              <h3>United Agro Food</h3>
              <div className="logo-tagline">Farm Fresh • Flash Frozen • Premium Quality</div>
            </div>
            <p className="company-description">
              Leading the frozen food industry with premium quality products since 2010. From farm to freezer, we
              preserve nature's goodness with cutting-edge technology and sustainable practices.
            </p>

            <div className="social-section">
              <h4>Follow Our Journey</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map and Address Section */}
          <div className="footer-section map-section" style={{ gridColumn: '3 / span 2', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.729395555772!2d74.49819637468408!3d19.85139962717412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc436beaaaaaab%3A0x1ed39ed0a1461f77!2sUnited%20Agro%20Frozen%20Food%20Products%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751974656855!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '10px', marginBottom: '10px', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="United Agro Location"
            ></iframe>
            <div className="footer-address">
              267/05, Kokamthan, Maharashtra 423601
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content centered-footer-text">
            <p className="copyright-gradient">&copy; {currentYear} United Agro Food. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
