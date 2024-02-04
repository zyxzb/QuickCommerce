'use client';

import Image from 'next/image';

interface ImageClientProps {
  src: string;
  alt: string;
  blurDataURL: string;
  // All other props
  [x: string]: any;
}

const ImageClient = ({ src, alt, blurDataURL, ...rest }: ImageClientProps) => {
  return (
    <Image
      src={src}
      blurDataURL={blurDataURL}
      alt={alt}
      placeholder='blur'
      loading='lazy'
      {...rest}
    />
  );
};

export default ImageClient;
