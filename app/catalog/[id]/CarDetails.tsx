'use client';

import type { Car } from '@/types/car';
import css from './CarDetails.module.css';

type CarDetailsProps = {
  car: Car;
};

const formatMileage = (value: number) =>
  value.toLocaleString('en-US').replace(/,/g, ' ');

export default function CarDetails({ car }: CarDetailsProps) {
  const addressParts = car.address.split(',').map((part) => part.trim());
  const cityCountry =
    addressParts.length >= 2 ? addressParts.slice(-2).join(', ') : car.address;

  const mileageFormatted = `${formatMileage(car.mileage)} km`;
  const priceFormatted = `$${car.rentalPrice}`;
  const allFeatures = [...car.accessories, ...car.functionalities];

  return (
    <div className={css.rightColumn}>
      <p className={css.title}>
        {car.brand} {car.model}, {car.year}
        <span className={css.idChip}>id: {car.id.slice(0, 4)}</span>
      </p>

      <div className={css.mainInfo}>
        <span className={css.location}>
          <svg className={css.locationIcon} aria-hidden="true">
            <use href="/symbol-defs.svg#icon-location" />
          </svg>
          {cityCountry}
        </span>

        <span className={css.mileage}>Mileage: {mileageFormatted}</span>
      </div>

      <div className={css.priceMileage}>
        <span className={css.price}>{priceFormatted}</span>
      </div>

      <p className={css.description}>{car.description}</p>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Rental Conditions</h2>
        <ul className={css.chipsList}>
          {car.rentalConditions.map((cond) => (
            <li key={cond} className={css.chip}>
              <svg className={css.chipIcon} aria-hidden="true">
                <use href="/symbol-defs.svg#icon-check-circle" />
              </svg>
              {cond}
            </li>
          ))}
        </ul>
      </section>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Car Specifications</h2>
        <ul className={css.specsList}>
          <li>
            <svg className={css.specIcon} aria-hidden="true">
              <use href="/symbol-defs.svg#icon-calendar" />
            </svg>
            <span>Year: {car.year}</span>
          </li>
          <li>
            <svg className={css.specIcon} aria-hidden="true">
              <use href="/symbol-defs.svg#icon-car" />
            </svg>
            <span>Type: {car.type}</span>
          </li>
          <li>
            <svg className={css.specIcon} aria-hidden="true">
              <use href="/symbol-defs.svg#icon-furl-pump" />
            </svg>
            <span>Fuel Consumption: {car.fuelConsumption}</span>
          </li>
          <li>
            <svg className={css.specIcon} aria-hidden="true">
              <use href="/symbol-defs.svg#icon-gear" />
            </svg>
            <span>Engine Size: {car.engineSize}</span>
          </li>
        </ul>
      </section>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Accessories & functionalities</h2>
        <ul className={css.chipsList}>
          {allFeatures.map((item) => (
            <li key={item} className={css.chip}>
              <svg className={css.chipIcon} aria-hidden="true">
                <use href="/symbol-defs.svg#icon-check-circle" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/*  <section className={css.section}>
        <h2 className={css.sectionTitle}>Accessories & functionalities</h2>
        <ul className={css.chipsList}>
          {allFeatures.map((item) => (
            <li key={item} className={css.chip}>
              {item}
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}
