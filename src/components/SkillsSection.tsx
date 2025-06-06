
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["AWS (EC2, S3, ALB, SES, CloudFront, IAM, VPC, WAF)"]
    },
    {
      title: "Operating Systems",
      icon: "💻",
      skills: ["Linux (Ubuntu, CentOS, Debian)", "Windows Server"]
    },
    {
      title: "Admin Panels",
      icon: "⚙️",
      skills: ["Webmin", "cPanel", "Plesk"]
    },
    {
      title: "DevOps Tools",
      icon: "🛠️",
      skills: ["Terraform", "Ansible", "Docker", "Git", "GitHub"]
    },
    {
      title: "Scripting",
      icon: "📝",
      skills: ["Bash / Shell"]
    },
    {
      title: "Security",
      icon: "🔒",
      skills: ["IAM", "SSL", "Firewalls", "WAF"]
    },
    {
      title: "Web & DNS",
      icon: "🌐",
      skills: ["Apache", "NGINX", "Mail servers", "DNS configs"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-sm text-gray-600 dark:text-gray-400 text-center bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
