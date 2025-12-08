import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['500'],
});

export const metadata: Metadata = {
  title: 'Car Rental | Find your perfect car',
  description:
    'Find and book reliable rental cars for any journey. Flexible prices, popular brands, and easy booking.',
  keywords: ['car rental', 'rent a car', 'cars', 'auto', 'booking'],
  openGraph: {
    title: 'Car Rental | Find your perfect car',
    description:
      'Browse popular car brands, compare prices, and book your ideal rental car in a few clicks.',
    url: 'https://car-rental-next-three.vercel.app',
    siteName: 'Car Rental',
    images: [
      {
        url: '/car-rental.png',
        width: 1440,
        height: 768,
        alt: 'Car Rental website preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Rental | Find your perfect car',
    description:
      'Browse popular car brands, compare prices, and book your ideal rental car in a few clicks.',
    images: ['/car-rental.png'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <TanStackProvider>
          <div className="layout">
            <Header />
            <main className="main">{children}</main>
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
