import React from 'react'
import './HomeSection.css' // Assuming you have a CSS file for additional styles

const HomeSection = ({ scrollToSection }) => (
  <section 
    id="home" 
    className="min-h-screen relative overflow-hidden pt-16 bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat"
    style={{
      backgroundImage: 'url(/home.png)'
    }}
  >
    {/* Background Icons - visible only on mobile, hidden on desktop */}
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <img 
        src="/Group-2.png" 
        alt="" 
        className="absolute top-10 left-4 w-10 h-10"
      />
      <img 
        src="/Group.png" 
        alt="" 
        className="absolute bottom-5 left-8 w-10 h-10"
      />
      <img 
        src="/Group.png" 
        alt="" 
        className="absolute top-20 right-10 w-10 h-10"
      />
      <img 
        src="/Group-3.png" 
        alt="" 
        className="absolute bottom-10 right-8 w-12 h-10"
      />
      <img 
        src="/Group-3.png" 
        alt="" 
        className="absolute top-32 left-16 w-12 h-10"
      />
      <img 
        src="/Coding icon.png" 
        alt="" 
        className="absolute top-20 right-20 w-16 h-16"
      />
      <img 
        src="/Group-1.png" 
        alt="" 
        className="absolute bottom-20 left-20 w-10 h-10"
      />
      <img 
        src="/Group-1.png" 
        alt="" 
        className="absolute top-40 left-8 w-8 h-8"
      />
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 lg:items-start">
      {/* Text Content - Hidden on desktop (lg:hidden), visible on mobile */}
      <div className="w-full max-w-4xl text-center lg:hidden">
        <p className="text-2xl md:text-3xl font-bold text-wrap mb-4 text-black">
          Ready to innovate, grow, and compete?
        </p>
        
        <p className="text-lg md:text-2xl font-bold text-wrap mb-3 text-black">
          <span className="text-[#00BBE3] font-bold">Join us</span> for the Science Summer Camp, your
        </p>
        <p className="text-lg md:text-2xl font-bold text-black text-wrap mb-3">
          ultimate year-end experience featuring two weeks
        </p>
        <p className="text-lg md:text-2xl font-bold text-wrap mb-3 text-black">
          of cutting-edge <span className="text-[#00BBE3] font-bold">STEM</span>, essential <span className="text-[#00BBE3] font-bold">self-development</span>,
        </p>
        <p className="text-lg md:text-2xl font-bold text-black text-wrap mb-8">
          and a thrilling final <span className="text-[#00BBE3] font-bold">competition</span>!
        </p>
      </div>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:absolute lg:top-[420px] lg:left-[80px] lg:justify-start lg:gap-8">
        <button
          onClick={() => scrollToSection('registration')}
          className="bg-[#00BBE3] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold text-base lg:text-lg hover:bg-[#0083B0] transition-colors flex items-center justify-center w-full sm:w-auto min-w-[200px]"
        >
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
          </svg>
          Register now !
        </button>

        <button
          onClick={() => scrollToSection('about')}
          className="border-2 border-[#00BBE3] text-[#00BBE3] px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold text-base lg:text-lg hover:bg-[#00BBE3] hover:text-white transition-colors flex items-center justify-center w-full sm:w-auto min-w-[200px]"
        >
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
          </svg>
          About QSSC
        </button>
      </div>
    </div>
  </section>
)

export default HomeSection
