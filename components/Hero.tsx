import Link from 'next/link';
import AnimateBanner from './AnimateBanner';
import { navLinks } from '@/constants';

const Hero = () => {
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
      <div className='mb-8 grid md:mb-16 md:grid-cols-2'>
        <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:pb-24 lg:pt-48'>
          <h1 className='mb-4 text-4xl font-bold text-black md:mb-8 lg:text-6xl'>
            Shop in a Blink, <br /> Quick and Simple
          </h1>
          <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
            Step into the realm of elite shopping at QuickCommerce, where each
            purchase is a gateway to unparalleled quality and exclusivity.
            Elevate your shopping standards with us, where luxury meets
            convenience in every curated selection.
          </p>
        </div>
        <AnimateBanner />
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
          <div className='mt-8 flex divide-x overflow-hidden rounded-lg border'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='flex items-center justify-center p-2 text-gray-500 transition duration-100 hover:bg-gray-100 sm:px-4 sm:py-2'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
