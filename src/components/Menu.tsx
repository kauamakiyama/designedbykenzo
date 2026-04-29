import React from 'react';
import { menuItems, type PageId } from '../data/navigation';
import '../styles/Menu.css';

interface MenuProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

const Menu: React.FC<MenuProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="navigation">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
          onClick={() => onPageChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
