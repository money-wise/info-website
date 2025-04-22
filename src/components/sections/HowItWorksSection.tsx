import React from 'react';
import { motion } from 'framer-motion';
import Step1 from "../../assets/images/Step1.png";
import Step2 from "../../assets/images/Step2.webp";
import Step3 from "../../assets/svgs/Step3.svg";
import Step4 from "../../assets/svgs/Step4.svg";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Connect Your M-Pesa",
      description:
        "MoneyWise reads your M-Pesa SMS messages directly from your phone.",
      imageUrl: Step1,
    },
    {
      title: "Automatic Categorization",
      description:
        "Our AI breaks down and categorizes your transactions automatically.",
      imageUrl: Step2,
    },
    {
      title: "Review & Customize",
      description:
        "Review transactions and manually categorize when needed. Add non-M-Pesa transactions too.",
      imageUrl: Step3,
    },
    {
      title: "Get Insights & Set Budgets",
      description:
        "View spending breakdowns and set up budgets with AI recommendations.",
      imageUrl: Step4,
    },
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How MoneyWise Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is easy - follow these simple steps to take control
            of your finances.
          </p>
        </div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "md:pl-12" : "md:pr-12"}>
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-lg text-gray-600">{step.description}</p>
            </div>
            <div className=" rounded-lg overflow-hidden  items-center flex justify-center">
              <img
                src={step.imageUrl}
                alt={`Step ${index + 1}: ${step.title}`}
                className="w-80 h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;