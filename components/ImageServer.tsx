import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

interface ImageServerProps {
  src: string;
  alt: string;
  // All other props
  [x: string]: any;
}

const ImageServer = async ({ src, alt, ...rest }: ImageServerProps) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      blurDataURL={base64}
      alt={alt}
      placeholder='blur'
      loading='lazy'
      {...rest}
    />
  );
};

export default ImageServer;
