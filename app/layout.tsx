import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/providers/Providers';
import Sale from '@/components/Sale';
import Navbar from '@/components/Navbar';
import ShoppingCartModal from '@/components/ShoppingCartModal';
import Footer from '@/components/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QuickCommerce Store',
  description:
    'Step into the realm of elite shopping at QuickCommerce, where each purchase is a gateway to unparalleled quality and exclusivity',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div className='flex min-h-screen flex-col'>
            <Sale />
            <Navbar />
            <ShoppingCartModal />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
