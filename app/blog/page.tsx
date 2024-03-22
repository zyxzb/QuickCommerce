import { blogPostCard } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import BlogCard from '@/components/BlogCard';

export const revalidate = 60;

const getData = async () => {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    _id,
    title,
    smallDescription,
    "slug": slug.current,
    image,
    titleImage
  }`;

  const data = await client.fetch(query);
  return data;
};

const BlogPage = async () => {
  const data: blogPostCard[] = await getData();

  return (
    <div className='mx-auto w-full max-w-screen-xl px-4 md:px-8'>
      <section className='grid gap-8 sm:grid-cols-2 xl:grid-cols-3'>
        {data.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
