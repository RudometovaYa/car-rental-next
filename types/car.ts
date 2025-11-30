// types/car.ts

export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string; // літри на 100 км
  engineSize: string; // розмір двигуна
  accessories: string[];
  functionalities: string[];
  rentalPrice: string; // або number, залежить від бекенда
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number; // пробіг у км
}

// Пагінація відповіді для списку авто
export interface PaginationResponse<T> {
  cars: T[];
  totalCars: number;
  page: number;
  totalPages: number;
}

// Тип для фільтрів авто
export interface Filters {
  brand?: string; // фільтр за брендом
  rentalPrice?: number; // фільтр за ціною
  mileageFrom?: number; // мінімальний пробіг
  mileageTo?: number; // максимальний пробіг
}

// Тип для форми бронювання
export interface BookingPayload {
  carId: string;
  name: string;
  email: string;
  phone: string;
  startDate: string; // ISO рядок, наприклад "2025-12-01"
  endDate: string; // ISO рядок
  comment?: string;
}
