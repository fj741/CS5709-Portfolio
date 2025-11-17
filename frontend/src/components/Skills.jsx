import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold text-lg">{title}</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-white text-cyan-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
Skills.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired
}

export default Skills;