import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
/* import './globals.css'; */
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

const robotoFont = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Find and book rental cars easily',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoFont.variable}>
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
