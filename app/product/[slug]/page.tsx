import { Star, Truck } from 'lucide-react';

import { fullProduct } from '@/app/interface';
import { getAllProducts } from '@/app/actions/getAllProducts';
import { client, urlFor } from '@/app/lib/sanity';
import { getBuffersFromUrls } from '@/lib/getBase64';
import { calculateOriginalPrice } from '@/lib/discountedPrice';
import { discount } from '@/constants';

import { Button } from '@/components/ui/button';
import ImageGallery from '@/components/ImageGallery';
import AddToBag from '@/components/AddToBag';
import CheckoutNow from '@/components/CheckoutNow';
import CommentsForm from '@/components/CommentsForm';
import Comments from '@/components/Comments';

export const revalidate = 60;

const getData = async (slug: string) => {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0] {
      _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category -> name,
      price_id,
      "comments": *[_type == "product_comment" && product._ref == ^._id ] | order(_createdAt desc){
        name,
        comment,
        _createdAt,
      }
  }`;

  const data = await client.fetch(query);
  return data;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const product = await getData(params.slug);
  return {
    title: `${product.name} - QuickCommerce`,
    description:
      `${product.name} - ${product.description.slice(0, 120)}` + '...',
  };
};

export const generateStaticParams = async () => {
  const data = await getAllProducts();
  return data.map((product: any) => ({
    slug: product.slug,
  }));
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);
  const images: string[] = data.images.map((image) => urlFor(image).url());

  const blurDataURLs = await getBuffersFromUrls(images);

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          <ImageGallery images={data.images} blurDataURLs={blurDataURLs} />
          <div className='md:py-8'>
            <div className='mb-2 md:mb-3'>
              <span className='mb-0.5 inline-block text-gray-500'>
                {data.categoryName}
              </span>
              <h2 className='text-2xl font-bold lg:text-3xl'>
                <strong>{data.name}</strong>
              </h2>
            </div>
            <div className='mb-6 flex items-center gap-3 md:mb-10'>
              <Button className='flax items-center justify-center gap-x-2 rounded-full'>
                <span className='text-sm'>4.2</span>
                <Star className='h-5 w-5' />
              </Button>
              <span className='text-sm text-gray-500'>56 ratings</span>
            </div>
            <div className='mb-4'>
              <div className='flex items-end gap-2'>
                <span className='text-xl font-bold md:text-2xl'>
                  ${data.price.toFixed(2)}
                </span>
                {discount > 0 && discount < 1 && (
                  <span className='mb-0.5 text-red-500 line-through'>
                    ${(+calculateOriginalPrice(data.price)).toFixed(2)}
                  </span>
                )}
              </div>
              <div className='text-sm text-gray-500'>
                Incl. VAT plus shipping
              </div>
            </div>
            <div className='mb-6 flex items-center gap-2 text-gray-500'>
              <Truck />
              <span className='text-small'>2-4 Day shipping</span>
            </div>
            <div className='flex gap-2.5'>
              <AddToBag
                currency='USD'
                description={data.description}
                image={data.images}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
              />
              <CheckoutNow price_id={data.price_id} />
            </div>
            <p className='mt-12 text-base tracking-wide text-gray-500'>
              {data.description}
            </p>
          </div>
        </div>
        <div className='prose min-w-full'>
          <CommentsForm id={data._id} page='product' />
          <Comments comments={data.comments} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
