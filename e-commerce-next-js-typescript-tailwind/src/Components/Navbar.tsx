import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-500">My E-commerce</a>
        <div className="space-x-4">
          <a href="/products" className="text-gray-600 hover:text-blue-500">Products</a>
          <a href="/about" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
        <a href="/cart" className="text-gray-600 hover:text-blue-500">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
