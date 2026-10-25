import React from 'react';
import type { PageId } from '../data/navigation';
import OptimizedImage from './OptimizedImage';
import '../styles/Logo.css';

const LOGO_SRC = 'https://i.ibb.co/TMRRSJVc/LOGOS-30.png';

interface LogoProps {
  onPageChange?: (page: PageId) => void;
}

const Logo: React.FC<LogoProps> = ({ onPageChange }) => {
  const handleLogoClick = () => {
    if (onPageChange) {
      onPageChange('home');
    }
  };

  return (
    <div className="logo" onClick={handleLogoClick}>
      <OptimizedImage
        src={LOGO_SRC}
        alt="Kenzo"
        className="logo-image"
        priority
        width={800}
      />
    </div>
  );
};

export default Logo;
