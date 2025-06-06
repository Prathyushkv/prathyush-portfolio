
import React from 'react';
import { FileText } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-400 dark:to-gray-200 bg-clip-text text-transparent">
            Prathyush K V
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
            Cloud Server & System Administrator
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            "Helping businesses scale with secure and optimized cloud infrastructure."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <FileText size={20} />
              <span>Download Resume</span>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600 dark:text-gray-400">
            <a href="tel:+918921274590" className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>📞</span>
              <span>+91-892-127-4590</span>
            </a>
            
            <a href="mailto:kvprathyush99@gmail.com" className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>📧</span>
              <span>kvprathyush99@gmail.com</span>
            </a>
            
            <a href="#" className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span>🔗</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
