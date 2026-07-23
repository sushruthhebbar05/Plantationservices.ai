import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { PRODUCT_CATEGORIES } from '../data/constants'
import { containerVariants, itemVariants } from '../utils/animations'

/**
 * Products Page
 * Display all product categories with filters and search
 */

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = selectedCategory
    ? PRODUCT_CATEGORIES.filter((cat) => cat.id === selectedCategory)
    : PRODUCT_CATEGORIES

  return (
    <main className="page">
      {/* Hero */}
      <Hero
        title="Our Products"
        subtitle="Premium fertilizers, seeds, crop protection, and agricultural solutions"
        image="https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=1200&h=600&fit=crop"
      />

      {/* Products Section */}
      <section className="section">
        <div className="container">
          {/* Search Bar */}
          <motion.div
            className="search-bar-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="category-filter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              className={`filter-btn ${selectedCategory === null ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Products
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="products-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {filteredProducts.map((category) => (
              <div key={category.id}>
                <h3 className="category-title">
                  {category.icon} {category.name}
                </h3>
                <motion.div
                  className="products-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.subcategories.map((product) => (
                    <motion.div key={product.id} variants={itemVariants}>
                      <Card
                        title={product.name}
                        description={product.description}
                        badge="In Stock"
                      >
                        <button className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }}>
                          Learn More
                        </button>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Products
