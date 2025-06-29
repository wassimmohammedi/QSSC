'use client'

import React, { useState, useEffect } from 'react'

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY

        // Show navbar when scrolling up or at the top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true)
        } 
        // Hide navbar when scrolling down (and not at the top)
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        }

        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <nav 
      className={`
        bg-white shadow-sm fixed top-0 left-0 right-0 z-50 
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="Group-4.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-medium hover:text-[#00BBE3] transition-colors text-[#00425A] flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg font-medium hover:text-[#00BBE3] transition-colors text-[#00425A] flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              About
            </button>
            <button
              onClick={() => scrollToSection('programme')}
              className="text-lg font-medium hover:text-[#00BBE3] transition-colors text-[#00425A] flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Programme
            </button>
            <button
              onClick={() => scrollToSection('registration')}
              className="bg-[#00BBE3] text-white px-6 py-2 rounded-2xl font-medium hover:bg-[#0083B0] transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              Get Started !
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#00425A] hover:text-[#00BBE3] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Blue Background */}
      <div 
        className={`
          md:hidden fixed inset-0 w-full min-h-screen bg-[#00BBE3] z-40 transition-all duration-500 ease-in-out
          ${isMenuOpen 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform -translate-y-full opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors bg-white/20 rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col gap-8 text-center text-2xl">
            <button
              onClick={() => {
                scrollToSection('home')
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-white/80 transition-colors py-2 font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('about')
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-white/80 transition-colors py-2 font-semibold"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('programme')
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-white/80 transition-colors py-2 font-semibold"
            >
              Programme
            </button>
            <button
              onClick={() => {
                scrollToSection('registration')
                setIsMenuOpen(false)
              }}
              className="bg-white text-[#00BBE3] px-8 py-3 rounded-2xl font-medium hover:bg-white/90 transition-colors shadow-lg"
            >
              Get Started !
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
