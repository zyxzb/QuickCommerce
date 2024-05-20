export interface simplifiedProduct {
  _id: string;
  name: string;
  slug: string;
  categoryName: string;
  imageUrl: string;
  price: number;
}

export interface fullProduct {
  _id: string;
  name: string;
  slug: string;
  categoryName: string;
  price: number;
  images: [];
  description: string;
  price_id: string;
  comments: blogComment[];
}

export interface blogPost {
  _id: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  title: string;
  content: any;
  image: string;
  smallDescription: string;
  titleImage: string;
  comments: blogComment[];
}

export interface blogPostCard {
  _id: string;
  currentSlug: string;
  title: string;
  smallDescription: string;
  image: string;
  titleImage: string;
  slug: string;
}

export interface blogComment {
  _id: string;
  name: string;
  comment: string;
  _createdAt: string;
}
