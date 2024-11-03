import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} My E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
