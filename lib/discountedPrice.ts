import { discount } from '@/constants';

export const calculateOriginalPrice = (discountedPrice: number) => {
  if (typeof discountedPrice !== 'number' || discountedPrice <= 0) {
    return 'Wrong number.';
  }
  const originalPrice = discountedPrice / (1 - discount);
  const roundedOriginalPrice = Math.round(originalPrice * 100) / 100;

  return roundedOriginalPrice;
};
