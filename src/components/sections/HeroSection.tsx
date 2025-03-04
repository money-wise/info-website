import React from "react";
import { Button } from "@mantine/core";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Freedom, One Smart Budget at a Time
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              MoneyWise is an AI-powered application designed to simplify
              personal financial management, automate expense tracking, and help
              you achieve your savings goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-md"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-md"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {/* Image container */}
              <div className="h-64 rounded flex items-center justify-center overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80"
                  alt="App Mockup"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
