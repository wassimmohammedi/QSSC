// api.js
const API_BASE_URL = 'https://qssc-website.onrender.com';

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Optional: Function to get all users (for admin purposes)
export const getAllUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/1255789223457123484893754`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Test API connection
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    return response.ok;
  } catch (error) {
    console.error('Connection test failed:', error);
    return false;
  }
};
