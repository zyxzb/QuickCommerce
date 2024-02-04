import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { simplifiedProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity';

import Card from './Card';

const getData = async () => {
  const query = `*[_type == "product"][0...4] | order(_createdAt asc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  const data = await client.fetch(query);
  return data;
};

const Newest = async () => {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Our newest Products
          </h2>
          <Link href='/All' className='flex items-center gap-x-1 text-primary'>
            See all
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {data.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
