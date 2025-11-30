'use client';

import { useEffect } from 'react';
import { useCarStore } from '@/lib/store/carStore';
import Filters from '@/components/Filters/Filters';
import CarCard from '@/components/CarCard/CarCard';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import css from './page.module.css';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

export default function CatalogPage() {
  const { cars, page, totalPages, loading, error, fetchCars, setPage } =
    useCarStore();

  useEffect(() => {
    if (cars.length === 0) {
      fetchCars();
    }
  }, [cars.length, fetchCars]);

  const handleLoadMore = async () => {
    if (page >= totalPages) return;

    setPage(page + 1);

    await fetchCars(true);
  };

  return (
    <div className={css.page}>
      <h1 className={css.title}>Car Catalog</h1>
      <Filters />
      {loading && cars.length === 0 && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className={css.grid}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      {cars.length > 0 && page < totalPages && (
        <div className={css.loadMoreWrapper}>
          <LoadMoreButton onClick={handleLoadMore} loading={loading} />
        </div>
      )}
      {!loading && cars.length === 0 && !error && (
        <p className={css.infoText}>No cars found.</p>
      )}
    </div>
  );
}
