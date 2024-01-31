import { getPlaiceholder } from 'plaiceholder';

export const getBuffersFromUrls = async (urlsArray: string[]) => {
  const buffers = await Promise.all(
    urlsArray.map(async (url) => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const { base64 } = await getPlaiceholder(buffer);
      return base64;
    }),
  );

  return buffers;
};
