import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className='mx-auto flex h-20 w-full items-center justify-center text-center'>
      <Loader2 className='h-16 w-16 animate-spin text-primary' />
    </div>
  );
};

export default Loading;
