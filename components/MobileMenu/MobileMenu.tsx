'use client';

import Link from 'next/link';
import css from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: MobileMenuProps) {
  if (!isOpen) return null; // меню не рендериться, якщо закрите

  return (
    <div className={css.overlay}>
      <div className={css.menu}>
        {/* Хедер меню: логотип + крестик */}
        <div className={css.menuHeader}>
          <Link href="/" aria-label="Home">
            <svg
              className={css.logoSvg}
              width="104"
              height="16"
              viewBox="0 0 204 32"
            >
              <use xlinkHref="/symbol-defs.svg#icon-RentalCar" />
            </svg>
          </Link>

          <button
            className={css.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <use xlinkHref="/symbol-defs.svg#icon-cross" />
            </svg>
          </button>
        </div>

        {/* Навігація */}
        <nav className={css.menuNav}>
          <Link
            href="/"
            className={`${css.navLink} ${pathname === '/' ? css.active : ''}`}
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`${css.navLink} ${pathname === '/catalog' ? css.active : ''}`}
            onClick={onClose}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </div>
  );
}
