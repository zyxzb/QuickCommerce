'use client';

import { useShoppingCart } from 'use-shopping-cart';

export interface AddToBagProps {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

import { Button } from './ui/button';
import { urlFor } from '@/app/lib/sanity';

const AddToBag = ({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: AddToBagProps) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image[0]).url(),
    price_id,
  };

  const handleClick = () => {
    addItem(product);
    handleCartClick();
  };

  return <Button onClick={handleClick}>Add to Bag</Button>;
};

export default AddToBag;
