'use client';

import { CartProvider } from 'use-shopping-cart';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl='https://xxxxxx/stripe/success'
      cancelUrl='https://xxxxxx/stripe/error'
      currency='USD'
      billingAddressCollection={true}
      shouldPersist={true}
      language='en-US'
    >
      {children}
    </CartProvider>
  );
};

export default Providers;
