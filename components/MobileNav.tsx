'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className='border-1 flex h-12 flex-col gap-y-1.5 rounded-none sm:h-20 sm:w-24'
          aria-label='toggle navigation'
        >
          <Menu />
          <span className='hidden text-xs font-semibold sm:block'>Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className='text-lg font-semibold'>
          Menu
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className={`cursor-pointer pr-4 text-lg font-semibold transition duration-200 hover:text-primary ${
              pathname === '/' ? 'text-primary' : 'text-gray-600'
            }`}
          >
            <Link href='/'>Home</Link>
          </DropdownMenuItem>
          {navLinks.map((link) => (
            <DropdownMenuItem
              key={link.name}
              asChild
              className={`cursor-pointer pr-4 text-lg font-semibold transition duration-200 hover:text-primary ${
                pathname === link.href ? 'text-primary ' : 'text-gray-600'
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
