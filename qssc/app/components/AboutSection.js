"use client";
import React from 'react'

const AboutSection = () => (
  <section id="about" className="min-h-screen bg-gradient-to-br from-[#00BBE3] to-[#0083B0] py-0 px-4 relative -mt-1 -mb-1">
    {/* Top wave separator */}
    <div 
      className="absolute top-0 left-0 w-full h-[168px] md:h-[88px] transform rotate-180 -mt-1"
      style={{
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat no-repeat',
        backgroundPosition: 'bottom',
        backgroundImage: ` url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23ffffff'/></svg>")`
      }}
    />

    <div className="max-w-6xl mx-auto relative z-10 pt-16 pb-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-8">
         
          <h1 className="text-white text-5xl font-bold">
            What is <span className="text-white">QSSC</span><span className="text-sm">2025</span> ?
          </h1>
        </div>
        <div className="text-white px-4">
          <p className="text-lg leading-relaxed mb-8">
            The Science Summer Camp is a two-week intensive STEM program. It is packed with 
            hands-on workshops to explore through interactive challenges and guided experiments.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <img 
          src="Picture 1.svg" 
          alt="Science Workshop" 
          className="w-full max-w-[calc(100%+20px)] h-50 rounded-xl object-cover transform rotate-3"
        />
        
        <div className="text-white px-4">
          <p className="text-lg leading-relaxed mb-8">
            Beyond just technical skills, this camp focuses on building your creativity, critical 
            thinking, teamwork, and leadership - all key for future innovators!
          </p>
        </div>
        
        <img 
          src="Picture 2.svg" 
          alt="Students Learning" 
          className="w-full max-w-[calc(100%+20px)] h-60 rounded-xl object-cover transform -rotate-2"
        />
      </div>
    </div>

    {/* Bottom wave separator */}
    <div 
      className="absolute bottom-0 left-0 w-full h-[168px] md:h-[84px] -mb-1"
      style={{
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat no-repeat',
        backgroundPosition: 'bottom',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23ffffff'/></svg>")`
      }}
    />
  </section>
)

export default AboutSection
