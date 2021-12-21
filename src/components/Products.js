import React from 'react';
import products from '../Data';
import ProductCard from './ui/ProductCard';

export default function Products() {
  return (
    <div className="grid grid-cols-3 gap-4 my-6">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}
