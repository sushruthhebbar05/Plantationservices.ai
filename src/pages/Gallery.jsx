import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { GALLERY_IMAGES } from '../data/constants'

/**
 * Gallery Page
 * Responsive masonry gallery
 */

const Gallery = () => {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'plantation', label: 'Plantations' },
    { id: 'products', label: 'Products' },
    { id: 'farm-visit', label: 'Farm Visits' },
    { id: 'crop-field', label: 'Crop Fields' },
  ]

  const filteredImages =
    filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter)

  return (
    <main className="page">
      {/* Hero */}
      <Hero
        title="Our Gallery"
        subtitle="Visual stories of our agricultural journey"
        image="https://images.unsplash.com/photo-1500382017468-7049fae79e70?w=1200&h=600&fit=crop"
      />

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <motion.div
            className="gallery-filters"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Masonry Gallery */}
          <motion.div
            className="gallery-grid"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={image.image} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h4>{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Gallery
