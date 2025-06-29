'use client'

import React, { useState } from 'react'
import Navigation from './components/Navigation'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProgrammeSection from './components/ProgrammeSection'
import RegistrationSection from './components/RegistrationSection'

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      <HomeSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProgrammeSection />
      <RegistrationSection />
    </div>
  )
}

export default Page
