# Car Rental App

This is a **Car Rental** application built with [Next.js](https://nextjs.org).  
The app allows users to browse, filter, and book rental cars easily.

## Features

- Browse all available rental cars on the catalog page
- Filter cars by **brand**, **price**, and **mileage**
- View detailed information for each car
- Add cars to **favorites** (persisted in local storage)
- Pagination and "Load More" functionality
- Book a car via a booking form with real-time notifications
- Fully client-side interactive components with Zustand state management
- Responsive layout and clean, semantic HTML structure

## Getting Started

### Install Dependencies

````bash
npm install
# or
yarn install
# or
pnpm install

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
# or
npm run start
```

## Project Structure

- /app – Pages and layouts

- /components – Reusable React components (CarCard, Filters, Loader, BookingForm, etc.)

- /lib – API and Zustand store (carStore.ts)

- /types – TypeScript types for Car, Filters, Pagination

## Backend API

- Get Cars: GET /cars with query params for filters, page, perPage

- Get Car Details: GET /cars/:id

- Get Brands: GET /brands

- Booking Form Submission: POST /api/bookings

## Deployment on Vercel

Your app will be live at https://your-project-name.vercel.app

## Notes

- The app uses Zustand for state management and Next.js App Router

- All filtering and pagination logic is handled on the backend

- Images are optimized using Next.js Image component

- Form submissions show notifications using toast or any notification library

- Loader is displayed during asynchronous requests

- Code is structured with clean, semantic HTML and modular CSS
