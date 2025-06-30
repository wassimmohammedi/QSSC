"use client";
import React, { useState, useEffect } from 'react'

const RegistrationsPage = () => {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [statusUpdates, setStatusUpdates] = useState({})

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('https://qssc-website.onrender.com/1255789223457123484893754')
        if (!response.ok) {
          throw new Error('Failed to fetch registrations')
        }
        const data = await response.json()
        setRegistrations(data)
        
        // Initialize status for all registrations as pending
        const initialStatus = {}
        data.forEach(reg => {
          initialStatus[reg.id] = 'pending'
        })
        setStatusUpdates(initialStatus)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRegistrations()
  }, [])

  const handleStatusChange = (id, status) => {
    setStatusUpdates(prev => ({
      ...prev,
      [id]: status
    }))
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getCardBackground = (status) => {
    switch (status) {
      case 'accepted':
        return 'bg-gradient-to-r from-green-100 to-green-200 border-green-400'
      case 'rejected':
        return 'bg-gradient-to-r from-red-100 to-red-200 border-red-400'
      default:
        return 'bg-white border-gray-200'
    }
  }

  const getStatusButtonStyle = (currentStatus, buttonStatus) => {
    if (currentStatus === buttonStatus) {
      return buttonStatus === 'accepted' 
        ? 'bg-green-600 text-white shadow-lg hover:bg-green-700' 
        : 'bg-red-600 text-white shadow-lg hover:bg-red-700'
    }
    return buttonStatus === 'accepted'
      ? 'bg-green-200 text-green-800 hover:bg-green-300'
      : 'bg-red-200 text-red-800 hover:bg-red-300'
  }

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`
  }

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-[#00BBE3] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#00425A] mx-auto mb-4"></div>
          <p className="text-[#00425A] text-lg font-medium">Loading registrations...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-[#00BBE3] flex items-center justify-center">
        <div className="text-center bg-white rounded-xl p-8 shadow-lg max-w-md mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#00425A] mb-2">Error Loading Data</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-[#00BBE3] py-10 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00BBE3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#0083B0] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00425A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00BBE3] to-[#0083B0] rounded-xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16,4A4,4 0 0,1 20,8A4,4 0 0,1 16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4M16,14C20.42,14 24,15.79 24,18V20H8V18C8,15.79 11.58,14 16,14Z"/>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#00425A] mb-3">
            Workshop Registrations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Review and manage participant registrations for the summer workshop program
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-[#00425A] font-medium">{registrations.length} Total</span>
            </div>
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
              <span className="text-[#00425A] font-medium">
                {Object.values(statusUpdates).filter(s => s === 'accepted').length} Accepted
              </span>
            </div>
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
              <span className="text-[#00425A] font-medium">
                {Object.values(statusUpdates).filter(s => s === 'rejected').length} Rejected
              </span>
            </div>
          </div>
        </div>

        {/* Registration List */}
        <div className="space-y-4">
          {registrations.map((registration, index) => (
            <div
              key={registration.id}
              className={`${getCardBackground(statusUpdates[registration.id])} rounded-xl shadow-md border-2 transition-all duration-500 ease-in-out hover:shadow-lg`}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Left Section - User Info */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Name and Level */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                        <div className="bg-gradient-to-r from-[#00BBE3] to-[#0083B0] text-white px-2 py-1 rounded-md text-xs font-medium">
                          {registration.level}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#00425A]">{registration.username}</h3>
                      <p className="text-sm text-gray-600 capitalize">{registration.club} Club</p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div 
                        className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-[#00BBE3] transition-colors duration-200"
                        onClick={() => handleEmailClick(registration.email)}
                        title="Click to send email"
                      >
                        <svg className="w-4 h-4 mr-2 text-[#00BBE3] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                        </svg>
                        <span className="truncate hover:underline">{registration.email}</span>
                      </div>
                      <div 
                        className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-[#00BBE3] transition-colors duration-200"
                        onClick={() => handlePhoneClick(registration.phone)}
                        title="Click to call"
                      >
                        <svg className="w-4 h-4 mr-2 text-[#00BBE3] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                        </svg>
                        <span className="hover:underline">{registration.phone}</span>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-[#00425A] uppercase tracking-wide">Motivation</h4>
                      <p className="text-sm text-gray-700 line-clamp-2">{registration.motivation}</p>
                    </div>

                    {/* Equipment & Date */}
                    <div className="space-y-2">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        registration.hasLaptop 
                          ? 'bg-green-200 text-green-900' 
                          : 'bg-orange-200 text-orange-900'
                      }`}>
                        {registration.hasLaptop ? (
                          <>
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
                            </svg>
                            Has Laptop
                          </>
                        ) : (
                          <>
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                            </svg>
                            No Laptop
                          </>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        <div className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16,1V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M19,19H5V8H19V19Z"/>
                          </svg>
                          {formatDate(registration.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:w-32">
                    <button
                      onClick={() => handleStatusChange(registration.id, 'accepted')}
                      className={`${getStatusButtonStyle(statusUpdates[registration.id], 'accepted')} px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                      </svg>
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusChange(registration.id, 'rejected')}
                      className={`${getStatusButtonStyle(statusUpdates[registration.id], 'rejected')} px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                      </svg>
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {registrations.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16,4A4,4 0 0,1 20,8A4,4 0 0,1 16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4M16,14C20.42,14 24,15.79 24,18V20H8V18C8,15.79 11.58,14 16,14Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#00425A] mb-2">No Registrations Found</h3>
            <p className="text-gray-600">There are currently no workshop registrations to display.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RegistrationsPage
