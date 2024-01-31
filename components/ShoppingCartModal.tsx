'use client';

import Image from 'next/image';

import { useShoppingCart } from 'use-shopping-cart';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from './ui/button';

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const handleCheckoutClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result.error) console.log('result error');
    } catch (error) {
      console.log('ERROR-> ', error);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className='w-[90vw] sm:max-w-lg'>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className='flex h-full flex-col justify-between'>
          <div className='mt-8 flex-1 overflow-y-auto'>
            <ul className='my-6 divide-y divide-gray-200'>
              {cartCount === 0 ? (
                <p className='py-6'>You do not have any items</p>
              ) : (
                <>
                  {/* return empty object -> {} if carDetails is null or undefined, if not return array */}
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className='flex py-6'>
                      <div className='flex h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                        <Image
                          src={entry.image as string}
                          alt='product image'
                          width={100}
                          height={100}
                          className='object-contain p-1'
                        />
                      </div>
                      <div className='ml-4 flex flex-1 flex-col'>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <h3 className='line-clamp-2'>{entry.name}</h3>
                          <p className='ml-1'>${entry.price}</p>
                        </div>
                        <p className='mt-1 line-clamp-2 text-sm text-gray-500'>
                          {entry.description}
                        </p>
                        <div className='flex flex-1 items-end justify-between text-sm'>
                          <p className='font-medium text-gray-900'>
                            QTY: {entry.quantity}
                          </p>
                          <div className='flex'>
                            <button
                              type='button'
                              className='font-medium text-primary hover:text-primary/80'
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
            <div className='flex justify-between text-base font-medium text-gray-900'>
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className='text-small mt-1 text-gray-500'>
              Shipping and taxes are calculated at checkout.
            </p>
            <div className='mt-6'>
              <Button className='w-full' onClick={handleCheckoutClick}>
                Checkout
              </Button>
            </div>
            <div className='mt-6 text-center text-sm text-gray-500'>
              <button
                className='font-medium text-primary hover:text-primary/80'
                onClick={handleCartClick}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
