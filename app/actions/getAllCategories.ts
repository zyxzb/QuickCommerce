import { client } from '../lib/sanity';

export const getAllCategories = async () => {
  const query = `*[_type == 'category']{
      name,
  }`;

  const data = await client.fetch(query);
  return data;
};
