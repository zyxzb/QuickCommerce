import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Newest from '@/components/Newest';
import { client } from '../app/lib/sanity'; // Import the mocked client

// Mock dependencies
jest.mock('../app/lib/sanity', () => ({
  client: {
    fetch: jest.fn(), // Mock the `fetch` method
  },
}));

// eslint-disable-next-line react/display-name
jest.mock('../components/Card', () => ({ product }: { product: any }) => (
  <div data-testid='product-card'>{product.name}</div>
));

describe('Newest section', () => {
  it('renders newest products', async () => {
    // Mock data
    const mockedData = [
      {
        _id: '1',
        price: 100,
        name: 'Product 1',
        slug: 'product-1',
        categoryName: 'Category 1',
        imageUrl: 'https://example.com/image1.jpg',
      },
      {
        _id: '2',
        price: 200,
        name: 'Product 2',
        slug: 'product-2',
        categoryName: 'Category 2',
        imageUrl: 'https://example.com/image2.jpg',
      },
    ];

    // Mock `fetch` method to return the mocked data
    (client.fetch as jest.Mock).mockResolvedValue(mockedData);

    // Render the component
    render(await Newest());

    // Check if the heading is rendered
    const heading = await screen.findByRole('heading', {
      level: 2,
      name: /our newest products/i,
    });
    expect(heading).toBeInTheDocument();

    // Check if the `Card` component is rendered
    const productCards = await screen.findAllByTestId('product-card');
    expect(productCards).toHaveLength(mockedData.length);

    // Check if product cards display correct names
    expect(productCards[0]).toHaveTextContent('Product 1');
    expect(productCards[1]).toHaveTextContent('Product 2');
  });
});
