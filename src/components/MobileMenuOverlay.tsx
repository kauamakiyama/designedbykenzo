import React, { useEffect } from 'react';
import Menu from './Menu';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  currentPage: string;
  onPageChange: (page: string) => void;
  onClose: () => void;
}

const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({ 
  isOpen, 
  currentPage, 
  onPageChange, 
  onClose 
}) => {
  const handlePageChange = (page: string) => {
    onPageChange(page);
    onClose(); // Fecha o menu após a navegação
  };

  // Controlar scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Fechar menu com tecla ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
        {/* Menu */}
        <div className="mobile-menu-navigation">
          <Menu currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;
