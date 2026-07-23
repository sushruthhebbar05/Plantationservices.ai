import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { COMPANY_INFO } from '../data/constants'
import '../styles/Navbar.css'

/**
 * Navbar Component
 * Features:
 * - Sticky navigation
 * - Transparent on hero
 * - Mobile hamburger menu
 * - Smooth scrolling
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Brands', path: '/brands' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">
            <span className="logo-main">Plantation</span>
            <span className="logo-sub">Services</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <motion.li
              key={link.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href={`tel:${COMPANY_INFO.phone}`}
          className="btn btn-primary navbar-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Call Now
        </motion.a>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${COMPANY_INFO.phone}`} className="mobile-cta">
            Call Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
