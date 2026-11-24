import React from 'react';
import Logo from './Logo';
import { menuItems, type PageId } from '../data/navigation';

interface MobileHeaderProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

// Logo on the left, the pages as a single comma-separated line of text links on the right
const MobileHeader: React.FC<MobileHeaderProps> = ({ currentPage, onPageChange }) => (
  <div className="mobile-header">
    <div className="mobile-header-logo">
      <Logo onPageChange={onPageChange} />
    </div>

    <nav className="mobile-header-nav" aria-label="Main">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.id}>
          {/* Link and its comma stay together, so a line never starts with a comma */}
          <span className="mobile-header-item">
            <button
              type="button"
              className={`mobile-header-link ${currentPage === item.id ? 'active' : ''}`.trim()}
              aria-current={currentPage === item.id ? 'page' : undefined}
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </button>
            {index < menuItems.length - 1 && ','}
          </span>
          {index < menuItems.length - 1 && ' '}
        </React.Fragment>
      ))}
    </nav>
  </div>
);

export default MobileHeader;
