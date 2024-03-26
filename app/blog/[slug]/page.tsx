import { getAllBlogPosts } from '@/app/actions/getAllBlogPosts';
import { blogPost } from '@/app/interface';
import { client, urlFor } from '@/app/lib/sanity';
import ImageServer from '@/components/ImageServer';
import { PortableText } from '@portabletext/react';
import { Scaling } from 'lucide-react';

export const revalidate = 60;

const getData = async (slug: string) => {
  const query = `*[_type == 'blog' && slug.current == "${slug}"][0]{
    "slug": slug.current,
    metaTitle,
    metaDescription,
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
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://quick-commerce-theta.vercel.app/blog/${post.slug}`,
    },
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
      <p>{data.smallDescription}</p>
      <figure className='group relative aspect-video cursor-pointer transition-all duration-500 md:aspect-[3/1] md:hover:aspect-video'>
        <div className='invisible right-5 top-5 hidden rounded-lg bg-black/20 p-3 text-white opacity-100 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-0 md:visible md:absolute md:block'>
          <Scaling className='opacity-100' />
        </div>
        <ImageServer
          src={urlFor(data.image).url()}
          alt={data.titleImage}
          width={1000}
          height={200}
          className='h-full w-full rounded-lg object-cover'
          priority
        />
        <figcaption>Photo: {data.title}</figcaption>
      </figure>
      <div className='my-16 max-w-none prose-a:text-primary prose-li:marker:text-primary'>
        <PortableText value={data.content} />
      </div>
    </article>
  );
};

export default BlogPostPage;
