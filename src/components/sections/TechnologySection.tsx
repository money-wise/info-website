import React from "react";
import {
  IconBrandReact,
  IconBrandMongodb,
  IconBrandPython,
  IconApi,
} from "@tabler/icons-react";

const technologies = [
  {
    icon: <IconBrandReact size={48} color="#000" />,
    title: "React Native",
    description: "For a smooth cross-platform mobile experience",
  },
  {
    icon: <IconBrandMongodb size={48} color="#000" />,
    title: "MERN Stack",
    description: "MongoDB, Express, React, and Node.js for robust backend",
  },
  {
    icon: <IconBrandPython size={48} color="#000" />,
    title: "Python AI Modules",
    description: "Powering our intelligent financial insights",
  },
  {
    icon: <IconApi size={48} color="#000" />,
    title: "M-Pesa API",
    description: "Seamless integration with mobile money services",
  },
];

const TechnologySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MoneyWise is built using cutting-edge technologies to ensure
            security, reliability, and a seamless user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-accent mb-4 flex justify-center">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
