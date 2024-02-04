'use client';

import Link from 'next/link';

import ImageClient from './ImageClient';
import { simplifiedProduct } from '@/app/interface';

interface CardProps {
  product: simplifiedProduct;
  blurDataURL: string;
}

const CardClient = ({ product, blurDataURL }: CardProps) => {
  return (
    <Link
      href={`product/${product.slug}`}
      className='group relative overflow-hidden rounded-md border'
    >
      <div className='lg:h-70 aspect-square w-full overflow-hidden p-1'>
        <ImageClient
          src={product.imageUrl}
          alt={product.name}
          blurDataURL={blurDataURL}
          className='h-full w-full object-contain object-center group-hover:opacity-75'
          width={300}
          height={300}
        />
      </div>
      <div className='mt-4 flex justify-between p-2'>
        <div>
          <h3 className='line-clamp-2 text-sm text-gray-700 group-hover:underline'>
            {product.name}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{product.categoryName}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CardClient;
