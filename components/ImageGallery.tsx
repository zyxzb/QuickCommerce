'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { discount } from '@/constants';
import { urlFor } from '@/app/lib/sanity';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { type CarouselApi } from '@/components/ui/carousel';

interface Props {
  images: any;
  blurDataURLs: string[];
}

const ImageGallery = ({ images, blurDataURLs }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images?.map((image: any, idx: any) => (
            <CarouselItem key={idx}>
              <div className='aspect-square w-full overflow-hidden rounded-lg border'>
                <Image
                  src={urlFor(image).url()}
                  blurDataURL={blurDataURLs[idx]}
                  placeholder='blur'
                  width={500}
                  height={500}
                  alt='photo_alt_name'
                  className='h-full w-full cursor-pointer object-contain object-center p-1 lg:p-2'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-2 top-1/2' />
        <CarouselNext className='absolute right-2 top-1/2' />
        {discount > 0 && discount < 1 && (
          <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>
            Sale {discount * 100}%
          </span>
        )}
      </Carousel>
      <div className='py-2 text-sm text-gray-500'>
        <p>
          Image {current} of {count}
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
