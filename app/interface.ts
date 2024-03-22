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
}

export interface blogPost {
  currentSlug: string;
  title: string;
  content: any;
  image: string;
  smallDescription: string;
  titleImage: string;
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
