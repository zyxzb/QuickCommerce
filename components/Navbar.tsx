'use client';

import Link from 'next/link';
import { ShoppingBagIcon } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

import { Button } from './ui/button';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = () => {
  const { handleCartClick } = useShoppingCart();

  return (
    <header className='mb-8 border-b'>
      <div className='mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-4 lg:max-w-7xl'>
        <Link
          href='/'
          className='text-2xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-4xl'
        >
          Quick<span className='text-primary'>Commerce</span>
        </Link>

        <nav className='hidden lg:flex'>
          <DesktopNav />
        </nav>

        <div className='flex divide-x border-x'>
          <Button
            variant={'outline'}
            className='border-1 flex h-12 flex-col gap-y-1.5 rounded-none sm:h-20 sm:w-24'
            onClick={handleCartClick}
            aria-label='toggle cart'
          >
            <ShoppingBagIcon />
            <span className='hidden text-xs font-semibold sm:block'>Cart</span>
          </Button>
          <nav className='lg:hidden'>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
