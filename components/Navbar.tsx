'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBagIcon } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

import { navLinks } from '@/constants';

import { Button } from './ui/button';
import MobileNav from './MobileNav';

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className='mb-8 border-b'>
      <div className='mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-4 lg:max-w-7xl'>
        <Link href='/' className='text-2xl font-bold md:text-4xl'>
          Quick<span className='text-primary'>Commerce</span>
        </Link>

        <nav className='hidden gap-10 lg:flex 2xl:ml-16'>
          <Link
            href='/'
            className={`text-lg font-semibold transition duration-200 hover:text-primary ${
              pathname === '/' ? 'text-primary ' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-semibold transition duration-200 hover:text-primary ${
                pathname === link.href ? 'text-primary ' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href='/blog'
            className={`text-lg font-semibold transition duration-200 hover:text-primary ${
              pathname === '/blog' ? 'text-primary ' : 'text-gray-600'
            }`}
          >
            Blog
          </Link>
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
