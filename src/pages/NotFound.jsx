import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * 404 Not Found Page
 */

const NotFound = () => {
  return (
    <main className="page not-found-page">
      <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: '120px', marginBottom: '20px' }}>🌾</div>
            <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>404</h1>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#64748b' }}>
              Page Not Found
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '40px' }}>
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default NotFound
