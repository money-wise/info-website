import React from 'react';
import { FaReact, FaServer, FaDatabase, FaLock } from 'react-icons/fa';

const TechStackSection: React.FC = () => {
  const technologies = [
    {
      name: 'Frontend',
      tech: 'React Native, Expo',
      description: 'Cross-platform mobile app development framework',
      icon: <FaReact size={40} className="text-blue-500" />,
    },
    {
      name: 'Backend',
      tech: 'NestJS',
      description: 'Progressive Node.js framework for building server-side applications',
      icon: <FaServer size={40} className="text-red-500" />,
    },
    {
      name: 'Database',
      tech: 'MongoDB',
      description: 'NoSQL database for flexible, scalable data storage',
      icon: <FaDatabase size={40} className="text-green-500" />,
    },
    {
      name: 'Authentication',
      tech: 'JWT, Google Auth',
      description: 'Secure user authentication and authorization',
      icon: <FaLock size={40} className="text-yellow-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Built with modern technologies to ensure performance, security, and scalability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2">{tech.name}</h3>
              <div className="text-purple-600 font-semibold text-center mb-2">{tech.tech}</div>
              <p className="text-gray-600 text-center">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;