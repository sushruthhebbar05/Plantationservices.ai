import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { COMPANY_INFO } from '../data/constants'
import { formAPI } from '../utils/api'

/**
 * Contact Page
 * Contact form, map, and business information
 */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await formAPI.submitContact(formData)
      if (response.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="page">
      {/* Hero */}
      <Hero
        title="Contact Us"
        subtitle="Get in touch for agricultural guidance and product inquiries"
        image="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=600&fit=crop"
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Left Column - Contact Info */}
            <motion.div
              className="contact-info-column"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Get In Touch</h2>

              {/* Contact Items */}
              <div className="contact-item-group">
                <div className="contact-item-box">
                  <FiPhone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                  </div>
                </div>

                <div className="contact-item-box">
                  <FiMail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                  </div>
                </div>

                <div className="contact-item-box">
                  <FiMapPin className="contact-icon" />
                  <div>
                    <h4>Address</h4>
                    <p>{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="contact-item-box">
                  <FiClock className="contact-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="contact-actions">
                <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-primary">
                  📞 Call Now
                </a>
                <a href={COMPANY_INFO.googleMapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  📍 Get Directions
                </a>
                <a href={COMPANY_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  💬 WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="contact-form-column"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="form-alert success">✓ Message sent successfully! We'll get back to you soon.</div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-alert error">✗ Error sending message. Please try again.</div>
                )}

                <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%' }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Find Us On Map</h2>
          <div className="map-container">
            <iframe
              title="Plantation Services Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1234567890!2d75.3!3d13.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPlantation%20Services%2C%20Chikkamagaluru!5e0!3m2!1sen!2sin!4v1234567890`}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
