import React from 'react';

const FutureImprovementsSection: React.FC = () => {
  const improvements = [
    {
      title: 'Offline Mode',
      description: 'Add local storage capabilities for offline usage, allowing you to access your financial data even without an internet connection.',
    },
    {
      title: 'iOS Support',
      description: 'Extend the application to iOS devices, making MoneyWise available to iPhone users.',
    },
    {
      title: 'Integration with Banks',
      description: 'Connect directly with bank APIs for automatic transaction tracking beyond M-Pesa.',
    },
    {
      title: 'Advanced Forecasting',
      description: 'Implement predictive analysis to forecast future expenses and help with financial planning.',
    },
  ];

  return (
    <section className="py-20 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're continuously improving MoneyWise. Here's what we're working on next.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {improvements.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-600 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureImprovementsSection;