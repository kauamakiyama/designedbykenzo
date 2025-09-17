import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MobileHeader from './MobileHeader';
import MobileMenuOverlay from './MobileMenuOverlay';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        currentPage={currentPage}
        onPageChange={onPageChange}
        onMenuToggle={handleMobileMenuToggle}
        isMenuOpen={isMobileMenuOpen}
      />

      {/* Menu Overlay Mobile */}
      <MobileMenuOverlay 
        isOpen={isMobileMenuOpen}
        currentPage={currentPage}
        onPageChange={onPageChange}
        onClose={handleMobileMenuClose}
      />

      {/* Sidebar Desktop */}
      <div className="sidebar-container" style={{
        width: '20%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '2%',
        marginTop: '5%',
        paddingLeft: '7%',
        height: '100vh'
      }}>
        {/* Logo */}
        <div className="sidebar-logo">
          <Logo onPageChange={onPageChange} />
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          <Menu currentPage={currentPage} onPageChange={onPageChange} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
