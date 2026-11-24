import React, { useLayoutEffect, useRef } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import MobileHeader from './MobileHeader';
import useSiteNavigation from '../hooks/useSiteNavigation';

// Moves the menu so its text is centered on the first screen of the page, the same
// height as the Home carousel. The menu position depends on the viewport size,
// so it is measured at runtime.
const useCenterMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const align = () => {
      menu.style.transform = '';
      // Sidebar is hidden on mobile: keep the default layout
      if (menu.offsetParent === null) return;

      // Use the text itself: the menu box includes a bottom margin under the last item
      const items = menu.querySelectorAll<HTMLElement>('.nav-item');
      if (!items.length) return;
      const textTop = items[0].getBoundingClientRect().top;
      const textBottom = items[items.length - 1].getBoundingClientRect().bottom;
      // The sidebar is sticky, so viewport coordinates stay the same when the page is scrolled
      const textCenter = (textTop + textBottom) / 2;
      menu.style.transform = `translateY(${window.innerHeight / 2 - textCenter}px)`;
    };

    align();
    window.addEventListener('resize', align);
    return () => window.removeEventListener('resize', align);
  }, []);

  return menuRef;
};

const Sidebar: React.FC = () => {
  const { currentPage, goToPage } = useSiteNavigation();
  const menuRef = useCenterMenu();

  return (
    <>
      {/* Header Mobile */}
      <MobileHeader currentPage={currentPage} onPageChange={goToPage} />

      {/* Sidebar Desktop */}
      <div className="sidebar-container">
        {/* Logo */}
        <div className="sidebar-logo">
          <Logo onPageChange={goToPage} />
        </div>

        {/* Menu */}
        <div ref={menuRef} className="sidebar-menu">
          <Menu currentPage={currentPage} onPageChange={goToPage} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
