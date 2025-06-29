"use client";
import React, { useState } from 'react'
import DecorativeIcons from './DecorativeIcons'
import { registerUser } from './api'

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    level: '',
    phone: '',
    club: '',
    hasLaptop: false, // Changed to boolean to match server
    motivation: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState({ show: false, type: '', message: '' })
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [userData, setUserData] = useState(null)

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message })
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateForm = () => {
    const { username, email, level, phone, club, motivation } = formData
    
    if (!username.trim()) {
      showAlert('error', 'Username is required')
      return false
    }
    
    if (!email.trim()) {
      showAlert('error', 'Email is required')
      return false
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showAlert('error', 'Please enter a valid email address')
      return false
    }
    
    if (!level) {
      showAlert('error', 'Please select your academic level')
      return false
    }
    
    if (!phone.trim()) {
      showAlert('error', 'Phone number is required')
      return false
    }
    
    if (phone.trim().length < 5) {
      showAlert('error', 'Phone number must be at least 5 characters long')
      return false
    }
    
    if (!club) {
      showAlert('error', 'Please select your club preference')
      return false
    }
    
    if (!motivation.trim()) {
      showAlert('error', 'Motivation is required')
      return false
    }
    
    if (motivation.length < 10) {
      showAlert('error', 'Motivation must be at least 10 characters long')
      return false
    }
    
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      const result = await registerUser(formData)
      setUserData(result)
      setRegistrationSuccess(true)
    } catch (error) {
      if (error.message.includes('already exists')) {
        showAlert('error', 'This email is already registered. Please use a different email.')
      } else if (error.message.includes('validation')) {
        showAlert('error', 'Please check your input and try again.')
      } else {
        showAlert('error', `Registration failed: ${error.message}`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Success Page Component
  if (registrationSuccess) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#00425A] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-5 w-20 h-20 bg-[#00ff88] rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 w-32 h-32 bg-[#00BBE3] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-[#0083B0] rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00ff88] to-[#00BBE3] rounded-full mb-4 shadow-lg animate-bounce">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                </svg>
              </div>
              <h1 className="text-[#00425A] text-3xl md:text-4xl font-bold mb-2">Welcome to QSSC!</h1>
              <p className="text-gray-600 text-lg">Congratulations {formData.username}! Your registration was successful.</p>
            </div>

            {/* Registration Details */}
            <div className="bg-gradient-to-r from-[#00BBE3]/10 to-[#0083B0]/10 rounded-2xl p-6 mb-6">
              <h3 className="text-[#00425A] text-xl font-bold mb-4 text-center">Registration Details</h3>
              <div className="grid gap-4">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Username:</span>
                  <span className="text-[#00425A] font-bold">{userData.username}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Email:</span>
                  <span className="text-[#00425A] font-bold">{userData.email}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Level:</span>
                  <span className="text-[#00425A] font-bold">{userData.level}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Club:</span>
                  <span className="text-[#00425A] font-bold">{userData.club}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Laptop Access:</span>
                  <span className="text-[#00425A] font-bold">{userData.hasLaptop ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-[#00ff88]/10 to-[#00BBE3]/10 rounded-2xl p-6 mb-6">
              <h3 className="text-[#00425A] text-xl font-bold mb-4 text-center">What's Next?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-white/50 rounded-xl">
                  <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Check your email for welcome message</span>
                </div>
                <div className="flex items-center p-3 bg-white/50 rounded-xl">
                  <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Join our community channels</span>
                </div>
                <div className="flex items-center p-3 bg-white/50 rounded-xl">
                  <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Attend our next meeting</span>
                </div>
                <div className="flex items-center p-3 bg-white/50 rounded-xl">
                  <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Start your scientific journey</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00BBE3] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://discord.gg/your-discord-link', '_blank')}
              >
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                  </svg>
                  Join Community
                </div>
              </button>
              <button 
                className="px-8 py-4 bg-transparent border-2 border-[#00425A] text-[#00425A] font-bold rounded-2xl hover:bg-[#00425A] hover:text-white transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.reload()}
              >
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"/>
                  </svg>
                  Register Another User
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Registration Form (existing code with updates)
  return (
    <section id="registration" className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-[#00BBE3] flex items-center justify-center p-4 relative overflow-hidden">
      <DecorativeIcons />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 w-20 h-20 bg-[#00BBE3] rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-32 h-32 bg-[#0083B0] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-[#00425A] rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Alert */}
        {alert.show && (
          <div className={`mb-6 p-4 rounded-2xl shadow-lg transform transition-all duration-500 animate-bounce ${
            alert.type === 'success' 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white border-2 border-green-300' 
              : 'bg-gradient-to-r from-red-500 to-red-600 text-white border-2 border-red-300'
          }`}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                alert.type === 'success' ? 'bg-green-400' : 'bg-red-400'
              }`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {alert.type === 'success' ? (
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  ) : (
                    <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                  )}
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm">
                  {alert.type === 'success' ? 'Success!' : 'Error!'}
                </p>
                <p className="text-sm opacity-90">{alert.message}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00BBE3] to-[#0083B0] rounded-2xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"/>
              </svg>
            </div>
            <h1 className="text-[#00425A] text-2xl md:text-3xl font-bold mb-2">Join QSSC 2025</h1>
            <p className="text-gray-600 text-sm">Register now and start your scientific journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className="relative">
              <svg className="w-5 h-5 text-[#00BBE3] absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
              </svg>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#00BBE3] focus:ring-2 focus:ring-[#00BBE3]/20 transition-all duration-300"
                required
              />
            </div>
            
            {/* Email */}
            <div className="relative">
              <svg className="w-5 h-5 text-[#00BBE3] absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.11,4 20,4Z"/>
              </svg>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#00BBE3] focus:ring-2 focus:ring-[#00BBE3]/20 transition-all duration-300"
                required
              />
            </div>

            {/* Level and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <svg className="w-5 h-5 text-[#00BBE3] absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                </svg>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#00BBE3] focus:ring-2 focus:ring-[#00BBE3]/20 transition-all duration-300 appearance-none"
                  required
                >
                  <option value="">Select Level</option>
                  <option value="L1">L1 (First Year University)</option>
                  <option value="L2">L2 (Second Year University)</option>
                  <option value="L3">L3 (Third Year University)</option>
                  <option value="M1">M1 (Master's First Year)</option>
                  <option value="M2">M2 (Master's Second Year)</option>
                  <option value="PhD">PhD (Doctoral Studies)</option>
                  <option value="High School">High School</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
              
              <div className="relative">
                <svg className="w-5 h-5 text-[#00BBE3] absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="0559375266"
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#00BBE3] focus:ring-2 focus:ring-[#00BBE3]/20 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Club Selection and Laptop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <svg className="w-5 h-5 text-[#00BBE3] absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                </svg>
                <select
                  name="club"
                  value={formData.club}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 focus:outline-none focus:border-[#00BBE3] focus:ring-2 focus:ring-[#00BBE3]/20 transition-all duration-300 appearance-none"
                  required
                >
                  <option value="">Select Club</option>
                  <option value="quanta">Quanta Member</option>
                  <option value="non-quanta">Non-Quanta</option>
                </select>
              </div>

              {/* Laptop Checkbox - Updated to match server */}
              <div className="relative flex items-center">
                <div className="flex items-center h-full w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border-2 border-gray-200 bg-white">
                  <svg className="w-5 h-5 text-[#00BBE3] absolute left-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
                  </svg>
                  <input
                    type="checkbox"
                    name="hasLaptop"
                    checked={formData.hasLaptop}
                    onChange={handleInputChange}
                    className="mr-3 w-5 h-5 text-[#00BBE3] bg-gray-100 border-gray-300 rounded focus:ring-[#00BBE3] focus:ring-2"
                  />
                  <label className="text-gray-800 font-medium">I have a laptop</label>
                </div>
              </div>
            </div>

            {/* Motivation */}
            <div className="relative">
              <svg className="w-5 h-5 text-[#00BBE3] absolute left-4 top-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Your motivation to join QSSC... (minimum 10 characters)"
                rows="4"
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#00BBE3] focus:ring-2 focus:ring-[#00BBE3]/20 transition-all duration-300 resize-none"
                required
              />
              <div className="text-right mt-1">
                <span className={`text-xs ${formData.motivation.length >= 10 ? 'text-green-500' : 'text-gray-400'}`}>
                  {formData.motivation.length}/10 characters minimum
                </span>
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 md:py-4 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#00BBE3] to-[#0083B0] hover:from-[#0083B0] hover:to-[#00425A] shadow-[#00BBE3]/30'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registering...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  Register for QSSC 2025
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection
