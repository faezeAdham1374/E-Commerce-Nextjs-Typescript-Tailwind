'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Props {
  categories: string[];
}

const Navbar: React.FC<Props> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCategoriesDesktopOpen, setIsCategoriesDesktopOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
  const toggleDesktopCategories = () => setIsCategoriesDesktopOpen(!isCategoriesDesktopOpen);

  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-pink-300">My E-commerce</a>
        
        <div className="hidden md:flex space-x-16">
          <div className="relative flex items-center gap-1">
            <button
              onClick={toggleDesktopCategories}
              className="text-pink-200 hover:text-pink-300 flex items-center gap-1"
            >
              Categories
              <FontAwesomeIcon className="w-4 h-4" icon={faChevronDown} />
            </button>
            {isCategoriesDesktopOpen && (
              <div className="absolute top-full mt-2 bg-black rounded shadow-md z-20 w-44">
                {categories.length > 0 && categories.map((item, index) => (
                  <a href={`/category/${item}`} key={index} className="block px-4 py-2 text-pink-200 hover:text-pink-300">{item}</a>
                ))}
              </div>
            )}
          </div>

          <a href="/about" className="text-pink-200 hover:text-pink-300">About</a>
          <a href="/contact" className="text-pink-200 hover:text-pink-300">Contact</a>
        </div>

        <div className="hidden md:flex gap-5 items-center">
          <a href="/cart" className="text-pink-200 hover:text-pink-300 transition-all duration-1000">
            <FontAwesomeIcon size="sm" icon={faShoppingCart} />
          </a>
          <a href="/profile" className="text-pink-200 hover:text-pink-300 transition-all duration-1000">
            <FontAwesomeIcon size="sm" icon={faUser} />
          </a>
          <a href="/search" className="text-pink-200 hover:text-pink-300 transition-all duration-1000">
            <FontAwesomeIcon size="sm" icon={faSearch} />
          </a>
        </div>

        <button className="md:hidden text-pink-200" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black py-4">
          <div
            className="px-4 py-2 text-pink-200 hover:text-pink-300 cursor-pointer flex items-center gap-1"
            onClick={toggleCategories}
          >
            <span>Categories</span>
            <FontAwesomeIcon className="w-4 h-4" icon={faChevronDown} />
          </div>
          {isCategoriesOpen && (
            <div className="pl-6">
              {categories.length > 0 && categories.map((item, index) => (
                <a href={`/category/${item}`} key={index} className="block px-4 py-2 text-pink-200 hover:text-pink-300">{item}</a>
              ))}
            </div>
          )}
          <a href="/about" className="block px-4 py-2 text-pink-200 hover:text-pink-300">About</a>
          <a href="/contact" className="block px-4 py-2 text-pink-200 hover:text-pink-300">Contact</a>
          <a href="/cart" className="block px-4 py-2 text-pink-200 hover:text-pink-300">
            <FontAwesomeIcon size="sm" icon={faShoppingCart} /> Cart
          </a>
          <a href="/profile" className="block px-4 py-2 text-pink-200 hover:text-pink-300">
            <FontAwesomeIcon size="sm" icon={faUser} /> Profile
          </a>
          <a href="/search" className="block px-4 py-2 text-pink-200 hover:text-pink-300">
            <FontAwesomeIcon size="sm" icon={faSearch} /> Search
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
