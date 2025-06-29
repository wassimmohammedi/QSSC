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

  const formatDateForStepper = (date) => {
    const day = date.getDate()
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
    return { day, dayName }
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    })
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

  return (
    <div className="flex flex-col space-y-3">
      {workshops.map((workshop, index) => {
        const { day, dayName } = formatDateForStepper(workshop.date)
        
        return (
          <div key={workshop.id || index} className="flex items-start">
            {/* Date-based Step indicator - CIRCLE */}
            <div className="flex flex-col items-center mr-3 flex-shrink-0">
              <div className="relative">
                <div 
                  className={`w-16 h-16 rounded-full flex flex-col items-center justify-center font-bold text-xs shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    expandedSteps[index]
                      ? 'bg-gradient-to-br from-[#00BBE3] to-[#0083B0] text-white'
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
                         height: expandedSteps[index] ? `${(workshop.programmePath?.length || 0) * 40 + 25}px` : '25px',
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
                className={`bg-gradient-to-r from-[#00BBE3] to-[#0083B0] rounded-lg p-3 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${
                  expandedSteps[index] ? 'ring-2 ring-[#00BBE3]/30' : ''
                }`}
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center justify-between text-white">
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base font-bold mb-1">{workshop.title}</h3>
                    <div className="flex items-center text-white/90 text-xs">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M7,7H17V9H7V7M7,11H17V13H7V11M7,15H14V17H7V15Z"/>
                      </svg>
                      <span className="font-medium">{formatDate(workshop.date)}</span>
                    </div>
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

              {/* Programme Path with time-based progression - SQUARE indicators */}
              {expandedSteps[index] && workshop.programmePath && (
                <div className="ml-3 mt-2 space-y-1">
                  {workshop.programmePath.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center">
                      <div className="w-10 h-6 rounded-sm bg-white border-2 border-[#00BBE3] flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-[9px] font-bold text-[#00BBE3]">
                          {getTimeOnly(activity.time)}
                        </span>
                      </div>
                      
                      <div className="bg-white rounded-md p-2 flex-1 shadow-sm border-l-2 border-[#00BBE3] max-w-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-[#00425A] text-xs">{activity.activity}</span>
                          <span className="text-[10px] text-[#0083B0] font-medium">{activity.time}</span>
                        </div>
                        {activity.description && (
                          <p className="text-[10px] text-gray-600 mt-1">{activity.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
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