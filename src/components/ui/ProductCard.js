import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex">
        <img src="/images/star_icon.png" alt="star" className="h-5" />
        <p className="mx-2 font-semibold">{product.rating}</p>
      </div>
      <img src={product.image} alt="product" className="h-56 mx-auto" />

      <div className=" w-full flex items-center justify-between p-4">
        <div>
          <h1 className="text-xl">{product.name}</h1>
          <p className="font-semibold">${product.price}</p>
        </div>
        <button className="h-12 w-24 bg-yellow-400 rounded-full">Buy</button>
      </div>
    </div>
  );
}
