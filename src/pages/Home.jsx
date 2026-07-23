import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { SERVICES, TESTIMONIALS, FAQ, AGRICULTURAL_TIPS, COMPANY_INFO } from '../data/constants'
import { containerVariants, itemVariants } from '../utils/animations'

/**
 * Home Page
 * Hero section with floating stats, services preview, testimonials, tips, and FAQ
 */

const Home = () => {
  const stats = [
    { icon: '⭐', label: 'Google Rating', value: '4.4/5' },
    { icon: '👨‍🌾', label: 'Trusted by Farmers', value: '1000+' },
    { icon: '🛡️', label: 'Premium Products', value: '100%' },
    { icon: '📞', label: 'Expert Guidance', value: '24/7' },
  ]

  return (
    <main className="page home-page">
      {/* Hero Section */}
      <Hero
        title="Helping Farmers Grow Better"
        subtitle="Quality Fertilizers, Crop Protection Products, Seeds & Expert Agricultural Guidance in Chikkamagaluru."
        image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop"
        buttons={[
          { label: 'Explore Products', href: '/products', variant: 'btn-primary' },
          { label: 'Contact Us', href: '/contact', variant: 'btn-outline' },
        ]}
      />

      {/* Floating Stats */}
      <section className="section stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} className="stat-card" variants={itemVariants}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive agricultural solutions tailored to your farming needs</p>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {SERVICES.slice(0, 6).map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Agricultural Tips */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Agricultural Tips</h2>
          <p className="section-subtitle">Expert advice to improve your crop yield and farm productivity</p>

          <motion.div
            className="tips-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {AGRICULTURAL_TIPS.map((tip) => (
              <motion.div key={tip.id} variants={itemVariants}>
                <Card
                  image={tip.image}
                  title={tip.title}
                  description={tip.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real stories from satisfied farmers and plantation owners</p>

          <motion.div
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card variant="testimonial">
                  <div className="testimonial-rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-message" style={{ marginTop: '12px' }}>
                    "{testimonial.message}"
                  </p>
                  <div className="testimonial-author" style={{ marginTop: '16px' }}>
                    <strong>{testimonial.name}</strong>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions about our services and products</p>

          <motion.div
            className="faq-container"
            style={{ maxWidth: '700px', margin: '0 auto' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {FAQ.slice(0, 5).map((item, idx) => (
              <motion.div key={item.id} className="faq-item" variants={itemVariants}>
                <details>
                  <summary className="faq-question">{item.question}</summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get latest agricultural tips, product updates, and farming insights delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Home
