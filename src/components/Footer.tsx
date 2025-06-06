
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Prathyush K V</h3>
          <p className="text-gray-400 mb-6">Cloud Server & System Administrator</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="tel:+918921274590" className="text-gray-400 hover:text-white transition-colors">
              📞 Phone
            </a>
            <a href="mailto:kvprathyush99@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              📧 Email
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              🔗 LinkedIn
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Prathyush K V. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
