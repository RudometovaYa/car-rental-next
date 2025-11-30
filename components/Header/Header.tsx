'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
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

      <nav className={css.nav}>
        <Link
          href="/"
          className={`${css.navLink} ${pathname === '/' ? css.active : ''}`}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className={`${css.navLink} ${
            pathname === '/catalog' ? css.active : ''
          }`}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
}
/* 'use client';

import Link from 'next/link';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        <div className={css.logo}>
          Rental<span className={css.logospan}>Car</span>
        </div>
      </Link>

      <nav className={css.nav}>
        <Link href="/" className={css.navLink}>
          Home
        </Link>
        <Link href="/catalog">
          <button className={css.catalogButton}>Catalog</button>
        </Link>
      </nav>
    </header>
  );
} */
