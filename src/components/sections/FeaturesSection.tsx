import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { FaWallet, FaChartPie, FaBell, FaRobot } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Automatic Transaction Tracking',
      description: 'MoneyWise reads your M-Pesa messages and automatically categorizes your transactions.',
      icon: <FaWallet size={30} />,
    },
    {
      title: 'Smart Budgeting',
      description: 'Create budgets manually or get AI-powered recommendations based on your spending patterns.',
      icon: <FaChartPie size={30} />,
    },
    {
      title: 'Spending Alerts',
      description: 'Receive notifications when you are approaching your budget limits to avoid overspending.',
      icon: <FaBell size={30} />,
    },
    {
      title: 'AI Financial Insights',
      description: 'Get personalized advice and insights about your spending habits from our AI assistant.',
      icon: <FaRobot size={30} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MoneyWise combines automation with AI to make managing your finances
            effortless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;