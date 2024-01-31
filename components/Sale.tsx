import { discount } from '@/constants';

const Sale = () => {
  return (
    <>
      {discount > 0 && discount < 1 ? (
        <div className='flex h-10 w-full items-center justify-center bg-red-500 text-white'>
          <p>{Math.round(discount * 100)}% Discount for All Products</p>
        </div>
      ) : null}
    </>
  );
};

export default Sale;
