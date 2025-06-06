
import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: "MCA",
      institution: "Chinmaya Institute of Technology, Kannur",
      type: "Master's Degree"
    },
    {
      degree: "BCA",
      institution: "Morazha Co-operative Arts and Science College, Kannur",
      type: "Bachelor's Degree"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      status: "In Progress",
      provider: "Amazon Web Services"
    },
    {
      title: "Fundamentals of Digital Marketing",
      status: "Completed",
      provider: "Google Digital Garage"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              🎓 Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              📜 Certifications
            </h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {cert.provider}
                  </p>
                  <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                    cert.status === 'Completed' 
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
