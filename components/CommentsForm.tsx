'use client';

import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

const Comments = ({ postId }: { postId: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmit = async (data: any) => {
    const { name, email, comment } = data;

    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment, postId }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success('Your comment will be added soon');
      reset();
    } catch (error: any) {
      toast.error(error.message);
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <h3>Leave a comment</h3>
      <form
        className='flex flex-col rounded border p-2'
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className='flex flex-col md:flex-row md:gap-2'>
          <div className='mb-2 w-full'>
            <input
              placeholder='Name'
              className='w-full rounded border p-1'
              {...register('name', { required: true })}
            />
            {errors.name && (
              <p className='my-1 text-sm text-red-500'>Name is required.</p>
            )}
          </div>
          <div className='mb-2 w-full'>
            <input
              placeholder='Email (will not be visible)'
              className='w-full rounded border p-1'
              {...register('email', {
                required: true,
                pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              })}
            />
            {errors.email && (
              <p className='my-1 text-sm text-red-500'>Email is invalid</p>
            )}
          </div>
        </div>
        <div className='mb-2'>
          <textarea
            placeholder='Comment..'
            rows={5}
            className='w-full rounded border p-1 align-top'
            {...register('comment', { required: true, minLength: 2 })}
          />
          {errors.comment && (
            <p className='my-1 text-sm text-red-500'>Min 2 characters</p>
          )}
        </div>
        <div>
          <Button
            type='submit'
            className={cn(`w-full md:w-auto ${isSubmitting && 'opacity-50'}`)}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Comments;
