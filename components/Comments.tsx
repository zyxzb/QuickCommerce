import { blogComment } from '@/app/interface';

interface BlogComments {
  comments: blogComment[];
}

const Comments = ({ comments }: BlogComments) => {
  if (!comments.length) return <p>No comments...</p>;

  return (
    <div className='mt-10'>
      <p className='font-bold'>Comments:</p>
      <div className='flex flex-col gap-4 divide-y rounded border p-2'>
        {comments.map((comment) => (
          <div key={comment._createdAt} className='p-0'>
            <p className='m-0 mb-2 p-1'>
              <strong>{comment.name}</strong>,{' '}
              <span>
                at:{' '}
                {new Date(comment._createdAt).toLocaleString('en-GB', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: undefined,
                })}
              </span>
            </p>
            <p className='m-0 px-1'>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
