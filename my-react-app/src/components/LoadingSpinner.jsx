import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading weather data...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
