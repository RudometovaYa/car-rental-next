'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Car } from '@/types/car';
import { useCarStore } from '@/lib/store/carStore';
import css from './CarCard.module.css';
import Image from 'next/image';

interface CarCardProps {
  car: Car;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const { favorites, addFavorite, removeFavorite } = useCarStore();
  const isFavorite = favorites.includes(car.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(car.id);
    } else {
      addFavorite(car.id);
    }
  };

  const formatMileage = (mileage: number) => {
    return mileage.toLocaleString() + ' km';
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
          width={400}
          height={200}
          objectFit="cover"
        />
        <button
          className={`${css.favoriteButton} ${isFavorite ? css.active : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          ♥
        </button>
      </div>

      <div className={css.details}>
        <h3 className={css.title}>
          {car.brand} {car.model}, {car.year}
        </h3>
        <p className={css.price}>${car.rentalPrice}</p>
        <p className={css.location}>
          {car.address} | {car.rentalCompany}
        </p>
        <p className={css.typeMileage}>
          {car.type} | {formatMileage(car.mileage)}
        </p>
        <Link className={css.readMore} href={`/catalog/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
