"use client";
import React from 'react'
import DecorativeIcons from './DecorativeIcons'
import WorkshopStepper from './WorkshopStepper'

const ProgrammeSection = () => {
  // Use only the JSON data structure with dates from July 1-14
  const workshopsData = {
    "summer_camp_schedule": {
      "title": "Summer camp 2 schedule",
      "edition": "2025 edition",
      "days": [
        {
          "date": "01/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Quanta talk",
              "instructor": "Mr Mehdi\n&\nMr Adlane",
              "location": "Salle d'informatique 1"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "leadership",
              "instructor": "Mr Sarri Ayoub",
              "location": "Salle d'informatique 1"
            }
          ]
        },
        {
          "date": "02/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Projects managing",
              "instructor": "Injaz el Djazair",
              "location": "Salle d'informatique 1"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Dissection",
              "instructor": "Mrs Kariche\n&\nMrs Salem",
              "location": ".Labo Zoologie\n&\n.Labo micro 1"
            }
          ]
        },
        {
          "date": "03/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Microbiology 2",
              "instructor": "Mr Ait seddik",
              "location": "Labo microbiologie 1"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Histology",
              "instructor": "Mrs Madani",
              "location": "Labo microbiologie 1"
            }
          ]
        },
        {
          "date": "04/07/2025",
          "workshops": [],
          "status": "day_off"
        },
        {
          "date": "05/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Plogging",
              "instructor": "",
              "location": ""
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Plogging",
              "instructor": "",
              "location": ""
            }
          ],
          "status": "special_activity",
          "activity": "plogging"
        },
        {
          "date": "06/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Online activity",
              "instructor": "",
              "location": ""
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Online activity",
              "instructor": "",
              "location": ""
            }
          ],
          "status": "special_activity",
          "activity": "online activity"
        },
        {
          "date": "07/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Saponification",
              "instructor": "Mrs Salhi \n& \nMrs Rahmine",
              "location": "Labo biophysique"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Création d'une crème et pommade",
              "instructor": "Mrs Djouambi",
              "location": "Labo biophysique"
            }
          ]
        },
        {
          "date": "08/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "3d printing",
              "instructor": "Mr Ferkaoui Rabah & Mr Achraf Gueroui",
              "location": "Labo ondes"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Spaghetti bridge",
              "instructor": "Archibenevoles",
              "location": "Labo ondes"
            }
          ]
        },
        {
          "date": "09/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Arduino",
              "instructor": "Mrs Sara Alioua",
              "location": "Labo ondes"
            }
          ]
        },
        {
          "date": "10/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Ceremony day",
              "instructor": "",
              "location": ""
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Ceremony day",
              "instructor": "",
              "location": ""
            }
          ],
          "status": "ceremony_day"
        },
        {
          "date": "11/07/2025",
          "workshops": [],
          "status": "day_off"
        },
        {
          "date": "12/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Python",
              "instructor": "Ms Manel boudjellab",
              "location": "Salle d'informatique 1"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Public speaking\nX\nTeam work",
              "instructor": "Mr Mehamsadji Chakib",
              "location": "Salle d'informatique 1"
            }
          ]
        },
        {
          "date": "13/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Figma",
              "instructor": "Ms Anfel Meftah",
              "location": "Salle d'informatique 1"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Web\nDeveloppement 2",
              "instructor": "Mr Wassim chergui",
              "location": "Salle d'informatique 1"
            }
          ]
        },
        {
          "date": "14/07/2025",
          "workshops": [
            {
              "time_slot": "morning",
              "workshop_name": "Mini projects presentation",
              "instructor": "Directed by Ms Anfel Mokhtari",
              "location": "Salle d'informatique 1"
            },
            {
              "time_slot": "afternoon",
              "workshop_name": "Closing ceremony",
              "instructor": "Summer camp organizers",
              "location": "Amphi Ben Baatouche"
            }
          ]
        }
      ]
    }
  };

  return (
    <section id="programme" className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-[#00BBE3] py-10 md:py-12 px-4 relative overflow-hidden">
      <DecorativeIcons />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#00BBE3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#0083B0] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00425A] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00BBE3] to-[#0083B0] rounded-xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M6,6H18V8H6V6M6,10H18V12H6V10M6,14H18V16H6V14Z"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00425A] mb-3">
            Our Programme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive 14-day workshop schedule across multiple disciplines
          </p>
         
        </div>
        
        <WorkshopStepper workshops={workshopsData.summer_camp_schedule.days} />
        
        {/* Enhanced Call to Action */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-[#00BBE3] via-[#0083B0] to-[#00425A] rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Join Our Multi-Disciplinary Journey?</h3>
              <p className="text-base opacity-90 mb-6 max-w-xl mx-auto">
                Experience hands-on learning across IT, Biology, Chemistry, Engineering, and Design with expert instructors
              </p>
              
              {/* Subject Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
                  </svg>
                  <span className="text-xs font-medium">IT & Programming</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V7H9V9H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9M5,3H13V9H19V19H5V3Z"/>
                  </svg>
                  <span className="text-xs font-medium">Biology Labs</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,2V8H7V10H9C10,10 11,9 11,8V4H13V8C13,9 14,10 15,10H17V8H15V2H9M12,10.5V12.5C12,13.33 12.67,14 13.5,14H14.5C15.33,14 16,13.33 16,12.5V10.5C16,9.67 15.33,9 14.5,9H13.5C12.67,9 12,9.67 12,10.5M2,14V16H4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V16H22V14H2M6,16H18V20H6V16Z"/>
                  </svg>
                  <span className="text-xs font-medium">Engineering</span>
                </div>
                
                <div className="flex flex-col items-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
                  </svg>
                  <span className="text-xs font-medium">Design & Chemistry</span>
                </div>
              </div>
              
              {/* Main Features */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,7V13H13V7H11M11,15V17H13V15H11Z"/>
                  </svg>
                  <span>7 Different Disciplines</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16,4A4,4 0 0,1 20,8A4,4 0 0,1 16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4M16,14C20.42,14 24,15.79 24,18V20H8V18C8,15.79 11.58,14 16,14Z"/>
                  </svg>
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M7.5,18L12,15.5L16.5,18V6H7.5V18Z"/>
                  </svg>
                  <span>Certificates Provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProgrammeSection
