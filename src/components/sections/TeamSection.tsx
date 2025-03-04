import React from "react";

const teamMembers = [
  {
    name: "Lelgo Isaac",
    role: "Project Lead",
    id: "SCT211-0074/2022",
    image: "/placeholder-profile.jpg",
  },
  {
    name: "Ian Karanja",
    role: "AI/ML Developer",
    id: "SCT211-0461/2022",
    image: "/placeholder-profile.jpg",
  },
  {
    name: "Dalvin Calvin",
    role: "Backend Developer",
    id: "SCT211-0452/2022",
    image: "/placeholder-profile.jpg",
  },
  {
    name: "Alfred Kahenya",
    role: "Frontend Developer",
    id: "SCT211-0023/2021",
    image: "/placeholder-profile.jpg",
  },
  {
    name: "Favian Imbera",
    role: "UI/UX Designer",
    id: "SCT211-0022/2021",
    image: "/placeholder-profile.jpg",
  },
  {
    name: "Samuel Ruoti",
    role: "Database Administrator",
    id: "SCT211-0542/2022",
    image: "/placeholder-profile.jpg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented team of developers, designers, and financial
            specialists working together to build MoneyWise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                <img
                  src="/api/placeholder/100/100"
                  alt={`${member.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-gray-500 text-xl font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-gray-500 text-secondary font-medium">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm">{member.id}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
