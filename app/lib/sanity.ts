import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { token } from './env';

export const client = createClient({
  projectId: '1171aztu',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
  token,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
