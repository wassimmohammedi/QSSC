"use client";
import React from 'react'

const DecorativeIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Science icons scattered around */}
    <div className="absolute top-20 left-20 opacity-20">
      <svg className="w-12 h-12 text-[#00BBE3]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9,2V8H7.5A1.5,1.5 0 0,0 6,9.5A1.5,1.5 0 0,0 7.5,11H9V16.5L3.5,22H20.5L15,16.5V11H16.5A1.5,1.5 0 0,0 18,9.5A1.5,1.5 0 0,0 16.5,8H15V2H9M11,4H13V8H11V4M11,10H13V15.5L17.5,20H6.5L11,15.5V10Z"/>
      </svg>
    </div>
    
    <div className="absolute top-40 right-32 opacity-15">
      <svg className="w-16 h-16 text-[#00425A]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
      </svg>
    </div>
    
    <div className="absolute bottom-40 left-16 opacity-20">
      <svg className="w-14 h-14 text-[#00BBE3]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
      </svg>
    </div>
    
    <div className="absolute top-60 left-1/3 opacity-10">
      <svg className="w-20 h-20 text-[#00425A]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.13,22.19L11.5,18.36C13.07,17.78 14.54,17 15.9,16.09L13.13,22.19M5.64,12.5L1.81,14.13L7.91,16.9C7,15.54 6.22,14.07 5.64,12.5M21.61,2.39C21.61,2.39 16.66,0.269 11,5.93C8.81,8.12 7.5,10.53 6.65,12.64C6.37,13.39 6.56,14.21 7.11,14.77L9.24,16.89C9.79,17.45 10.61,17.63 11.36,17.35C13.5,16.53 15.88,15.19 18.07,13C23.73,7.34 21.61,2.39 21.61,2.39M14.54,9.46C13.76,8.68 13.76,7.41 14.54,6.63S16.59,5.85 17.37,6.63C18.14,7.41 18.15,8.68 17.37,9.46C16.59,10.24 15.32,10.24 14.54,9.46M8.88,16.53L7.47,15.12L8.88,16.53M6.24,22L9.88,18.36C9.54,18.27 9.21,18.12 8.91,17.91L4.83,22H6.24M2.39,21.61L6.64,17.35C6.2,16.74 5.86,16.06 5.64,15.32L2.39,21.61Z"/>
      </svg>
    </div>
    
    <div className="absolute bottom-20 right-20 opacity-15">
      <svg className="w-18 h-18 text-[#00BBE3]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
      </svg>
    </div>
    
    {/* Geometric shapes */}
    <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
      <div className="w-4 h-4 bg-[#00BBE3] rounded-full opacity-30"></div>
    </div>
    <div className="absolute top-80 right-40">
      <div className="w-6 h-6 bg-[#00425A] opacity-20 transform rotate-45"></div>
    </div>
    
    {/* Code symbols */}
    <div className="absolute bottom-32 left-1/4 text-[#00BBE3] text-3xl opacity-20 font-mono">
      &lt;/&gt;
    </div>
    <div className="absolute top-96 right-16 text-[#00425A] text-2xl opacity-15 font-mono">
      { }
    </div>
    
    {/* Additional science icons */}
    <div className="absolute top-72 right-24 opacity-10">
      <svg className="w-10 h-10 text-[#00BBE3]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
      </svg>
    </div>
    
    <div className="absolute bottom-60 left-32 opacity-15">
      <svg className="w-12 h-12 text-[#00425A]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
      </svg>
    </div>
  </div>
)

export default DecorativeIcons
