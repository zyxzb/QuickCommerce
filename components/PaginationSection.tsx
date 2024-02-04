'use client';

import { useState } from 'react';

import CardClient from './CardClient';
import PaginationShadcn from './PaginationShadcn';

import { simplifiedProduct } from '@/app/interface';

interface PaginationSectionProps {
  products: simplifiedProduct[];
  blurDataURLs: string[];
}

const PaginationSection = ({
  products,
  blurDataURLs,
}: PaginationSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <section className='mt-6 grid h-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {currentPosts.map((product, idx: number) => (
          <CardClient
            key={product._id}
            product={product}
            blurDataURL={blurDataURLs[idx]}
          />
        ))}
      </section>
      <div className='mt-auto'>
        <div className='mt-6'>
          <PaginationShadcn
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default PaginationSection;
