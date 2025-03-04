import React from "react";
import { Timeline, Text } from "@mantine/core";

const developmentSteps = [
  {
    title: "Research and Requirement Gathering",
    description:
      "Collecting user needs and market research to define project scope.",
    timeframe: "Week 1",
  },
  {
    title: "UI/UX Design and Wireframing",
    description:
      "Creating intuitive interfaces and user flows for optimal experience.",
    timeframe: "Week 2",
  },
  {
    title: "Backend and AI Model Development",
    description:
      "Building robust backend services and implementing AI algorithms for financial insights.",
    timeframe: "Weeks 3-5",
  },
  {
    title: "Frontend Development and API Integration",
    description:
      "Implementing the user interface and connecting with backend services.",
    timeframe: "Weeks 6-7",
  },
  {
    title: "Testing and Debugging",
    description:
      "Ensuring application reliability and performance through comprehensive testing.",
    timeframe: "Week 8",
  },
  {
    title: "Beta Testing and User Feedback",
    description:
      "Gathering real user feedback to refine features and experience.",
    timeframe: "Week 9",
  },
  {
    title: "Final Deployment and Market Launch",
    description:
      "Releasing the application to users and initiating marketing campaigns.",
    timeframe: "Week 10",
  },
];

const MethodologySection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Development Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow an agile methodology that emphasizes rapid prototyping and
            continuous user feedback, enabling iterative improvements to deliver
            a secure and intuitive financial management tool.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Timeline active={7} bulletSize={24} lineWidth={2}>
            {developmentSteps.map((step, index) => (
              <Timeline.Item
                key={index}
                title={
                  <Text className="text-lg font-semibold text-primary">
                    {step.title}
                  </Text>
                }
                bullet={
                  <div className="bg-secondary rounded-full w-full h-full" />
                }
              >
                <Text className="text-gray-700">{step.description}</Text>
                <Text size="sm" className="text-secondary font-medium mt-1">
                  {step.timeframe}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
