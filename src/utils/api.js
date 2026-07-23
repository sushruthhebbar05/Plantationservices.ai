// API configuration for LLM and other services

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY

// Chatbot API endpoints
export const chatAPI = {
  // Send message to LLM
  sendMessage: async (message, conversationHistory = []) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          history: conversationHistory,
          apiKey: OPENAI_API_KEY,
        }),
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Chat API error:', error)
      return {
        success: false,
        message: 'Unable to connect to AI service. Please try again later.',
      }
    }
  },

  // Get agricultural recommendations
  getRecommendations: async (cropType, soilType, season) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/recommendations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cropType,
          soilType,
          season,
          apiKey: OPENAI_API_KEY,
        }),
      })

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Recommendations API error:', error)
      return { success: false, error: error.message }
    }
  },
}

// Form submission API
export const formAPI = {
  submitContact: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Form submission error:', error)
      return { success: false, error: error.message }
    }
  },

  subscribeNewsletter: async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      return { success: false, error: error.message }
    }
  },
}

export default {
  API_BASE_URL,
  OPENAI_API_KEY,
  MAPS_API_KEY,
  chatAPI,
  formAPI,
}
