import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

const manropeFont = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  title: 'Car Rental | Find your perfect car',
  description:
    'Find and book reliable rental cars for any journey. Flexible prices, popular brands, and easy booking.',
  openGraph: {
    title: 'Car Rental | Find your perfect car',
    description:
      'Browse popular car brands, compare prices, and book your ideal rental car in a few clicks.',
    url: 'https://car-rental-next-three.vercel.app',
    siteName: 'Car Rental',
    images: [
      {
        url: '/car rental.png',
        width: 1440,
        height: 768,
        alt: 'Car Rental website preview',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manropeFont.variable}>
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
