import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import { chatAPI } from '../utils/api'
import '../styles/ChatBot.css'

/**
 * AI ChatBot Component
 * Provides real-time agricultural guidance using LLM
 * Features:
 * - Conversation history
 * - Agricultural context awareness
 * - Smooth animations
 * - Mobile responsive
 */

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! 👋 I am PlantationServices AI Assistant. How can I help you with your agricultural needs today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Prepare conversation history for context
      const conversationHistory = messages.map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      }))

      // Get AI response
      const response = await chatAPI.sendMessage(
        inputValue,
        conversationHistory
      )

      if (response.success) {
        const botMessage = {
          id: messages.length + 2,
          text: response.message,
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        const errorMessage = {
          id: messages.length + 2,
          text: response.message || 'Sorry, I encountered an error. Please try again.',
          sender: 'bot',
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = {
        id: messages.length + 2,
        text: 'Sorry, I am unable to process your request right now. Please try again later.',
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const quickQuestions = [
    'Best fertilizer for coffee?',
    'How to improve soil quality?',
    'Pest management tips',
    'Organic farming guide',
  ]

  const handleQuickQuestion = (question) => {
    setInputValue(question)
  }

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <motion.button
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
            >
              <FiX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: -90 }}
            >
              <FiMessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div>
                <h3>PlantationServices AI</h3>
                <p>Agricultural Assistant</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="close-btn"
                aria-label="Close chat"
              >
                <FiX />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="message-content">
                    {message.text}
                  </div>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="message bot"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-content typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions - Show when conversation is short */}
            {messages.length <= 2 && !isLoading && (
              <div className="quick-questions">
                <p>Quick questions:</p>
                <div className="questions-grid">
                  {quickQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(question)}
                      className="quick-btn"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
                type="text"
                placeholder="Ask about agriculture, crops, fertilizers..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChatBot
