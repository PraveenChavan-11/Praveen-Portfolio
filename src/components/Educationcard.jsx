import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
    {
        id: 1,
        degree: "Master of Computer Applications",
        institution: "Chh. Shahu Institute of Business Education and Research, Kolhapur.",
        year: "2023",
    },
    {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        institution: "Smt. Kasturbai Walchand College, Sangli",
        year: "2021",
    },
    {
        id: 3,
        degree: "Higher Secondary Education",
        institution: "Padmabhushan Dr. Vasantraodada Patil Mahavidyalaya, Tasgaon.",
        year: "2018",
    },
    {
        id: 4,
        degree: "Secondary School Certificate",
        institution: "Anandsagar Public School, Tasgaon.",
        year: "2016",
    },
];

const EducationSection = () => {
  return (
    <div className="py-10 px-4 lg:px-20 flex flex-col lg:flex-row items-center">
      {education.map((edu) => (
        <div key={edu.id} className="flex items-center mb-8 lg:mb-0 lg:mr-5">
          <div className="relative z-10">
            <FaGraduationCap className="text-3xl text-[#20B2AA]" />
          </div>
          <div className="ml-4">
            <p className="text-lg font-bold">{edu.degree}</p>
            <p className="text-sm text-600 justify">{edu.institution}</p>
            <p className="text-sm text-600">{`Passout Year: ${edu.year}`}</p>
          </div>
        </div>
      ))}
      {education.length > 1 && (
        <div className="hidden lg:block absolute top-0 left-7 w-0.5 bg-gray-300 z-0">
          {education.slice(0, -1).map((_, index) => (
            <div key={index} className="connector-line" />
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationSection;
