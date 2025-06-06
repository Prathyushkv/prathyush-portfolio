
import React from 'react';
import { Code, Server, Settings, Home as HomeIcon, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AWS Exponent Engine",
      description: "Math API using Lambda + DynamoDB for scalable mathematical computations",
      icon: <Code className="w-8 h-8" />,
      tech: ["AWS Lambda", "DynamoDB", "API Gateway"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "AWS Usage Reporter",
      description: "Bash script to monitor AWS resources and generate usage reports",
      icon: <Server className="w-8 h-8" />,
      tech: ["Bash", "AWS CLI", "Shell Scripting"],
      color: "from-green-500 to-blue-600"
    },
    {
      title: "AWS Terraform Automation",
      description: "Infrastructure deployment with reusable modules for scalable cloud architecture",
      icon: <Settings className="w-8 h-8" />,
      tech: ["Terraform", "AWS", "Infrastructure as Code"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "One Touch Service",
      description: "PHP service aggregator with search filters for streamlined service management",
      icon: <Settings className="w-8 h-8" />,
      tech: ["PHP", "MySQL", "JavaScript"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "RECO",
      description: "Peer-to-peer rental platform built with modern MERN stack architecture",
      icon: <HomeIcon className="w-8 h-8" />,
      tech: ["MongoDB", "Express", "React", "Node.js"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Spare Mart",
      description: "Django e-commerce site for spare parts and service bookings",
      icon: <Settings className="w-8 h-8" />,
      tech: ["Django", "Python", "PostgreSQL"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} text-white mb-4`}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300">
                  <span>View Project</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
