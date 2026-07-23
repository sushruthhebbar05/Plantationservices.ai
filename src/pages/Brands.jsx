import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { BRANDS } from '../data/constants'
import { containerVariants, itemVariants } from '../utils/animations'

/**
 * Brands Page
 * Display partner brands
 */

const Brands = () => {
  return (
    <main className="page">
      {/* Hero */}
      <Hero
        title="Our Brand Partners"
        subtitle="Trusted partnerships with leading agricultural brands"
        image="https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=1200&h=600&fit=crop"
      />

      {/* Brands Grid */}
      <section className="section">
        <div className="container">
          <p className="section-subtitle" style={{ marginBottom: '50px', marginTop: '0' }}>
            We work with industry-leading brands to bring you the best agricultural products
          </p>

          <motion.div
            className="brands-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {BRANDS.map((brand) => (
              <motion.div key={brand.id} variants={itemVariants}>
                <Card
                  image={brand.logo}
                  title={brand.name}
                  description={brand.description}
                  variant="brand"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Brands
