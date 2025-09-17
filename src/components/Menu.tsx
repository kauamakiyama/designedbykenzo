import React from 'react';
import '../styles/Menu.css';

interface MenuProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'works', label: 'Works' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
  ];

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
