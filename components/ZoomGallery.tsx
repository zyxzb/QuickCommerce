import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import Image from 'next/image';

interface Props {
  src: string;
  blurDataURL: string;
  alt: string;
  children: React.ReactNode;
}

const ZoomGallery = ({ src, blurDataURL, alt, children }: Props) => {
  if (!src) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-h-[90vh] w-full p-0 xl:max-w-[40vw]'>
        <div className='relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md'>
          <Image
            src={src}
            fill={true}
            alt={alt || ''}
            className='h-full w-full object-contain'
            placeholder='blur'
            blurDataURL={blurDataURL}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ZoomGallery;
