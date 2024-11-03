'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-pink-300">My E-commerce</a>
        <div className="hidden md:flex space-x-16">
          <a href="/products" className="text-pink-200 hover:text-pink-300">Products <FontAwesomeIcon size='sm' icon={faChevronDown} /></a>
          <a href="/about" className="text-pink-200 hover:text-pink-300">About</a>
          <a href="/contact" className="text-pink-200 hover:text-pink-300">Contact</a>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <a href="/cart" className="text-pink-200 hover:text-pink-300 transition-all duration-1000">
            <FontAwesomeIcon size='sm' icon={faShoppingCart} />
          </a>
          <a href="/cart" className="text-pink-200 hover:text-pink-300 transition-all duration-1000">
            <FontAwesomeIcon size='sm' icon={faUser} />
          </a>
          <a href="/cart" className="text-pink-200 hover:text-pink-300 transition-all duration-1000">
            <FontAwesomeIcon size='sm' icon={faSearch} />
          </a>
        </div>
        <button className="md:hidden text-pink-200" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black py-4">
          <a href="/products" className="block px-4 py-2 text-pink-200 hover:text-pink-300">Products</a>
          <a href="/about" className="block px-4 py-2 text-pink-200 hover:text-pink-300">About</a>
          <a href="/contact" className="block px-4 py-2 text-pink-200 hover:text-pink-300">Contact</a>
          <a href="/cart" className="block px-4 py-2 text-pink-200 hover:text-pink-300">
            <FontAwesomeIcon size='sm' icon={faShoppingCart} /> Cart
          </a>
          <a href="/profile" className="block px-4 py-2 text-pink-200 hover:text-pink-300">
            <FontAwesomeIcon size='sm' icon={faUser} /> Profile
          </a>
          <a href="/search" className="block px-4 py-2 text-pink-200 hover:text-pink-300">
            <FontAwesomeIcon size='sm' icon={faSearch} /> Search
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
