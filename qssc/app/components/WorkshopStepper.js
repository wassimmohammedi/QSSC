"use client";
import React, { useState } from 'react'

const WorkshopStepper = ({ workshops = [] }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [expandedSteps, setExpandedSteps] = useState({})

  if (!workshops || workshops.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-500">
        <p>No workshops available</p>
      </div>
    )
  }

  const formatDateForStepper = (dateString) => {
    // Convert DD/MM/YYYY to Date object
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    const dayNum = date.getDate()
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
    return { day: dayNum, dayName }
  }

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    })
  }

  const getWorkshopTitle = (workshop) => {
    if (workshop.status === 'day_off') return 'Day Off'
    if (workshop.status === 'ceremony_day') return 'Ceremony Day'
    if (workshop.status === 'special_activity') {
      return workshop.activity === 'plogging' ? 'Plogging Activity' : 'Online Activity'
    }
    
    // Create title from workshop names
    const workshopNames = workshop.workshops.map(w => w.workshop_name)
    if (workshopNames.length > 1) {
      return workshopNames.join(' & ')
    }
    return workshopNames[0] || 'Workshop'
  }

  const createProgrammePath = (workshop) => {
    if (workshop.status === 'day_off' || workshop.workshops.length === 0) {
      return []
    }

    return workshop.workshops.map(w => ({
      activity: w.workshop_name,
      time: w.time_slot === 'morning' ? '8:30 AM - 12:30 PM' : '2:00 PM - 6:00 PM',
      description: `Instructor: ${w.instructor || 'TBA'} | Location: ${w.location || 'TBA'}`,
      timeSlot: w.time_slot,
      icon: getActivityIcon(w.workshop_name)
    }))
  }

  const getActivityIcon = (activityName) => {
    const activity = activityName.toLowerCase()
    
    if (activity.includes('python') || activity.includes('web') || activity.includes('figma') || activity.includes('online')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
        </svg>
      )
    }
    
    if (activity.includes('leadership') || activity.includes('managing') || activity.includes('speaking') || activity.includes('team')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4A4,4 0 0,1 20,8A4,4 0 0,1 16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4M16,14C20.42,14 24,15.79 24,18V20H8V18C8,15.79 11.58,14 16,14Z"/>
        </svg>
      )
    }
    
    if (activity.includes('microbiology') || activity.includes('histology') || activity.includes('dissection')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,2V8H7V10H9C10,10 11,9 11,8V4H13V8C13,9 14,10 15,10H17V8H15V2H9M12,10.5V12.5C12,13.33 12.67,14 13.5,14H14.5C15.33,14 16,13.33 16,12.5V10.5C16,9.67 15.33,9 14.5,9H13.5C12.67,9 12,9.67 12,10.5M2,14V16H4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V16H22V14H2M6,16H18V20H6V16Z"/>
        </svg>
      )
    }
    
    if (activity.includes('saponification') || activity.includes('crème') || activity.includes('pommade')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z"/>
        </svg>
      )
    }
    
    if (activity.includes('3d') || activity.includes('arduino') || activity.includes('bridge')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"/>
        </svg>
      )
    }
    
    if (activity.includes('quanta') || activity.includes('physics')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,6H13V8H11V6M11,10H13V18H11V10Z"/>
        </svg>
      )
    }
    
    if (activity.includes('plogging')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5,5.5C14.59,5.5 15.5,4.59 15.5,3.5S14.59,1.5 13.5,1.5S11.5,2.41 11.5,3.5S12.41,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7.08C13.29,6.38 12.69,6 12,6S10.71,6.38 10.31,7.08L7.31,12.58C7.11,12.84 7.11,13.16 7.31,13.42S7.84,13.58 8.1,13.38L9.89,19.38Z"/>
        </svg>
      )
    }
    
    if (activity.includes('presentation') || activity.includes('ceremony')) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2,3H22C23.05,3 24,3.95 24,5V17C24,18.05 23.05,19 22,19H13V21H16V23H8V21H11V19H2C0.95,19 0,18.05 0,17V5C0,3.95 0.95,3 2,3M2,5V17H22V5H2Z"/>
        </svg>
      )
    }
    
    // Default icon for general activities
    return (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M7.5,18L12,15.5L16.5,18V6H7.5V18Z"/>
      </svg>
    )
  }

  const getTimeOnly = (timeString) => {
    if (!timeString) return "9:00"
    const time = timeString.split(' - ')[0]
    return time.replace(' AM', '').replace(' PM', '')
  }

  const toggleStep = (stepIndex) => {
    setExpandedSteps(prev => ({
      ...prev,
      [stepIndex]: !prev[stepIndex]
    }))
    setCurrentStep(stepIndex)
  }

  const getWorkshopColor = (workshop, index) => {
    if (workshop.status === 'day_off') return 'from-gray-400 to-gray-500'
    if (workshop.status === 'ceremony_day') return 'from-purple-500 to-purple-600'
    if (workshop.status === 'special_activity') return 'from-green-500 to-green-600'
    
    // Alternating between your 3 blue colors
    const blueColors = [
      'from-[#00BBE3] to-[#0083B0]',    // Light to medium blue
      'from-[#0083B0] to-[#00425A]',    // Medium to dark blue  
      'from-[#00425A] to-[#0083B0]',    // Dark to medium blue
    ]
    
    return blueColors[index % blueColors.length]
  }

  const getMainWorkshopIcon = (workshop) => {
    if (workshop.status === 'day_off') {
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.76,4.84L4.96,3.05L3.12,4.89L5.05,6.82L6.76,4.84M1,10.5V12.5H4V10.5H1M11,0.55H13V3.5H11V0.55M20.84,4.61L19.05,6.4L20.84,8.2L22.64,6.41L20.84,4.61M17.24,18.16L19.03,19.95L20.87,18.11L18.94,16.18L17.24,18.16M20,10.5V12.5H23V10.5H20M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M12,15.5A4,4 0 0,1 8,11.5A4,4 0 0,1 12,7.5A4,4 0 0,1 16,11.5A4,4 0 0,1 12,15.5M12,20.5H11V23.5H13V20.5H12M6.4,20.84L4.61,19.05L2.81,20.84L4.6,22.64L6.4,20.84Z"/>
        </svg>
      )
    }
    
    if (workshop.status === 'ceremony_day') {
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,16L3,14L5,12L6.5,13.5L11,9L16,14L13.5,16.5L11,14L8.5,16.5L5,16M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
        </svg>
      )
    }
    
    if (workshop.status === 'special_activity') {
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5,5.5C14.59,5.5 15.5,4.59 15.5,3.5S14.59,1.5 13.5,1.5S11.5,2.41 11.5,3.5S12.41,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7.08C13.29,6.38 12.69,6 12,6S10.71,6.38 10.31,7.08L7.31,12.58C7.11,12.84 7.11,13.16 7.31,13.42S7.84,13.58 8.1,13.38L9.89,19.38Z"/>
        </svg>
      )
    }
    
    // Default workshop icon
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M7.5,18L12,15.5L16.5,18V6H7.5V18Z"/>
      </svg>
    )
  }

  return (
    <div className="flex flex-col space-y-3">
      {workshops.map((workshop, index) => {
        const { day, dayName } = formatDateForStepper(workshop.date)
        const programmePath = createProgrammePath(workshop)
        const workshopTitle = getWorkshopTitle(workshop)
        const colorClass = getWorkshopColor(workshop, index)
        
        return (
          <div key={index} className="flex items-start">
            {/* Date-based Step indicator - CIRCLE */}
            <div className="flex flex-col items-center mr-3 flex-shrink-0">
              <div className="relative">
                <div 
                  className={`w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold text-xs shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    expandedSteps[index]
                      ? `bg-gradient-to-br ${colorClass} text-white`
                      : 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-700 hover:from-gray-400 hover:to-gray-500'
                  }`}
                  onClick={() => toggleStep(index)}
                >
                  <span className="text-lg font-bold">{day}</span>
                  <span className="text-[10px] opacity-80">{dayName}</span>
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full blur-sm opacity-20 ${
                  expandedSteps[index] ? 'bg-[#00BBE3]' : 'bg-gray-400'
                }`}></div>
              </div>
              
              {/* Connecting Line */}
              {index !== workshops.length - 1 && (
                <div className="relative mt-1">
                  <div className="w-0.5 bg-gradient-to-b from-[#00BBE3] via-[#0083B0] to-[#00425A] rounded-full shadow-sm" 
                       style={{
                         height: expandedSteps[index] ? `${programmePath.length * 40 + 25}px` : '25px',
                         transition: 'height 0.3s ease'
                       }}>
                  </div>
                  {/* Time progression dots */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#00BBE3] rounded-full animate-pulse"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-[#0083B0] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              )}
            </div>
            
            {/* Main Workshop content - REDUCED WIDTH */}
            <div className="flex-1 max-w-md">
              <div 
                className={`bg-gradient-to-r ${colorClass} rounded-lg p-3 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${
                  expandedSteps[index] ? 'ring-2 ring-[#00BBE3]/30' : ''
                }`}
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center justify-between text-white">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      {getMainWorkshopIcon(workshop)}
                      <h3 className="text-sm md:text-base font-bold ml-2">{workshopTitle}</h3>
                    </div>
                    <div className="flex items-center text-white/90 text-xs">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M7,7H17V9H7V7M7,11H17V13H7V11M7,15H14V17H7V15Z"/>
                      </svg>
                      <span className="font-medium">{formatDate(workshop.date)}</span>
                    </div>
                    {workshop.status && (
                      <div className="flex items-center text-white/80 text-xs mt-1">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,7V13H13V7H11M11,15V17H13V15H11Z"/>
                        </svg>
                        <span className="capitalize">{workshop.status.replace('_', ' ')}</span>
                      </div>
                    )}
                  </div>
                  <div className="ml-3 flex items-center justify-center">
                    {/* Beautiful, bigger white arrow */}
                    <div className="relative">
                      <svg 
                        className={`w-8 h-8 text-white transition-all duration-500 ease-in-out transform ${
                          expandedSteps[index] ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        } hover:scale-125 drop-shadow-lg`} 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}
                      >
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z"/>
                      </svg>
                      {/* Subtle glow effect for the arrow */}
                      <div className={`absolute inset-0 rounded-full blur-sm opacity-30 transition-opacity duration-300 ${
                        expandedSteps[index] ? 'bg-white' : 'bg-transparent'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programme Path with time-based progression and icons */}
              {expandedSteps[index] && programmePath.length > 0 && (
                <div className="ml-3 mt-2 space-y-1">
                  {programmePath.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center">
                      <div className={`w-10 h-6 rounded-sm bg-white border-2 flex items-center justify-center mr-2 flex-shrink-0 ${
                        activity.timeSlot === 'morning' ? 'border-[#00BBE3]' : 'border-[#0083B0]'
                      }`}>
                        <span className={`text-[9px] font-bold ${
                          activity.timeSlot === 'morning' ? 'text-[#00BBE3]' : 'text-[#0083B0]'
                        }`}>
                          {getTimeOnly(activity.time)}
                        </span>
                      </div>
                      
                      <div className={`bg-white rounded-md p-2 flex-1 shadow-sm border-l-2 max-w-xs ${
                        activity.timeSlot === 'morning' ? 'border-[#00BBE3]' : 'border-[#0083B0]'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className={`mr-2 ${
                              activity.timeSlot === 'morning' ? 'text-[#00BBE3]' : 'text-[#0083B0]'
                            }`}>
                              {activity.icon}
                            </span>
                            <span className="font-medium text-[#00425A] text-xs">{activity.activity}</span>
                          </div>
                          <span className={`text-[10px] font-medium ${
                            activity.timeSlot === 'morning' ? 'text-[#00BBE3]' : 'text-[#0083B0]'
                          }`}>
                            {activity.timeSlot === 'morning' ? 'AM' : 'PM'}
                          </span>
                        </div>
                        {activity.description && (
                          <p className="text-[10px] text-gray-600 mt-1">{activity.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Special message for day off or ceremony */}
              {expandedSteps[index] && programmePath.length === 0 && (
                <div className="ml-3 mt-2">
                  <div className="bg-white rounded-md p-3 shadow-sm border-l-4 border-gray-400">
                    <p className="text-sm text-gray-600 text-center">
                      {workshop.status === 'day_off' ? '🌴 Enjoy your day off!' : '🎉 Special ceremony day!'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WorkshopStepper
