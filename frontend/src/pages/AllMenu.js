import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CardFeature from '../component/CardFeature';

const AllMenu = () => {
  const productData = useSelector((state) => state.product.productList);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(productData.map(item => item.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? productData 
    : productData.filter(item => item.category === selectedCategory);

  return (
    <div className="p-2 md:p-4 min-h-screen">
      <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">
        Our Complete Menu
      </h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="flex justify-center">
            <CardFeature
              id={product._id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>

      {/* Show message if no products in category */}
      {filteredProducts.length === 0 && (
        <div className="w-full text-center text-2xl text-gray-500 mt-4">
          No items found in this category
        </div>
      )}
    </div>
  );
};

export default AllMenu; 