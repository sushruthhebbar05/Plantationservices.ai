import React from 'react'
import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'
import { COMPANY_INFO } from '../data/constants'
import '../styles/FloatingWhatsApp.css'

/**
 * Floating WhatsApp Button Component
 * Direct WhatsApp contact button
 */

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Plantation%20Services!%20I%20would%20like%20to%20inquire%20about%20your%20services.`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.953 1.27l-.356.192-.369-.057-1.479-.242.242 1.461.057.363-.191.355a9.85 9.85 0 001.203 5.785l.26.429-.408.412c-.276.276-.45.672-.45 1.078 0 .406.174.802.45 1.078.276.276.672.45 1.078.45.406 0 .802-.174 1.078-.45l.412-.408.429.26a9.85 9.85 0 005.785 1.203c.406 0 .802-.174 1.078-.45.276-.276.45-.672.45-1.078 0-.406-.174-.802-.45-1.078-.276-.276-.672-.45-1.078-.45h-.004c-2.374 0-4.721-.896-6.5-2.676-1.78-1.78-2.676-4.126-2.676-6.5 0-.406-.174-.802-.45-1.078-.276-.276-.672-.45-1.078-.45-.406 0-.802.174-1.078.45z" />
        </svg>
      </div>
      <span className="whatsapp-label">Chat on WhatsApp</span>
    </motion.a>
  )
}

export default FloatingWhatsApp
