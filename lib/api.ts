import axios from 'axios';
import { Car, Filters, PaginationResponse } from '@/types/car';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

export const getCars = async (
  filters: Filters = {},
  page: number = 1,
  perPage: number = 12,
): Promise<PaginationResponse<Car>> => {
  const params: Record<string, string | number> = {
    page,
    perPage,
  };

  if (filters.brand) params.brand = filters.brand;
  if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
  if (filters.mileageFrom) params.mileageFrom = filters.mileageFrom;
  if (filters.mileageTo) params.mileageTo = filters.mileageTo;

  const response = await api.get<PaginationResponse<Car>>('/cars', { params });
  return response.data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const response = await api.get<Car>(`/cars/${id}`);
  return response.data;
};

export const getBrands = async (): Promise<string[]> => {
  const response = await api.get<string[]>('/brands');
  return response.data;
};
