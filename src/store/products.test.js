import products, { addProduct, removeProduct } from './products';

describe('products', () => {
  test('incrementing the product count', () => {
    expect(products({ count: 1 }, addProduct(2)))
      .toEqual({ count: 3 });
  });

  test('decrementing the product count', () => {
    expect(products({ count: 1 }, removeProduct(1)))
      .toEqual({ count: 0 });
  });
});
