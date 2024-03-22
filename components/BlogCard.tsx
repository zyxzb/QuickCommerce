import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import ImageServer from './ImageServer';
import { blogPostCard } from '@/app/interface';
import { urlFor } from '@/app/lib/sanity';

interface BlogCardProps {
  post: blogPostCard;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, smallDescription, slug, image, titleImage } = post;
  return (
    <Card className='overflow-hidden'>
      <CardContent className='p-0'>
        <ImageServer
          src={urlFor(image).url()}
          alt={titleImage}
          width={350}
          height={200}
          className='aspect-video w-full object-cover'
        />
      </CardContent>
      <CardHeader>
        <CardTitle className='mb-3 leading-7'>{title}</CardTitle>
        <CardDescription className='line-clamp-4'>
          {smallDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between'>
        <Button asChild>
          <Link href={`/blog/${slug}`}>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
