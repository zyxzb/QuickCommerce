import { navLinks } from '@/constants';
// import navLinks or import { getAllCategories } from './actions/getAllCategories';

import { getAllProducts } from './actions/getAllProducts';

const sitemap = async () => {
  const baseUrl = 'https://quick-commerce-theta.vercel.app';
  const data = await getAllProducts();

  const categoriesUrls = navLinks.map((category) => ({
    url: `${baseUrl}${category.href}`,
    lastModified: new Date(),
  }));

  const productUrls = data.map((product: any) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    ...categoriesUrls,
    ...productUrls,
  ];
};

export default sitemap;
