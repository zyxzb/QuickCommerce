import { getAllBlogPosts } from '@/app/actions/getAllProducts';
import { blogPost } from '@/app/interface';
import { client, urlFor } from '@/app/lib/sanity';
import ImageServer from '@/components/ImageServer';
import { PortableText } from '@portabletext/react';

export const revalidate = 60;

const getData = async (slug: string) => {
  const query = `*[_type == 'blog' && slug.current == "${slug}"][0]{
    "slug": slug.current,
    title,
    content,
    image,
    titleImage,
    smallDescription
  }`;

  const data = await client.fetch(query);
  return data;
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post: blogPost = await getData(params.slug);
  return {
    title: `${post.title} - QuickCommerce`,
    description: `${post.title} - ${post.smallDescription.slice(0, 120)}...`,
    alternates: {
      canonical: `https://quick-commerce-theta.vercel.app/blog/${post.title}`,
    },
    // add to Sanity labels for metadata
  };
};

export const generateStaticParams = async () => {
  const data: any = await getAllBlogPosts();
  return data.map((post: any) => ({
    slug: post.slug,
  }));
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const data: blogPost = await getData(params.slug);
  return (
    <article className='prose mx-auto w-full max-w-screen-xl px-4 md:px-8'>
      <h1 className='my-10 text-3xl font-bold text-black md:my-16 lg:text-5xl'>
        {data.title}
      </h1>
      <p className=''>{data.smallDescription}</p>
      <div className='relative'>
        <ImageServer
          src={urlFor(data.image).url()}
          alt={data.titleImage}
          width={1000}
          height={200}
          className='h-[200px] w-full rounded-lg object-cover md:h-[300px]'
          priority
        />
      </div>
      <div className='prose-li:marker:text-primary prose-a:text-primary my-16 max-w-none'>
        <PortableText value={data.content} />
      </div>
    </article>
  );
};

export default BlogPostPage;
