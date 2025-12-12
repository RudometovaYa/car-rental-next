'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';
import MobileMenu from '@/components/MobileMenu/MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={css.header}>
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
          className={css.burgerButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <use xlinkHref="/symbol-defs.svg#icon-menu" />
          </svg>
        </button>

        <nav className={`${css.nav} ${isMenuOpen ? css.open : ''}`}>
          <Link
            href="/"
            className={`${css.navLink} ${pathname === '/' ? css.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`${css.navLink} ${pathname === '/catalog' ? css.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Catalog
          </Link>
        </nav>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} pathname={pathname} />
    </>
  );
}
