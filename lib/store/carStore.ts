import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Car, Filters, PaginationResponse } from '@/types/car';
import { getCars, getBrands } from '@/lib/api';

interface CarStoreState {
  cars: Car[];
  favorites: string[];
  filters: Filters;
  brands: string[];
  page: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;

  setFilters: (filters: Filters) => void;
  fetchCars: (loadMore?: boolean) => Promise<void>;
  resetCars: () => void;
  setPage: (page: number) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  getBrands: () => Promise<void>;
}

export const useCarStore = create<CarStoreState>()(
  persist(
    (set, get) => ({
      cars: [],
      favorites: [],
      filters: {},
      brands: [],
      page: 1,
      perPage: 12,
      totalPages: 1,
      loading: false,
      error: null,

      setFilters: (filters) => set({ filters }),

      resetCars: () => set({ cars: [], page: 1, totalPages: 1 }),

      setPage: (page) => set({ page }),

      addFavorite: (id) => {
        const current = get().favorites;
        if (!current.includes(id)) {
          set({ favorites: [...current, id] });
        }
      },

      removeFavorite: (id) => {
        const updated = get().favorites.filter((favId) => favId !== id);
        set({ favorites: updated });
      },

      getBrands: async () => {
        try {
          const brands = await getBrands();
          set({ brands });
        } catch (err: unknown) {
          if (err instanceof Error) {
            console.error('Failed to load brands:', err.message);
          } else {
            console.error('Failed to load brands:', err);
          }
        }
      },

      fetchCars: async (loadMore = false) => {
        set({ loading: true, error: null });
        const { filters, page, perPage, cars } = get();
        try {
          const data: PaginationResponse<Car> = await getCars(
            filters,
            page,
            perPage,
          );
          set({
            cars: loadMore ? [...cars, ...data.cars] : data.cars,
            totalPages: data.totalPages,
          });
        } catch (err: unknown) {
          if (err instanceof Error) {
            set({ error: err.message });
          } else {
            set({ error: 'Something went wrong' });
          }
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: 'car-favorites',
      partialize: (state) => ({ favorites: state.favorites }),
    },
  ),
);
