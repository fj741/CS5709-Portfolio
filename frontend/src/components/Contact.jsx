import React from 'react';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div className="flex flex-col p-6 shadow-xl items-center justify-center bg-white m-10 rounded-md max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold text-cyan-800 mb-4">Get in Touch</h1>
      <p className="text-gray-600 mb-6">
        For professional inquiries or collaborations, feel free to reach out using the contact options below.
      </p>
      <div className="flex items-center gap-2 text-gray-700 mb-2">
        <FontAwesomeIcon icon={faEnvelope} className="text-cyan-600 text-xl" />
        <p className="italic text-gray-500">Email available upon request</p>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <FontAwesomeIcon icon={faPhone} className="text-cyan-600 text-xl" />
        <p className="italic text-gray-500">Phone number available upon request</p>
      </div>
    </div>
  );
};

export default Contact;