import { client } from '../lib/sanity';

export const getAllProducts = async () => {
  const query = `*[_type == 'product']{
      "slug":slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
};

export const getAllBlogPosts = async () => {
  const query = `*[_type == 'blog']{
      "slug":slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
};
