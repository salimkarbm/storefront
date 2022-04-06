import { Product, ProductStore } from '../models/products';

const store = new ProductStore();
const product: Product = {
  name: 'converse chuks taylor',
  price: 1500,
  category: 'fashion',
};
describe('Test products', () => {
  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should return created product', async () => {
    const result = await store.create(product);
    expect(result).toEqual(product);
  });
});
