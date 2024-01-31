import Link from 'next/link';
import { XCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

const ErrorPage = () => {
  return (
    <div className='h-screen'>
      <div className='mx-auto mt-32 md:max-w-[50vw]'>
        <XCircle className='mx-auto my-6 h-16 w-16 text-red-600' />
        <div className='text-center'>
          <h2 className='text-base font-semibold md:text-2xl'>
            Payments error
          </h2>
          <p className='my-2 text-gray-600'>Try again</p>
          <Button asChild className='mt-5'>
            <Link href='/'>Back Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
