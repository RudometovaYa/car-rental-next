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
      <h1 className={css.title}>
        {car.brand} {car.model}, {car.year}
      </h1>

      <div className={css.mainInfo}>
        <span>ID: {car.id}</span>
        <span>{cityCountry}</span>
        <span>Rental company: {car.rentalCompany}</span>
      </div>

      <div className={css.priceMileage}>
        <span className={css.price}>{priceFormatted}</span>
        <span className={css.mileage}>Mileage: {mileageFormatted}</span>
      </div>

      <p className={css.description}>{car.description}</p>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Rental Conditions</h2>
        <ul className={css.chipsList}>
          {car.rentalConditions.map((cond) => (
            <li key={cond} className={css.chip}>
              {cond}
            </li>
          ))}
        </ul>
      </section>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Car Specifications</h2>
        <ul className={css.specsList}>
          <li>
            <span>Year:</span> <span>{car.year}</span>
          </li>
          <li>
            <span>Type:</span> <span>{car.type}</span>
          </li>
          <li>
            <span>Fuel Consumption:</span> <span>{car.fuelConsumption}</span>
          </li>
          <li>
            <span>Engine Size:</span> <span>{car.engineSize}</span>
          </li>
        </ul>
      </section>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Accessories & functionalities</h2>
        <ul className={css.chipsList}>
          {allFeatures.map((item) => (
            <li key={item} className={css.chip}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
