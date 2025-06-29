"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './Success.css';

const Success = () => {
  const router = useRouter();

  // ⛔ location.state doesn't exist in Next.js.
  // ✅ Use localStorage or a global store instead
  const userData =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('userData'))
      : null;

  const username = userData?.username;

  useEffect(() => {
    if (!userData) {
      router.push('/');
    }
  }, [userData, router]);

  const handleGoHome = () => {
    router.push('/');
  };

  const handleJoinCommunity = () => {
    window.open('https://discord.gg/your-discord-link', '_blank');
  };

  if (!userData) return null;

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-content">
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#00ff88" />
              <path
                d="M9 12l2 2 4-4"
                stroke="#0a0a0a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="success-title">Welcome to QSSC!</h1>
          <p className="success-subtitle">
            Congratulations {username}! Your registration was successful.
          </p>

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
                <span className="detail-value">
                  {userData.hasLaptop ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          </div>

          <div className="next-steps">
            <h3>What's Next?</h3>
            <ul>
              <li>Check your email for a welcome message</li>
              <li>Join our community channels</li>
              <li>Attend our next meeting</li>
              <li>Start your coding journey with us!</li>
            </ul>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary" onClick={handleJoinCommunity}>
              Join Community
            </button>
            <button className="btn btn-secondary" onClick={handleGoHome}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
