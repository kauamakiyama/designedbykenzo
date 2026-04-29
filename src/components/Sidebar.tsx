import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MobileHeader from './MobileHeader';
import MobileMenuOverlay from './MobileMenuOverlay';
import useSiteNavigation from '../hooks/useSiteNavigation';

const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, goToPage } = useSiteNavigation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Mobile */}
      <MobileHeader 
        onPageChange={goToPage}
        onMenuToggle={handleMobileMenuToggle}
        isMenuOpen={isMobileMenuOpen}
      />

      {/* Menu Overlay Mobile */}
      <MobileMenuOverlay 
        isOpen={isMobileMenuOpen}
        currentPage={currentPage}
        onPageChange={goToPage}
        onClose={handleMobileMenuClose}
      />

      {/* Sidebar Desktop */}
      <div className="sidebar-container">
        {/* Logo */}
        <div className="sidebar-logo">
          <Logo onPageChange={goToPage} />
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          <Menu currentPage={currentPage} onPageChange={goToPage} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
