import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { containerVariants, itemVariants } from '../utils/animations'

/**
 * About Us Page
 * Company information, mission, vision, and team
 */

const About = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Quality Products',
      description: 'Premium fertilizers and crop protection products from trusted brands',
    },
    {
      icon: '👨‍🔬',
      title: 'Expert Team',
      description: 'Experienced agricultural consultants with years of expertise',
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Chikkamagaluru region',
    },
    {
      icon: '💰',
      title: 'Competitive Prices',
      description: 'Best prices on all agricultural products and services',
    },
  ]

  const timeline = [
    { year: '2010', event: 'Started operations in Chikkamagaluru' },
    { year: '2015', event: 'Expanded product range and services' },
    { year: '2019', event: 'Achieved 4.4/5 Google rating' },
    { year: '2024', event: 'Launched AI-powered chatbot assistance' },
  ]

  return (
    <main className="page">
      {/* Hero */}
      <Hero
        title="About Plantation Services"
        subtitle="Your Trusted Agricultural Partner Since Years"
        image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop"
      />

      {/* Company Info */}
      <section className="section">
        <div className="container">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Who We Are</h2>
            <p>
              Plantation Services is a leading agricultural solution provider based in Chikkamagaluru, Karnataka. With years of experience, we serve coffee growers, pepper farmers, arecanut cultivators, and home gardeners with premium products and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="mission-vision-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="mission-card" variants={itemVariants}>
              <h3>Our Mission</h3>
              <p>
                To provide farmers with high-quality agricultural products, expert guidance, and innovative solutions that enhance productivity while promoting sustainable farming practices.
              </p>
            </motion.div>
            <motion.div className="vision-card" variants={itemVariants}>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted agricultural partner in Chikkamagaluru, empowering farmers with knowledge, resources, and support to achieve better yields and sustainable growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card icon={feature.icon} title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {timeline.map((item, idx) => (
              <motion.div key={idx} className="timeline-item" variants={itemVariants}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h4>{item.year}</h4>
                  <p>{item.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default About
