import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import { getAllCategories } from '../actions/getAllCategories';

import { Card } from '@/components/Card';

export const revalidate = 60;

const getData = async (category: string) => {
  let query;
  const queryBody = `
      _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug":slug.current,
      "categoryName": category->name`;

  if (category === 'All') {
    query = `*[_type == 'product'] {
      ${queryBody}
      }`;
  } else {
    query = `*[_type == 'product' && category->name == "${category}" ] {
        ${queryBody}
      }`;
  }

  const data = await client.fetch(query);
  return data;
};

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}) => {
  return {
    title: `${params.category} - QuickCommerce`,
  };
};

export const generateStaticParams = async () => {
  const data = await getAllCategories();
  return data.map((category: any) => ({
    category: category.name,
  }));
};

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const data: simplifiedProduct[] = await getData(params.category);
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Our newest for {params.category}
          </h2>
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

export default CategoryPage;
