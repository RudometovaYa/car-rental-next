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

  const addressParts = car.address.split(',').map((part) => part.trim());
  const city = addressParts[addressParts.length - 2] || '';
  const country = addressParts[addressParts.length - 1] || '';

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
          width={276}
          height={268}
          objectFit="cover"
        />
        <button
          className={css.favoriteButton}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            width="24"
            height="24"
            aria-hidden="true"
            fill={isFavorite ? '#3470FF' : 'transparent'}
            stroke={isFavorite ? 'none' : '#f2f4f7'}
            strokeWidth={2}
          >
            <use
              href={
                isFavorite
                  ? '/symbol-defs.svg#icon-active-heart'
                  : '/symbol-defs.svg#icon-default-heart'
              }
            />
          </svg>
        </button>
      </div>

      <div className={css.details}>
        <div className={css.titleWrapper}>
          <h3 className={css.title}>
            {car.brand} <span className={css.model}>{car.model}</span>,{' '}
            {car.year}
          </h3>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>
        <p className={css.location}>
          {city} &nbsp;|&nbsp; {country} &nbsp;|&nbsp; {car.rentalCompany}
        </p>
        <p className={css.location}>
          {car.type} &nbsp;|&nbsp; {formatMileage(car.mileage)}
        </p>
        <Link className={css.readMore} href={`/catalog/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
