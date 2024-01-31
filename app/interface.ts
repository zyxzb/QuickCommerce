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
