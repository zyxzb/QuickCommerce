import Link from 'next/link';
import { CheckCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  return (
    <div className='h-screen'>
      <div className='mx-auto mt-32 md:max-w-[50vw]'>
        <CheckCheck className='mx-auto my-6 h-16 w-16 text-green-600' />
        <div className='text-center'>
          <h2 className='text-base font-semibold md:text-2xl'>Payments done</h2>
          <p className='my-2 text-gray-600'>Thank You for your purchase!</p>
          <p className='text-gray-600'>Have a great day!</p>
          <Button asChild className='mt-5'>
            <Link href='/'>Back Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
