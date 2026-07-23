import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { SERVICES } from '../data/constants'
import { containerVariants, itemVariants } from '../utils/animations'

/**
 * Services Page
 * Display all services offered
 */

const Services = () => {
  return (
    <main className="page">
      {/* Hero */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive agricultural solutions tailored to your farming needs"
        image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop"
      />

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SERVICES.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card
                  image={service.image}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                >
                  <button className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }}>
                    Learn More
                  </button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: 'white' }}>
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2>Ready to Get Expert Agricultural Guidance?</h2>
            <p style={{ fontSize: '18px', marginBottom: '30px' }}>
              Contact us today for personalized consultation and support
            </p>
            <a href="/contact" className="btn btn-outline">
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Services
