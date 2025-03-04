import React from "react";
import { Button } from "@mantine/core";

const CTASection: React.FC = () => {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat min-h-[400px]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4386378/pexels-photo-4386378.jpeg?w=1600')",
      }}
    >
      <div className="container mx-auto px-4 text-center bg-black bg-opacity-60 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already experiencing the benefits of
          AI-powered financial management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-md"
          >
            Get Started Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-md"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
