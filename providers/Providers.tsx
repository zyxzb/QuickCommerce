'use client';

import { CartProvider } from 'use-shopping-cart';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider
        mode='payment'
        cartMode='client-only'
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl='https://quick-commerce-theta.vercel.app/stripe/success'
        cancelUrl='https://quick-commerce-theta.vercel.app/stripe/error'
        currency='USD'
        billingAddressCollection={true}
        shouldPersist={true}
        language='en-US'
      >
        {children}
      </CartProvider>
      <Toaster />
    </>
  );
};

export default Providers;
