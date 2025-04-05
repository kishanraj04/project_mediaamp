import React from 'react';
import '../style/loadin-spinner.css'

export const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner" />
    </div>
  );
};

export default LoadingSpinner;
