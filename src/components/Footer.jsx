import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { COMPANY_INFO } from '../data/constants'
import '../styles/Footer.css'

/**
 * Footer Component
 * Contains company info, quick links, contact, and social links
 */

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
  ]

  const productCategories = [
    'Fertilizers',
    'Crop Protection',
    'Seeds',
    'Bio Fertilizers',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <motion.div
            className="footer-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Company Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <div className="footer-logo">
                <span className="logo-icon">🌿</span>
                <div>
                  <h4>Plantation Services</h4>
                  <p>Your Trusted Agricultural Partner</p>
                </div>
              </div>
              <p className="footer-description">
                Quality fertilizers, crop protection products, seeds & expert agricultural guidance for all your farming needs.
              </p>
              <div className="social-links">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <FiFacebook />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
                <a
                  href={COMPANY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.953 1.27l-.356.192-.369-.057-1.479-.242.242 1.461.057.363-.191.355a9.85 9.85 0 001.203 5.785l.26.429-.408.412c-.276.276-.45.672-.45 1.078 0 .406.174.802.45 1.078.276.276.672.45 1.078.45.406 0 .802-.174 1.078-.45l.412-.408.429.26a9.85 9.85 0 005.785 1.203c.406 0 .802-.174 1.078-.45.276-.276.45-.672.45-1.078 0-.406-.174-.802-.45-1.078-.276-.276-.672-.45-1.078-.45h-.004c-2.374 0-4.721-.896-6.5-2.676-1.78-1.78-2.676-4.126-2.676-6.5 0-.406-.174-.802-.45-1.078-.276-.276-.672-.45-1.078-.45-.406 0-.802.174-1.078.45z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h5>Quick Links</h5>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h5>Products</h5>
              <ul>
                {productCategories.map((category) => (
                  <li key={category}>
                    <a href="#">{category}</a>
                  </li>
                ))}
                <li>
                  <a href="#">Garden Products</a>
                </li>
                <li>
                  <a href="#">Micronutrients</a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h5>Contact Us</h5>
              <div className="contact-info">
                <a href={`tel:${COMPANY_INFO.phone}`} className="contact-item">
                  <FiPhone />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="contact-item">
                  <FiMail />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <div className="contact-item">
                  <FiMapPin />
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Plantation Services. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
