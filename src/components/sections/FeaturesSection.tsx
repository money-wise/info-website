import React from "react";
import {
  IconWallet,
  IconChartPie,
  IconTargetArrow,
  IconChartBar,
} from "@tabler/icons-react";

const features = [
  {
    icon: <IconWallet size={48} color="#000" />,
    title: "Automated Expense Tracking",
    description:
      "Consolidate and monitor all your transactions effortlessly with our M-Pesa integration.",
  },
  {
    icon: <IconChartPie size={48} color="#000" />,
    title: "Intelligent Categorization",
    description:
      "Leverage AI to automatically sort and analyze your spending patterns.",
  },
  {
    icon: <IconTargetArrow size={48} color="#000" />,
    title: "Goal-Based Savings",
    description:
      "Set targets and receive timely alerts to stay on track with your financial objectives.",
  },
  {
    icon: <IconChartBar size={48} color="#000" />,
    title: "Real-Time Insights",
    description:
      "Get instant, personalized feedback on your spending habits and budgeting strategies.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MoneyWise offers powerful features to help you take control of your
            finances and make smarter decisions about your money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-secondary mb-4">{feature.icon}</div>
              {/* {feature.icon} */}
              <h3 className="text-gray-700 text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
