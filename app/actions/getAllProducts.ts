import { client } from '../lib/sanity';

export const getAllProducts = async () => {
  const query = `*[_type == 'product']{
      "slug":slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
};
