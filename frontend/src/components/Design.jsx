
import React from "react";

const Design= () => {
  const events = [
    {
      year: '2021',
      title: 'BsC General Science',
      description: 'Completed my Bachelor of Science in Maynooth University.',
    },
    {
      year: '2024',
      title: 'Diploma',
      description: 'Completed a Diploma in Full Stack Software Development in UCD',
    },
    {
      year: '2026',
      title: 'MsC Software Enginnering',
      description: 'Currently pursuing a Masters in Limerick University',
    },
  ];

  return (
    <div className="relative border-l-2 border-gray-300 pl-6">
      {events.map((event) => (
        <div key={event} className="mb-10">
          <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
          <h3 className="text-lg font-semibold">{event.year}</h3>
          <h4 className="text-md font-medium text-gray-700">{event.title}</h4>
          <p className="text-sm text-gray-500">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Design;