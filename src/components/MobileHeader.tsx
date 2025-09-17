import React from 'react';
import Logo from './Logo';

interface MobileHeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  currentPage, 
  onPageChange, 
  onMenuToggle, 
  isMenuOpen 
}) => {
  return (
    <div className="mobile-header">
      {/* Logo à esquerda */}
      <div className="mobile-header-logo">
        <Logo onPageChange={onPageChange} />
      </div>

      {/* Botão de menu à direita */}
      <button 
        className="mobile-menu-button"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default MobileHeader;
