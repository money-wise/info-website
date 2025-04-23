import React from 'react';
import Button from '../ui/Button';
import AppScreen from "../../assets/svgs/app-screenshot.svg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Take Control of Your Finances
            </h1>
            <p className="text-xl mb-6">
              MoneyWise automatically tracks your spending, helps you budget,
              and gives AI-powered insights to improve your financial health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Download App</Button>
              {/* <Button variant="outline" size="lg">
                Learn More
              </Button> */}
            </div>
          </div>
          <div className="relative">
            <img
              src={AppScreen}
              alt="MoneyWise App"
              className="rounded-lg shadow-2xl max-w-full w-xl h-xl mx-auto md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;