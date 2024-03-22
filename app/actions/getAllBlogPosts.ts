import { client } from '../lib/sanity';

export const getAllBlogPosts = async () => {
  const query = `*[_type == 'blog']{
      "slug":slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
};
