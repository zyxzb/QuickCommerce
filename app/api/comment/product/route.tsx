import { client } from '@/app/lib/sanity';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const { name, email, comment, id } = data;

  if (!name || !email || !comment || !id) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 },
    );
  }

  try {
    const newComment = await client.create({
      _type: 'product_comment',
      name,
      email,
      comment,
      product: {
        _type: 'reference',
        _ref: id,
      },
    });
    return NextResponse.json(
      {
        message: 'Comment created successfully',
        comment: newComment,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed to create comment',
        error,
      },
      { status: 500 },
    );
  }
}
