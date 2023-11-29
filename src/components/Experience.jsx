import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
        "id": 1,
        "title": "Web Developer Intern",
        "company": "Zerovaega Technologies, Kolhapur",
        "duration": "2 Months",
        "responsibilities": [
          "Managed and led teams for both backend and frontend aspects of live projects.",
          "Responsible for overseeing tasks related to website design, content updates, troubleshooting, and development using HTML, CSS, ProcessWire, and JavaScript.",
          "Utilized Microsoft Word and Excel for company-related work.",
          "Created logos and banner images for websites using Canva.",
          "Emphasize leadership and teamwork skills developed."
        ]
      }
      
    // Add more experiences as needed
  ];

  return (
    <div className="lg:mx-12 mx-4 py-10" id="experience">
      <div className="mb-10">
        <h2 className="md:text-5xl text-center text-4xl text-headingcolor font-bold">
          My <span>Experience</span>
        </h2>
      </div>

      {experiences.map((exp) => (
        <div key={exp.id} className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
            {exp.title}
          </h3>
          <p className="text-lg font-semibold mb-2 text-600">
            <span>{exp.company} | {exp.duration}</span>
          </p>
          <ul className="list-disc list-inside mb-4">
            {exp.responsibilities.map((responsibility, index) => (
              <li key={index} className="mb-2">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;