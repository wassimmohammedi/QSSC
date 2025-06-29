"use client";

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, username } = location.state || {};

  useEffect(() => {
    // Redirect to home if no user data (direct access)
    if (!userData) {
      navigate('/');
    }
  }, [userData, navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleJoinCommunity = () => {
    // Add your community/Discord/WhatsApp link here
    window.open('https://discord.gg/your-discord-link', '_blank');
  };

  if (!userData) {
    return null; // or a loading spinner
  }

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-content">
          {/* Success Icon */}
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#00ff88"/>
              <path d="M9 12l2 2 4-4" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="success-title">Welcome to QSSC!</h1>
          <p className="success-subtitle">
            Congratulations {username}! Your registration was successful.
          </p>

          {/* Registration Details */}
          <div className="registration-details">
            <h3>Registration Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Username:</span>
                <span className="detail-value">{userData.username}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{userData.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Level:</span>
                <span className="detail-value">{userData.level}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Club:</span>
                <span className="detail-value">{userData.club}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Laptop Access:</span>
                <span className="detail-value">{userData.hasLaptop ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="next-steps">
            <h3>What's Next?</h3>
            <ul>
              <li>Check your email for a welcome message</li>
              <li>Join our community channels</li>
              <li>Attend our next meeting</li>
              <li>Start your coding journey with us!</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button 
              className="btn btn-primary"
              onClick={handleJoinCommunity}
            >
              Join Community
            </button>
            <button 
              className="btn btn-secondary"
              onClick={handleGoHome}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
