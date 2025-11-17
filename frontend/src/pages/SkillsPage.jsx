import React from 'react';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <div className="flex flex-col text-center items-center text-gray-800 mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Professional Skills</h1>

      <div className="flex flex-col gap-6 bg-cyan-800 px-10 py-8 text-white rounded-lg shadow-xl max-w-3xl w-full">
        <Skills
          title="Frontend Languages and Frameworks"
          skills={['HTML', 'CSS', 'TailwindCSS', 'React', 'JavaScript']}
        />
        <Skills
          title="Backend Languages and Technologies"
          skills={['Python', 'Django', 'NodeJS']}
        />
        <Skills
          title="Object Oriented Languages"
          skills={['JavaScript', 'Java', 'Python']}
        />
      </div>
    </div>
  );
};

export default SkillsPage;