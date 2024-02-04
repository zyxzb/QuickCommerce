import { client, urlFor } from '../lib/sanity';
import { getAllCategories } from '../actions/getAllCategories';
import { getBuffersFromUrls } from '@/lib/getBase64';

import PaginationSection from '@/components/PaginationSection';

import { simplifiedProduct } from '../interface';

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
  const images: string[] = data.map((image) => urlFor(image.imageUrl).url());

  const blurDataURLs = await getBuffersFromUrls(images);

  return (
    <div className='mx-auto flex max-w-2xl flex-1 flex-col bg-white px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        Our newest for {params.category}
      </h2>
      <PaginationSection products={data} blurDataURLs={blurDataURLs} />
    </div>
  );
};

export default CategoryPage;
