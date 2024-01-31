'use client';

import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/button';

interface CheckoutNowProps {
  price_id: string;
}

const CheckoutNow = ({ price_id }: CheckoutNowProps) => {
  const { checkoutSingleItem } = useShoppingCart();

  return (
    <Button variant='outline' onClick={() => checkoutSingleItem(price_id)}>
      Checkout Now
    </Button>
  );
};

export default CheckoutNow;
