import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

interface ImageDynamicProps {
  src: string;
  alt: string;
  // All other props
  [x: string]: any;
}

const ImageDynamic = async ({ src, alt, ...rest }: ImageDynamicProps) => {
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
      {...rest}
    />
  );
};

export default ImageDynamic;
