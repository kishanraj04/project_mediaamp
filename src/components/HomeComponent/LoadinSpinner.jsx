import '../style/loadin.css'
import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner" />
    </div>
  );
};

export default LoadingSpinner;

  