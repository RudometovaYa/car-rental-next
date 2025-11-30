import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCarById } from '@/lib/api';
import type { Car } from '@/types/car';
import css from './CarDetails.module.css';
import CarDetails from './CarDetails';
import BookingForm from '@/components/BookingForm/BookingForm';

interface CarDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { id } = params;

  let car: Car | null = null;

  try {
    car = await getCarById(id);
  } catch (error) {
    console.error('Failed to fetch car by id:', error);
  }

  if (!car) {
    notFound();
  }

  return (
    <div className={css.page}>
      <div className={css.leftColumn}>
        <div className={css.imageWrapper}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            fill
            className={css.image}
          />
        </div>
        <BookingForm />
      </div>
      <CarDetails car={car} />
    </div>
  );
}
