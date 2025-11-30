'use client';
import css from './page.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className={css.container}>
      <div className={css.hero}>
        <h1 className={css.heroTitle}>Find your perfect rental car</h1>
        <p className={css.heroSubtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={css.heroViewButton}>
          <Link href="/catalog" className={css.heroViewButtonText}>
            View Catalog
          </Link>
        </button>
      </div>
    </section>
  );
}
