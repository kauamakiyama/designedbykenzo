import React from 'react';
import '../styles/Logo.css';

interface LogoProps {
  onPageChange?: (page: string) => void;
}

const Logo: React.FC<LogoProps> = ({ onPageChange }) => {
  const handleLogoClick = () => {
    if (onPageChange) {
      onPageChange('home');
    }
  };

  return (
    <div className="logo" onClick={handleLogoClick}>
      <div className="logo-line">DESIGNED</div>
      <div className="logo-line">BY</div>
      <div className="logo-line">KENZO</div>
    </div>
  );
};

export default Logo;
