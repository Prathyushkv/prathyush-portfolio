
import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-4 border-blue-600">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-0"></div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Cloud Server Administrator
                  </h3>
                  <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                    Kiwisoft Solutions LLP
                  </h4>
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Dec 2023 – Present
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Deployed and managed Ubuntu EC2 instances
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated infrastructure with Terraform
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Configured SSL, WAF, ALBs, SES, and backups
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Monitored traffic, created shell scripts, and used CloudFront for CDN
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
